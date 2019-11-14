// GLOBAL NAMESPACE
var SocialShare = {};

// BUTTONS
SocialShare.btns = [
	{
		social: "share",
		link: "",
		iconClass: "fas fa-share-alt",
		content: " Share",
		class: "ss-btn ss-btn-share",
		color: "#888",
	},
	{
		social: "facebook",
		link: "https://www.facebook.com/sharer.php?u=",
		iconClass: "fab fa-facebook-square",
		content: " Facebook",
		class: "ss-btn ss-btn-facebook",
		color: "#3b5998",
	},
	{
		social: "twitter",
		link: "https://twitter.com/share?url=",
		iconClass: "fab fa-twitter",
		content: " Twitter",
		class: "ss-btn ss-btn-twitter",
		color: "#1da1f2",
	},
	{
		social: "pinterest",
		link: "https://pinterest.com/pin/create/bookmarklet/?url=",
		iconClass: "fab fa-pinterest",
		content: " Pinterest",
		class: "ss-btn ss-btn-pinterest",
		color: "#bd081c",
	},
	{
		social: "linkedin",
		link: "https://www.linkedin.com/shareArticle?url=",
		iconClass: "fab fa-linkedin-in",
		content: " LinkedIn",
		class: "ss-btn ss-btn-linkedin",
		color: "#007bb5",
	},
	{
		social: "messenger",
		link: "fb-messenger://share/?link=",
		iconClass: "fab fa-facebook-messenger",
		content: " Messenger",
		class: "ss-btn ss-btn-messenger",
		color: "#0078FF",
	},
	{
		social: "whatsapp",
		link: "https://wa.me/?text=",
		iconClass: "fab fa-whatsapp",
		content: " WhatsApp",
		class: "ss-btn ss-btn-whatsapp",
		color: "#25d366",
	},
	{
		social: "viber",
		link: "viber://forward?text=",
		iconClass: "fab fa-viber",
		content: " Viber",
		class: "ss-btn ss-btn-viber",
		color: "#665CAC",
	},
	{
		social: "tumblr",
		link: "https://www.tumblr.com/share/link?url=",
		iconClass: "fab fa-tumblr",
		content: " Tumblr",
		class: "ss-btn ss-btn-tumblr",
		color: "#35465d",
	},
	{
		social: "reddit",
		link: "https://reddit.com/submit?url=",
		iconClass: "fab fa-reddit",
		content: " Reddit",
		class: "ss-btn ss-btn-reddit",
		color: "#ff4500",
	},
	{
		social: "pocket",
		link: "https://getpocket.com/save?url=",
		iconClass: "fab fa-get-pocket",
		content: " Pocket",
		class: "ss-btn ss-btn-pocket",
		color: "#ee4056",
	},
	{
		social: "email",
		link: "mailto:?body=",
		iconClass: "fas fa-envelope",
		content: " Email",
		class: "ss-btn ss-btn-email",
		color: "#17b7d9",
	},
	];

// SETUP BUTTONS
SocialShare.init = function(){

	// GET SHARE BOXS
	SocialShare.boxs = document.querySelectorAll(".ss-box");

	// SETUP SHARE BOXS
	for(var i = 0; i < SocialShare.boxs.length; i++)
	{

		// SETUP SHARE BUTTONS
		for(var j = 0; j < SocialShare.btns.length; j++)
		{
			var selectedSocial = SocialShare.boxs[i].getAttribute("data-ss-social");
			var selectedLink = SocialShare.boxs[i].getAttribute("data-ss-link");

			// GET LINK FROM CURRENT LOCATION
			var link = window.location.href;

			// VERIFY IF LINK IS SET IN ATTRIBUTE
			if(selectedLink)
				link = selectedLink;

			// GET QUERY STRING FROM ATTRIBUTE
			var moreQueryString = "";
			
			var selectedQueryString = SocialShare.boxs[i].getAttribute("data-ss-" + SocialShare.btns[j].social);

			if(selectedQueryString)
			{
				var splitedQueryStrings = selectedQueryString.split(",");
				for(var k = 0; k < splitedQueryStrings.length; k++)
				{
					var pairKeyValue = splitedQueryStrings[k].split(":");
					if(pairKeyValue.length > 1)
					{
						moreQueryString += moreQueryString == "" ? "" : "&";
						moreQueryString += pairKeyValue[0].trim() + "=" + pairKeyValue[1].trim();
					}
				}
			}

			if(moreQueryString != "")
				moreQueryString = (SocialShare.btns[j].link.includes("?") ? "&" : "?") + moreQueryString;

			// IF IS NOT SELECTED NONE SOCIAL NETWORK ITS INCLUDE ALL BY DEFAULT
			// ELSE ITS VERIFY IF ITS BUTTON/SOCIAL NETWORK IS INCLUDED

			if(!selectedSocial || selectedSocial.includes(SocialShare.btns[j].social))
			{
				var btn =  document.createElement("a");
				btn.setAttribute("class", SocialShare.btns[j].class);
				btn.setAttribute("href", SocialShare.btns[j].link + encodeURIComponent(link) + moreQueryString);
				btn.setAttribute("target", "_blank");
				btn.style.background = SocialShare.btns[j].color;

				var icon =  document.createElement("i");
				icon.setAttribute("class", SocialShare.btns[j].iconClass);

				btn.appendChild(icon);
				btn.append(SocialShare.btns[j].content);

				SocialShare.boxs[i].appendChild(btn);
			}

		}

	}

	// CLICK ON WEB NATIVE SHARE
	SocialShare.btnShares = document.querySelectorAll(".ss-btn-share");
	for(var i = 0; i < SocialShare.btnShares.length; i++)
	{
		var link = SocialShare.btnShares[i].getAttribute("href");

		SocialShare.btnShares[i].removeAttribute("href");
		SocialShare.btnShares[i].removeAttribute("target");

		SocialShare.btnShares[i].setAttribute("data-ss-link", link);

		SocialShare.btnShares[i].addEventListener("click", function(event){

			if(navigator.share) {

				navigator.share({
					url: this.getAttribute("data-ss-link")
				}).then(() => {
					console.log('Thanks for sharing!');
				})
				.catch(console.error);
			}
			else
			{
				console.log('This brownser dont support native web share!');
			}

		});

	}

}

window.addEventListener('load', function() {
	SocialShare.init();
});