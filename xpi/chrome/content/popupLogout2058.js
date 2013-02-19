if ("undefined" == typeof(FreeSignOut)) {
	var FreeSignOut = {};
};

// var sites = ....;		This has been moved to sites.js

FreeSignOut.Logout = {

	element_id: "popup_logout_element",

	image_right: "chrome://popupLogout2058/skin/LogOut_right_green_007200.png",

	image_left:  "chrome://popupLogout2058/skin/LogOut_right_bottom_green_007200.png",

	preferencesRoot: "extensions.popupLogout2058.",

	prefManager: "",

	sites: "",

	init: function () {

		FreeSignOut.Logout.prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);

		window.addEventListener("load", FreeSignOut.Logout.onBrowserLoad, false);
	},

	preferenceId: function (subid) {
		return FreeSignOut.Logout.preferencesRoot + subid;
	},

	onBrowserLoad : function () {

		gBrowser.addEventListener("load", function () {
			var autoRun = FreeSignOut.Logout.prefManager.getBoolPref(FreeSignOut.Logout.preferenceId("autorun"));
			if (autoRun) {
				FreeSignOut.Logout.run();
			}
		}, true);
	},

	enabled: function(site) {
		var prefID = FreeSignOut.Logout.preferenceId("site."+site.id);
		var hasUserValue = FreeSignOut.Logout.prefManager.prefHasUserValue(prefID);
		if (!hasUserValue) {
			FreeSignOut.Logout.prefManager.setBoolPref(prefID,true);
			return true;
		}
		var value = FreeSignOut.Logout.prefManager.getBoolPref(prefID);
		return value;
	},
		
	run: function () {

		doc = content.document;

		var sites = FreeSignOut.sites;

		if (window.top != window.self)  //don't run on frames or iframes
			return;

		var banner = '';
		for (var i=0;i<sites.length;i++) {
			if (FreeSignOut.Logout.enabled(sites[i])) {
				if (sites[i].check(doc.location.host)) {
					banner = sites[i].banner(doc);
					banda = sites[i].banda(doc);
					break;
				}
			}
		}
		if (banner == '')
		{
			banda='<img style="position: fixed; bottom: 0; right: 0; border: 0; z-index: 999999;" src="' + FreeSignOut.Logout.image_left + '" alt="Logout Push up">';
			banner = 'mailto:ffranz@iniqua.com?subject=Free sign out at '+doc.domain+'&body=Your message here'
		}else{
			bodyList = doc.getElementsByTagName('body');
			if (bodyList != null) bodyElement = bodyList[0];
			bannerobj = doc.createElement('a');
			bannerobj.id = FreeSignOut.Logout.element_id;
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

FreeSignOut.Logout.init();

