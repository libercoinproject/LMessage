#!/bin/bash

if [ ! -f "$1" ]; then
	echo "$1 not found, please specify the file name for source"
	exit
fi

srcdir=`mktemp -d`

unzip "$1" -d $srcdir

for i in $srcdir/*ts; do
	o=`basename $i|cut -b3-`
	o="${o,,}"
	o="${o//@/_}"
	echo "$i -> $o"
	mv "$i" "$HOME/src/PyLMessage/src/translations/$o"
done

rm -rf -- $srcdir

lrelease-qt4 "$HOME/src/PyLMessage/src/translations/lmessage.pro"
