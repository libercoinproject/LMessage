"""Helper Start performs all the startup operations."""

import ConfigParser
from bmconfigparser import BMConfigParser
import defaults
import sys
import os
import platform
from distutils.version import StrictVersion

import paths
import state
import helper_random

# The user may de-select Portable Mode in the settings if they want
# the config files to stay in the application data folder.
StoreConfigFilesInSameDirectoryAsProgramByDefault = False


def _loadTrustedPeer():
    try:
        trustedPeer = BMConfigParser().get('lmessagesettings', 'trustedpeer')
    except ConfigParser.Error:
        # This probably means the trusted peer wasn't specified so we
        # can just leave it as None
        return

    host, port = trustedPeer.split(':')
    state.trustedPeer = state.Peer(host, int(port))


def loadConfig():
    config = BMConfigParser()
    if state.appdata:
        config.read(state.appdata + 'keys.dat')
        # state.appdata must have been specified as a startup option.
        needToCreateKeysFile = config.safeGet(
            'lmessagesettings', 'settingsversion') is None
        if not needToCreateKeysFile:
            print(
                'Loading config files from directory specified'
                ' on startup: %s' % state.appdata)
    else:
        config.read(paths.lookupExeFolder() + 'keys.dat')
        try:
            config.get('lmessagesettings', 'settingsversion')
            print 'Loading config files from same directory as program.'
            needToCreateKeysFile = False
            state.appdata = paths.lookupExeFolder()
        except:
            # Could not load the keys.dat file in the program directory.
            # Perhaps it is in the appdata directory.
            state.appdata = paths.lookupAppdataFolder()
            config.read(state.appdata + 'keys.dat')
            needToCreateKeysFile = config.safeGet(
                'lmessagesettings', 'settingsversion') is None
            if not needToCreateKeysFile:
                print 'Loading existing config files from', state.appdata

    if needToCreateKeysFile:

        # This appears to be the first time running the program; there is
        # no config file (or it cannot be accessed). Create config file.
        config.add_section('lmessagesettings')
        config.set('lmessagesettings', 'settingsversion', '10')
        config.set('lmessagesettings', 'port', '8444')
        config.set('lmessagesettings', 'timeformat', '%%c')
        config.set('lmessagesettings', 'blackwhitelist', 'black')
        config.set('lmessagesettings', 'startonlogon', 'false')
        if 'linux' in sys.platform:
            config.set('lmessagesettings', 'minimizetotray', 'false')
        # This isn't implimented yet and when True on
        # Ubuntu causes LMessage to disappear while
        # running when minimized.
        else:
            config.set('lmessagesettings', 'minimizetotray', 'true')
        config.set('lmessagesettings', 'showtraynotifications', 'true')
        config.set('lmessagesettings', 'startintray', 'false')
        config.set('lmessagesettings', 'socksproxytype', 'none')
        config.set('lmessagesettings', 'sockshostname', 'localhost')
        config.set('lmessagesettings', 'socksport', '9050')
        config.set('lmessagesettings', 'socksauthentication', 'false')
        # config.set('lmessagesettings', 'sockslisten', 'false')
        config.set('lmessagesettings', 'socksusername', '')
        config.set('lmessagesettings', 'sockspassword', '')
        config.set('lmessagesettings', 'keysencrypted', 'false')
        config.set('lmessagesettings', 'messagesencrypted', 'false')
        config.set(
            'lmessagesettings', 'defaultnoncetrialsperbyte',
            str(defaults.networkDefaultProofOfWorkNonceTrialsPerByte))
        config.set(
            'lmessagesettings', 'defaultpayloadlengthextrabytes',
            str(defaults.networkDefaultPayloadLengthExtraBytes))
        config.set('lmessagesettings', 'minimizeonclose', 'false')
        # config.set(
        #     'lmessagesettings', 'maxacceptablenoncetrialsperbyte', '0')
        # config.set(
        #     'lmessagesettings', 'maxacceptablepayloadlengthextrabytes',
        #     '0')
        config.set('lmessagesettings', 'dontconnect', 'true')
        # config.set('lmessagesettings', 'userlocale', 'system')
        # config.set('lmessagesettings', 'useidenticons', 'True')
        # config.set(
        #     'lmessagesettings', 'identiconsuffix',
        #     ''.join(helper_random.randomchoice(
        #         "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
        #         ) for x in range(12)
        #     ))  # a twelve character pseudo-password to salt the identicons
        config.set('lmessagesettings', 'replybelow', 'False')
        config.set('lmessagesettings', 'maxdownloadrate', '0')
        config.set('lmessagesettings', 'maxuploadrate', '0')
        # config.set('lmessagesettings', 'maxoutboundconnections', '8')
        # config.set('lmessagesettings', 'ttl', '367200')

        # UI setting to stop trying to send messages after X days/months
        config.set('lmessagesettings', 'stopresendingafterxdays', '')
        config.set('lmessagesettings', 'stopresendingafterxmonths', '')
        # config.set('lmessagesettings', 'timeperiod', '-1')

        # Are you hoping to add a new option to the keys.dat file? You're in
        # the right place for adding it to users who install the software for
        # the first time. But you must also add it to the keys.dat file of
        # existing users. To do that, search the class_sqlThread.py file
        # for the text: "right above this line!"

        if StoreConfigFilesInSameDirectoryAsProgramByDefault:
            # Just use the same directory as the program and forget about
            # the appdata folder
            state.appdata = ''
            print 'Creating new config files in same directory as program.'
        else:
            print 'Creating new config files in', state.appdata
            if not os.path.exists(state.appdata):
                os.makedirs(state.appdata)
        if not sys.platform.startswith('win'):
            os.umask(0o077)
        config.save()
    else:
        updateConfig()

    _loadTrustedPeer()


