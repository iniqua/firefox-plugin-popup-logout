if ("undefined" == typeof(FreeSignOut)) {
	var FreeSignOut = {};
};

FreeSignOut.sites = new Array(

	/* Each entry must contain:

		id: string identifier for this site.
		check: function(url): check if a url matches this entry.
		banda (deprecated): function(doc): return the <img> tag to be inserted in innerHTML for the <A> tag.
		banner (deprecated): function(doc): the url to go when the banned is clicked.
		href: function(doc): the url to go when the banner is clicked.
		drawButton: function(doc, defaults, sitei): return the html component to be drawn. Return null if the component yet exists.

		* Being:
			- doc is the document object.
			- defaults is an object containing default values and utility functions (see main js).
			- sitei is the entry being run.
*/

	{	// start entry for facebook.com
		id: "facebook.com",
		check: function(url) {
			return url.match('facebook.com/*');
		},
		banda: function(doc) {
			if (doc.getElementById('reg_form_box') || (doc.getElementById(FreeSignOut.Logout.element_id))) return '';
			else return '<img style="position: fixed; top: 38px; right: 0; border: 0;" src="chrome://popupLogout2058/skin/LogOut_right_green_007200.png" alt="Logout Push up">';
		},
		href: function(doc) {
			return 'javascript: document.forms["logout_form"].submit()';
			//'<form id="logout_form" onsubmit="return window.Event && Event.__inlineSubmit && Event.__inlineSubmit(this,event)" action="/logout.php" method="post"></form>'
		},
		drawButton: function(doc, defaults, sitei) {
			if (doc.getElementById('reg_form_box') || (doc.getElementById(FreeSignOut.Logout.element_id)))
				return null;
			var button = defaults.banner1(doc, sitei.href(doc), defaults.image_right);
			button.style.top = '38px';
			return button;
		}
	},
	{	// start entry for twitter.com
		id: 'twitter.com',
		check: function(url) {
			return url.match('twitter.com/*');
		},
		banda: function(doc) {
			if (!doc.getElementById('global-nav-home') || (doc.getElementById(FreeSignOut.Logout.element_id))) return '';
			else return '<img style="position: fixed; top: 40px; right: 0; border: 0;" src="chrome://popupLogout2058/skin/LogOut_right_green_007200.png" alt="Logout Push up">';
		},
		banner: function(doc) {
			return 'javascript: document.forms["signout-form"].submit()';
		}
	},
	{	// start entry for tuenti.com
		id: 'tuenti.com',
		check: function(url) {
			return url.match('tuenti.com/*');
		},
		banda: function(doc) {
			if (doc.getElementById('login_canvas') || (doc.getElementById(FreeSignOut.Logout.element_id))) return '';
			else return '<img style="position: fixed; top: 39px; right: 0; border: 0; z-index: 999999;" src="chrome://popupLogout2058/skin/LogOut_right_green_007200.png" alt="Logout Push up">';
		},
		banner: function(doc) {
			return "javascript:waitForMe=setTimeout(function(){document.location='?m=login'},4000);document.getElementById('more_options_button_header').click();document.getElementById('tab_logout').click();";
		}
	},
	{	// start entry for mail.google.com
		id: 'mail.google.com',
		check: function(url) {
			return url.match('mail.google.com/*');
		},
		banda: function(doc) {
			if (doc.getElementById('gaia_loginform') || (doc.getElementById(FreeSignOut.Logout.element_id))) return '';
			else return '<img style="position: fixed; bottom: 0px; right: 0; border: 0; z-index: 999999;" src="chrome://popupLogout2058/skin/LogOut_right_bottom_green_007200.png" alt="Logout Push up">';
		},
		banner: function(doc) {
			return "javascript:document.getElementById('gb_71').click();";
		}
	},
	{	// start entry for mail.live.com
		id: 'live.com',
		check: function(url) {
			return url.match('live.com/*');
		},
		banda: function(doc) {
			if (!doc.getElementById('c_me') || (doc.getElementById(FreeSignOut.Logout.element_id))) return '';
			else return '<img style="position: fixed; bottom: 0px; right: 0; border: 0; z-index: 999999;" src="chrome://popupLogout2058/skin/LogOut_right_bottom_green_007200.png" alt="Logout Push up">';
		},
		banner: function(doc) {
			if (doc.getElementById('c_signout')!=null) {
				return 'javascript:document.location="https://login.live.com/logout.srf";';
			} else return '';
		}
	},
	{	// start entry for linkedin.com
		id: 'linkedin.com',
		check: function(url) {
			return url.match('linkedin.com/*');
		},
		banda: function(doc) {
			if (!doc.getElementById('nav-utility-auth') || (doc.getElementById(FreeSignOut.Logout.element_id))) return '';
			else return '<img style="position: fixed; bottom: 0px; right: 0; border: 0; z-index: 999999;" src="chrome://popupLogout2058/skin/LogOut_right_bottom_green_007200.png" alt="Logout Push up">';
		},
		banner: function(doc) {
			return "javascript:document.getElementById('nav-utility-auth').childNodes[0].click();";
		}
	},
	{	// start entry for about.me
		id: 'about.me',
		check: function(url) {
			return url.match('about.me/*');
		},
		banda: function(doc) {
			if (doc.getElementById('password') || (doc.getElementById(FreeSignOut.Logout.element_id))) return '';
			else return '<img style="position: fixed; bottom: 0px; right: 0; border: 0; z-index: 999999;" src="chrome://popupLogout2058/skin/LogOut_right_bottom_green_007200.png" alt="Logout Push up">';
		},
		banner: function(doc) {
			return "http://about.me/logout_handler";
		}
	},
	{	// start entry for spotify.com
		id: 'spotify.com',
		check: function(url) {
			return url.match('spotify.com/*');
		},
		banda: function(doc) {
			if (!doc.getElementById('js-display-name') || (doc.getElementById(FreeSignOut.Logout.element_id))) return '';
			else return '<img style="position: fixed; bottom: 0px; right: 0; border: 0; z-index: 999999;" src="chrome://popupLogout2058/skin/LogOut_right_bottom_green_007200.png" alt="Logout Push up">';
		},
		banner: function(doc) {
			return "https://www.spotify.com/es/logout/";
		}
	},
	{	// start entry for meneame.net
		id: 'meneame.net',
		check: function(url) {
			return url.match('meneame.net/*');
		},
		banda: function(doc) {
			var myEls = doc.getElementsByClassName('userlogin');
			finded=false;
			if ( myEls.length > 0 )
				finded=true;
			else
				finded=false;
			if (!finded || (doc.getElementById(FreeSignOut.Logout.element_id))) return '';
			else return '<img style="position: fixed; bottom: 0px; right: 0; border: 0; z-index: 999999;" src="chrome://popupLogout2058/skin/LogOut_right_bottom_green_007200.png" alt="Logout Push up">';
		},
		banner: function(doc) {
			return "http://www.meneame.net/login.php?op=logout&return=%2F";
		}
	},
	{	// start entry for yahoo.com
		id: 'yahoo.com',
		check: function(url) {
			return url.match('yahoo.com/*');
		},
		banda: function(doc) {
			var myEls = doc.getElementsByClassName('strong y-link-1 ');
			finded=false;
			if ( myEls.length > 0 )
				finded=true;
			else
				finded=false;
			if (finded || (doc.getElementById(FreeSignOut.Logout.element_id))) return '';
			else return '<img style="position: fixed; bottom: 0px; right: 0; border: 0; z-index: 999999;" src="chrome://popupLogout2058/skin/LogOut_right_bottom_green_007200.png" alt="Logout Push up">';
		},
		banner: function(doc) {
			return "https://login.yahoo.com/config/login?.src=fpctx&logout=1&.direct=1&.done=http://yahoo.com/";
		}
	}
);
