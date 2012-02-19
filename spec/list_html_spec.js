describe("ListHtml", function() {
  it("should return empty html list with empty list", function() {
    // Given
    var listHtml = new ListHtml([]);

    // When
    var html = listHtml.render();

    // Then
    expect(html).toEqual("<ul></ul>");
  });

  it("should return a list with one item", function() {
    //Given
    var listHtml = new ListHtml(["Paris"]);

    //When
    var html = listHtml.render();

    //Then 
    expect(html).toEqual("<ul><li>Paris</li></ul>");
  });

  it("should return a list with two items", function() {
    //Given
    var listHtml = new ListHtml(["Paris","Marseille"]);

    //When
    var html = listHtml.render();

    //Then 
    expect(html).toEqual("<ul><li>Paris</li><li>Marseille</li></ul>");
  });
});