def updateConfig():
    config = BMConfigParser()
    settingsversion = config.getint('lmessagesettings', 'settingsversion')
    if settingsversion == 1:
        config.set('lmessagesettings', 'socksproxytype', 'none')
        config.set('lmessagesettings', 'sockshostname', 'localhost')
        config.set('lmessagesettings', 'socksport', '9050')
        config.set('lmessagesettings', 'socksauthentication', 'false')
        config.set('lmessagesettings', 'socksusername', '')
        config.set('lmessagesettings', 'sockspassword', '')
        config.set('lmessagesettings', 'sockslisten', 'false')
        config.set('lmessagesettings', 'keysencrypted', 'false')
        config.set('lmessagesettings', 'messagesencrypted', 'false')
        settingsversion = 2
    # let class_sqlThread update SQL and continue
    elif settingsversion == 4:
        config.set(
            'lmessagesettings', 'defaultnoncetrialsperbyte',
            str(defaults.networkDefaultProofOfWorkNonceTrialsPerByte))
        config.set(
            'lmessagesettings', 'defaultpayloadlengthextrabytes',
            str(defaults.networkDefaultPayloadLengthExtraBytes))
        settingsversion = 5

    if settingsversion == 5:
        config.set(
            'lmessagesettings', 'maxacceptablenoncetrialsperbyte', '0')
        config.set(
            'lmessagesettings', 'maxacceptablepayloadlengthextrabytes', '0')
        settingsversion = 7

    # Raise the default required difficulty from 1 to 2
    # With the change to protocol v3, this is obsolete.
    # if settingsversion == 6:
    #     if int(shared.config.get(
    #             'lmessagesettings', 'defaultnoncetrialsperbyte'
    #     )) == defaults.networkDefaultProofOfWorkNonceTrialsPerByte:
    #         shared.config.set(
    #             'lmessagesettings', 'defaultnoncetrialsperbyte',
    #             str(
    #                 defaults.networkDefaultProofOfWorkNonceTrialsPerByte
    #                 * 2)
    #         )
    #     settingsversion = 7

    if not config.has_option('lmessagesettings', 'sockslisten'):
        config.set('lmessagesettings', 'sockslisten', 'false')

    if not config.has_option('lmessagesettings', 'userlocale'):
        config.set('lmessagesettings', 'userlocale', 'system')

    if not config.has_option('lmessagesettings', 'sendoutgoingconnections'):
        config.set('lmessagesettings', 'sendoutgoingconnections', 'True')

    if not config.has_option('lmessagesettings', 'useidenticons'):
        config.set('lmessagesettings', 'useidenticons', 'True')
    if not config.has_option('lmessagesettings', 'identiconsuffix'):
        # acts as a salt
        config.set(
            'lmessagesettings', 'identiconsuffix',
            ''.join(helper_random.randomchoice(
                "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
            ) for x in range(12)
            ))  # a twelve character pseudo-password to salt the identicons

    # Add settings to support no longer resending messages after
    # a certain period of time even if we never get an ack
    if settingsversion == 7:
        config.set('lmessagesettings', 'stopresendingafterxdays', '')
        config.set('lmessagesettings', 'stopresendingafterxmonths', '')
        settingsversion = 8

    # With the change to protocol version 3, reset the user-settable
    # difficulties to 1
    if settingsversion == 8:
        config.set(
            'lmessagesettings', 'defaultnoncetrialsperbyte',
            str(defaults.networkDefaultProofOfWorkNonceTrialsPerByte))
        config.set(
            'lmessagesettings', 'defaultpayloadlengthextrabytes',
            str(defaults.networkDefaultPayloadLengthExtraBytes))
        previousTotalDifficulty = int(
            config.getint(
                'lmessagesettings', 'maxacceptablenoncetrialsperbyte')
        ) / 320
        previousSmallMessageDifficulty = int(
            config.getint(
                'lmessagesettings', 'maxacceptablepayloadlengthextrabytes')
        ) / 14000
        config.set(
            'lmessagesettings', 'maxacceptablenoncetrialsperbyte',
            str(previousTotalDifficulty * 1000))
        config.set(
            'lmessagesettings', 'maxacceptablepayloadlengthextrabytes',
            str(previousSmallMessageDifficulty * 1000))
        settingsversion = 9

    # Adjust the required POW values for each of this user's addresses
    # to conform to protocol v3 norms.
    if settingsversion == 9:
        for addressInKeysFile in config.addresses():
            try:
                previousTotalDifficulty = float(
                    config.getint(
                        addressInKeysFile, 'noncetrialsperbyte')) / 320
                previousSmallMessageDifficulty = float(
                    config.getint(
                        addressInKeysFile, 'payloadlengthextrabytes')) / 14000
                if previousTotalDifficulty <= 2:
                    previousTotalDifficulty = 1
                if previousSmallMessageDifficulty < 1:
                    previousSmallMessageDifficulty = 1
                config.set(
                    addressInKeysFile, 'noncetrialsperbyte',
                    str(int(previousTotalDifficulty * 1000)))
                config.set(
                    addressInKeysFile, 'payloadlengthextrabytes',
                    str(int(previousSmallMessageDifficulty * 1000)))
            except Exception:
                continue
        config.set('lmessagesettings', 'maxdownloadrate', '0')
        config.set('lmessagesettings', 'maxuploadrate', '0')
        settingsversion = 10

    # sanity check
    if config.safeGetInt(
            'lmessagesettings', 'maxacceptablenoncetrialsperbyte') == 0:
        config.set(
            'lmessagesettings', 'maxacceptablenoncetrialsperbyte',
            str(defaults.ridiculousDifficulty *
                defaults.networkDefaultProofOfWorkNonceTrialsPerByte)
        )
    if config.safeGetInt(
        'lmessagesettings', 'maxacceptablepayloadlengthextrabytes'
    ) == 0:
        config.set(
            'lmessagesettings', 'maxacceptablepayloadlengthextrabytes',
            str(defaults.ridiculousDifficulty *
                defaults.networkDefaultPayloadLengthExtraBytes)
        )

    if not config.has_option('lmessagesettings', 'onionhostname'):
        config.set('lmessagesettings', 'onionhostname', '')
    if not config.has_option('lmessagesettings', 'onionport'):
        config.set('lmessagesettings', 'onionport', '8444')
    if not config.has_option('lmessagesettings', 'onionbindip'):
        config.set('lmessagesettings', 'onionbindip', '127.0.0.1')
    if not config.has_option('lmessagesettings', 'smtpdeliver'):
        config.set('lmessagesettings', 'smtpdeliver', '')
    if not config.has_option(
            'lmessagesettings', 'hidetrayconnectionnotifications'):
        config.set(
            'lmessagesettings', 'hidetrayconnectionnotifications', 'false')
    if config.safeGetInt('lmessagesettings', 'maxoutboundconnections') < 1:
        config.set('lmessagesettings', 'maxoutboundconnections', '8')
        print('WARNING: your maximum outbound connections must be a number.')

    # TTL is now user-specifiable. Let's add an option to save
    # whatever the user selects.
    if not config.has_option('lmessagesettings', 'ttl'):
        config.set('lmessagesettings', 'ttl', '367200')

    config.set('lmessagesettings', 'settingsversion', str(settingsversion))
    config.save()


def isOurOperatingSystemLimitedToHavingVeryFewHalfOpenConnections():
    try:
        if sys.platform[0:3] == "win":
            VER_THIS = StrictVersion(platform.version())
            return (
                StrictVersion("5.1.2600") <= VER_THIS and
                StrictVersion("6.0.6000") >= VER_THIS
            )
        return False
    except Exception:
        pass
