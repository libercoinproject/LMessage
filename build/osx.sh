#!/bin/bash

# OS X Build script wrapper around the py2app script.
# This build can only be generated on OS X.
# Requires all build dependencies for LMessage
# Especially important is OpenSSL installed through brew

export ARCHFLAGS="-arch i386 -arch x86_64" 

if [[ -z "$1" ]]; then
  echo "Please supply a version number for this release as the first argument."
  exit
fi

echo "Creating OS X packages for LMessage."

export PYLMESSAGEVERSION=$1

cd src && python2.7 build_osx.py py2app

if [[ $? = "0" ]]; then
  hdiutil create -fs HFS+ -volname "LMessage" -srcfolder dist/LMessage.app dist/lmessage-v$1.dmg
else
  echo "Problem creating LMessage.app, stopping."
  exit
fi
