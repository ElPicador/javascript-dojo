function Completer(repository) {
	this.repository = repository;
}

Completer.prototype.search = function (entry) {
	if (entry == "") {
		return [];
	} else {

		var result = this.repository.list(entry);
		return result ? result : [];
	}
}