default: clean xpi

clean::
	-rm popup-logout.xpi

xpi::
	( cd xpi; zip -r ../popup-logout.xpi * )
