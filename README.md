firefox-plugin-popup-logout
===========================

Firefox plugin to unhide the logout buttons.

Makefile
========

Clean working directory:

$ make clean

Create new .xpi file using xpi folder files

$ make xpi

Change Log
=========

0.1
	- Initial version
	- Sites includes: facebook.com, twitter.com, tuenti.com, mail.google.com, mail.live.com, linkedin.com, about.me
0.1.1
	- Fixed mozilla reviewed issues
		- Manage DOM nodes creates dinamically. https://developer.mozilla.org/en/XUL_School/DOM_Building_and_HTML_Insertion.
		- Move remote images to be loaded from add-on.
		- doc.location.host
		- Wrap variables and functions within a JavasScript Object. https://developer.mozilla.org/en/XUL_School/JavaScript_Object_Management
