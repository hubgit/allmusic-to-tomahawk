// wishlist: hAudio or RDFa markup

var nodes = document.querySelectorAll("#tracks tbody tr");

for (var i = 0; i < nodes.length; i++) {
	var node = nodes[i];

	var artist = node.querySelectorAll(".artist a").item(0).textContent.trim();
	var title = node.querySelectorAll(".title a").item(0).textContent.trim();

	var link = document.createElement("a");
	link.href = "tomahawk://open/track?artist=" + encodeURIComponent(artist) + "&title=" + encodeURIComponent(title);
	link.style.background = "url(http://www.tomahawk-player.org/sites/default/files/favicon.ico) no-repeat";
	link.style.paddingLeft = "20px";

	var container = document.createElement("td");
	container.appendChild(link);

	node.appendChild(container);
}