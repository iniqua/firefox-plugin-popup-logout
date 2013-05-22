if ("undefined" == typeof(FreeSignOut)) {
	var FreeSignOut = {};
};

FreeSignOut.sites = new Array(
	{	// start entry for facebook.com
		id: "facebook.com",
		check: function(url) {
			return url.match('facebook.com/*');
		},
		banda: function(doc) {
			if (doc.getElementById('reg_form_box') || (doc.getElementById(FreeSignOut.Logout.element_id))) return '';
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
	},
	{	// start entry for slideshare.net
		id: 'slideshare.net',
		check: function(url) {
			return url.match('slideshare.net/*');
		},
		banda: function(doc) {
			if (!doc.getElementById('user-drop-down') || (doc.getElementById(FreeSignOut.Logout.element_id))) return '';
			else return '<img style="position: fixed; bottom: 0px; right: 0; border: 0; z-index: 999999;" src="chrome://popupLogout2058/skin/LogOut_right_bottom_green_007200.png" alt="Logout Push up">';
		},
		banner: function(doc) {
			return "https://www.slideshare.net/logout";
		}
	},
	{	// start entry for gamisfaction.com
		id: 'gamisfaction.com',
		check: function(url) {
            return url.match('gamisfaction.com/*');
        },
        banda: function(doc) {
			if (!doc.getElementById('nav-coach') || (doc.getElementById(FreeSignOut.Logout.element_id))) return '';
            else return '<img style="position: fixed; bottom: 0px; right: 0; border: 0; z-index: 999999;" src="chrome://popupLogout2058/skin/LogOut_right_bottom_green_007200.png" alt="Logout Push up">';
        },
        banner: function(doc) {
            return "http://www.gamisfaction.com/twitter/clearsession/";
        }
    },
    {	// start entry for bitbucket.org
		id: 'bitbucket.org',
		check: function(url) {
            return url.match('bitbucket.org/*');
        },
        banda: function(doc) {
            if (!doc.getElementById('user-dropdown') || (doc.getElementById(FreeSignOut.Logout.element_id))) return '';
            else return '<img style="position: fixed; bottom: 0px; right: 0; border: 0; z-index: 999999;" src="chrome://popupLogout2058/skin/LogOut_right_bottom_green_007200.png" alt="Logout Push up">';
        },
        banner: function(doc) {
            return "https://bitbucket.org/account/signout/";
        }
    },
    {	// start entry for addons.mozilla.org 
		id: 'addons.mozilla.org',
		check: function(url) {
            return url.match('addons.mozilla.org/*');
        },
        banda: function(doc) {
			var myEls = doc.getElementsByClassName('nomenu logout');
			finded=false;
			if ( myEls.length > 0 )
				finded=true;
            if (!finded || (doc.getElementById(FreeSignOut.Logout.element_id))) return '';
            else return '<img style="position: fixed; bottom: 0px; right: 0; border: 0; z-index: 999999;" src="chrome://popupLogout2058/skin/LogOut_right_bottom_green_007200.png" alt="Logout Push up">';
        },
        banner: function(doc) {
        	return "https://addons.mozilla.org/en-US/firefox/users/logout";
       	} // https://soundcloud.com/logout
    },
    {	// start entry for soundcloud.com
		id: 'soundcloud.com',
		check: function(url) {
            return url.match('soundcloud.com/*');
        },
        banda: function(doc) {
			var myEls = doc.getElementsByClassName('header__profileButton sc-pointer');
			finded=false;
			if ( myEls.length > 0 )
				finded=true;
            if (!finded || (doc.getElementById(FreeSignOut.Logout.element_id))) return '';
            else return '<img style="position: fixed; bottom: 0px; right: 0; border: 0; z-index: 999999;" src="chrome://popupLogout2058/skin/LogOut_right_bottom_green_007200.png" alt="Logout Push up">';
        },
        banner: function(doc) {
        	return "https://soundcloud.com/logout";
       	} 
    }, 
    {	// start entry for digg.com
		id: 'digg.com',
		check: function(url) {
            return url.match('digg.com/*');
        },
        banda: function(doc) {
            if (!doc.getElementById('logout-link-nav') || (doc.getElementById(FreeSignOut.Logout.element_id))) return '';
            else return '<img style="position: fixed; bottom: 0px; right: 0; border: 0; z-index: 999999;" src="chrome://popupLogout2058/skin/LogOut_right_bottom_green_007200.png" alt="Logout Push up">';
        },
        banner: function(doc) {
            return "http://digg.com/logout";
        }
    }
);
