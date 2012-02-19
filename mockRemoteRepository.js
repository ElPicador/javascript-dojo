function MockRemoteRepository() {
	this.map = {
		"pa" : ["Paris"],
		"ma" : ["Marseille"],
		"to" : ["Toulouse","Tourcoing","Tours"]
	}
}

MockRemoteRepository.prototype.list = function (entry){
	return this.map[entry];
}
