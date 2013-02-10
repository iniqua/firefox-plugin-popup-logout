var sites = new Array(
	{	// start entry for facebook.com
		id: "facebook.com",
		check: function(url) {
			return url.match('facebook.com/*');
		},
		banda: function(doc) {
			if (doc.getElementById('reg_form_box')) return '';
			else return '<img style="position: fixed; top: 38px; right: 0; border: 0;" src="chrome://popupLogout2058/skin/LogOut_right_green_007200.png" alt="Logout Push up">';
		},
		banner: function(doc) {
			return 'javascript: document.forms["logout_form"].submit()';
			//'<form id="logout_form" onsubmit="return window.Event && Event.__inlineSubmit && Event.__inlineSubmit(this,event)" action="/logout.php" method="post"></form>'
		}
	},
	{	// start entry for twitter.com
		id: 'twitter.com',
		check: function(url) {
			return url.match('twitter.com/*');
		},
		banda: function(doc) {
			if (doc.getElementById('signup-user-name')) return '';
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
			if (doc.getElementById('login_canvas')) return '';
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
			if (doc.getElementById('gaia_loginform') || (doc.getElementById('sopu'))) return '';
			else return '<img style="position: fixed; bottom: 0px; right: 0; border: 0; z-index: 999999;" src="chrome://popupLogout2058/skin/LogOut_right_bottom_green_007200.png" alt="Logout Push up">';
		},
		banner: function(doc) {
			return "javascript:document.getElementById('gb_71').click();";
		}
	},
	{	// start entry for mail.live.com
		id: 'mail.live.com',
		check: function(url) {
			return url.match('mail.live.com/*');
		},
		banda: function(doc) {
			return '';
		},
		banner: function(doc) {
			doc.getElementById('c_signout').style.cssText = 'font-size:15px; background:darkblue;';
			return 'null';
		}
	},
	{	// start entry for linkedin.com
		id: 'linkedin.com',
		check: function(url) {
			return url.match('linkedin.com/*');
		},
		banda: function(doc) {
			if (!doc.getElementById('nav-utility-auth')) return '';
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
			if (doc.getElementById('password')) return '';
			else return '<img style="position: fixed; bottom: 0px; right: 0; border: 0; z-index: 999999;" src="chrome://popupLogout2058/skin/LogOut_right_bottom_green_007200.png" alt="Logout Push up">';
		},
		banner: function(doc) {
			return "http://about.me/logout_handler";
		}
	}
);
