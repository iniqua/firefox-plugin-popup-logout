

// var sites = ....;		This has been moved to sites.js

var freeSignOut = function (sitesarg) {
	var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);

	// future version should download next from an online database, cached at local firefox database.
	var sites = sitesarg;

	return {
		init : function () {
			gBrowser.addEventListener("load", function () {
				var autoRun = prefManager.getBoolPref("extensions.popupLogout2058.autorun");
				if (autoRun) {
					freeSignOut.run();
				}
			}, true);
		},
			
		run : function () {

			doc = content.document;

			if (window.top != window.self)  //don't run on frames or iframes
				return;

			banner = '';
			for (var i=0;i<sites.length;i++) {
				if (sites[i].check(doc.location.host)) {
					banner = sites[i].banner(doc);
					banda = sites[i].banda(doc);
					break;
				}
			}
			if (banner == '')
			{
				banda='<img style="position: fixed; bottom: 0; right: 0; border: 0; z-index: 999999;" src="chrome://popupLogout2058/skin/LogOut_right_bottom_green_007200.png" alt="Logout Push up">';
				banner = 'mailto:ffranz@iniqua.com?subject=Free sign out at '+doc.domain+'&body=Your message here'
			}else{
				bodyList = doc.getElementsByTagName('body');
				if (bodyList != null) bodyElement = bodyList[0];
				bannerobj = doc.createElement('a');
				bannerobj.id = 'sopu';
				bannerobj.href = banner;
				bannerobj.innerHTML = banda;
				if (bodyElement != null) bodyElement.appendChild(bannerobj);
			}
		},

		update : function(sitesarg) {
			sites = sitesarg;
			alert('sites updated');
		}
	};
}(sites);

window.addEventListener("load", freeSignOut.init, false);

