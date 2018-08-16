#!/usr/bin/env python2.7

import os
import shutil

from setuptools import setup, Extension
from setuptools.command.install import install

from src.version import softwareVersion


EXTRAS_REQUIRE = {
    'gir': ['pygobject'],
    'notify2': ['notify2'],
    'pyopencl': ['pyopencl'],
    'prctl': ['python_prctl'],  # Named threads
    'qrcode': ['qrcode'],
    'sound;platform_system=="Windows"': ['winsound'],
    'docs': [
        'sphinx',  # fab build_docs
        'graphviz',  # fab build_docs
        'curses',  # src/depends.py
        'python2-pythondialog',  # src/depends.py
        'm2r',  # fab build_docs
    ],
}


class InstallCmd(install):
    def run(self):
        # prepare icons directories
        try:
            os.makedirs('desktop/icons/scalable')
        except os.error:
            pass
        shutil.copyfile(
            'desktop/can-icon.svg', 'desktop/icons/scalable/pylmessage.svg')
        try:
            os.makedirs('desktop/icons/24x24')
        except os.error:
            pass
        shutil.copyfile(
            'desktop/icon24.png', 'desktop/icons/24x24/pylmessage.png')

        return install.run(self)


if __name__ == "__main__":
    here = os.path.abspath(os.path.dirname(__file__))
    with open(os.path.join(here, 'README.md')) as f:
        README = f.read()

    bitmsghash = Extension(
        'pylmessage.bitmsghash.bitmsghash',
        sources=['src/bitmsghash/bitmsghash.cpp'],
        libraries=['pthread', 'crypto'],
    )

    installRequires = []
    packages = [
        'pylmessage',
        'pylmessage.lmessageqt',
        'pylmessage.lmessagecurses',
        'pylmessage.messagetypes',
        'pylmessage.network',
        'pylmessage.pyelliptic',
        'pylmessage.socks',
        'pylmessage.storage',
        'pylmessage.plugins'
    ]

    # this will silently accept alternative providers of msgpack
    # if they are already installed

    try:
        import msgpack
        installRequires.append("msgpack-python")
    except ImportError:
        try:
            import umsgpack
            installRequires.append("umsgpack")
        except ImportError:
            packages += ['pylmessage.fallback', 'pylmessage.fallback.umsgpack']

    dist = setup(
        name='pylmessage',
        version=softwareVersion,
        description="Reference client for LMessage: "
        "a P2P communications protocol",
        long_description=README,
        license='MIT',
        # TODO: add author info
        #author='',
        #author_email='',
        url='https://lmessage.org',
        # TODO: add keywords
        #keywords='',
        install_requires=installRequires,
        extras_require=EXTRAS_REQUIRE,
        classifiers=[
            "License :: OSI Approved :: MIT License"
            "Operating System :: OS Independent",
            "Programming Language :: Python :: 2.7 :: Only",
            "Topic :: Internet",
            "Topic :: Security :: Cryptography",
            "Topic :: Software Development :: Libraries :: Python Modules",
        ],
        package_dir={'pylmessage': 'src'},
        packages=packages,
        package_data={'': [
            'lmessageqt/*.ui', 'bitmsghash/*.cl', 'sslkeys/*.pem',
            'translations/*.ts', 'translations/*.qm',
            'images/*.png', 'images/*.ico', 'images/*.icns'
        ]},
        data_files=[
            ('share/applications/',
                ['desktop/pylmessage.desktop']),
            ('share/icons/hicolor/scalable/apps/',
                ['desktop/icons/scalable/pylmessage.svg']),
            ('share/icons/hicolor/24x24/apps/',
                ['desktop/icons/24x24/pylmessage.png'])
        ],
        ext_modules=[bitmsghash],
        zip_safe=False,
        entry_points={
            'lmessage.gui.menu': [
                'address.qrcode = pylmessage.plugins.menu_qrcode [qrcode]'
            ],
            'lmessage.notification.message': [
                'notify2 = pylmessage.plugins.notification_notify2'
                '[gir, notify2]'
            ],
            'lmessage.notification.sound': [
                'theme.canberra = pylmessage.plugins.sound_canberra',
                'file.gstreamer = pylmessage.plugins.sound_gstreamer'
                '[gir]',
                'file.fallback = pylmessage.plugins.sound_playfile'
                '[sound]'
            ],
            'lmessage.indicator': [
                'libmessaging ='
                'pylmessage.plugins.indicator_libmessaging [gir]'
            ],
            # 'console_scripts': [
            #        'pylmessage = pylmessage.lmessagemain:main'
            # ]
        },
        scripts=['src/pylmessage'],
        cmdclass={'install': InstallCmd}
    )
