// GLOBAL NAMESPACE
var SocialShare = {};

// BUTTONS
SocialShare.btns = [
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
	// {
	// 	social: "messenger",
	// 	link: "fb-messenger://share/?link=",
	// 	iconClass: "fab fa-facebook-messenger",
	// 	content: " Messenger",
	// 	class: "ss-btn ss-btn-messenger",
	// 	color: "#0078FF",
	// },
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

	SocialShare.boxs = document.querySelectorAll(".ss-box");

	for(var i = 0; i < SocialShare.boxs.length; i++)
	{
		for(var j = 0; j < SocialShare.btns.length; j++)
		{
			var selectedSocial = SocialShare.boxs[i].getAttribute("data-ss-social");
			var selectedLink = SocialShare.boxs[i].getAttribute("data-ss-link");

			var link = window.location.href;

			if(selectedLink)
				link = selectedLink;

			if(!selectedSocial || selectedSocial.includes(SocialShare.btns[j].social))
			{
				var btn =  document.createElement("a");
				btn.setAttribute("class", SocialShare.btns[j].class);
				btn.setAttribute("href", SocialShare.btns[j].link + link);
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

}

window.addEventListener('load', function() {
    SocialShare.init();
});