describe("Completer", function() {
	var repository, completer;

	beforeEach(function() {
		repository = new MockRemoteRepository();
	  completer = new Completer(repository);
	});

	function expectSearchOneItem(expected, entry) {
		expect(completer.search(entry)).toEqual([expected]);
	}

	it("should return an empty list on empty input", function() {
		// given
		var entry = "";

		// when 
		var result = completer.search(entry);

		// then
		expect(result).toEqual([]);
	});

	it("should return one result when one possible result", function() {
	  expectSearchOneItem("Paris","pa");
		
	});

	it("should return one specific result when entering specific entry", function() {
	 expectSearchOneItem("Marseille","ma");
	  });

	 it("should return an empty list when no possible result", function() {
	  // given
		var entry = "shmurtz";

		// when 
		var result = completer.search(entry);

		// then
		expect(result).toEqual([]);
	});

});