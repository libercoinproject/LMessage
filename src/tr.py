import os

import shared

# This is used so that the translateText function can be used when we are in daemon mode and not using any QT functions.
class translateClass:
    def __init__(self, context, text):
        self.context = context
        self.text = text
    def arg(self,argument):
        if '%' in self.text:
            return translateClass(self.context, self.text.replace('%','',1)) # This doesn't actually do anything with the arguments because we don't have a UI in which to display this information anyway.
        else:
            return self.text

def _translate(context, text, disambiguation = None, encoding = None, n = None):
    return translateText(context, text, n)

def translateText(context, text, n = None):
    try:
        is_daemon = shared.thisapp.daemon
    except AttributeError:  # inside the plugin
        is_daemon = False
    if not is_daemon:
        try:
            from PyQt4 import QtCore, QtGui
        except Exception as err:
            print 'PyLMessage requires PyQt unless you want to run it as a daemon and interact with it using the API. You can download PyQt from http://www.riverbankcomputing.com/software/pyqt/download   or by searching Google for \'PyQt Download\'. If you want to run in daemon mode, see https://lmessage.org/wiki/Daemon'
            print 'Error message:', err
            os._exit(0)
        if n is None:
            return QtGui.QApplication.translate(context, text)
        else:
            return QtGui.QApplication.translate(context, text, None, QtCore.QCoreApplication.CodecForTr, n)
    else:
        if '%' in text:
            return translateClass(context, text.replace('%','',1))
        else:
            return text
