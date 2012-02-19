var ListHtml = function(list) {
	this.list = list;
}

ListHtml.prototype.render = function() {
	if (this.list.length == 0) { return "<ul></ul>"; } 
	else { 
		var html = "<ul>";

		for (var i = 0; i < this.list.length; i++) {
			html += "<li>"+this.list[i]+"</li>"
		};
		return html+"</ul>"; 
	}
}