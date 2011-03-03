var minimal = require("minimal/minimal-node")
  , it = require('it-is')
  
exports ['simple 1'] = function (){
  var $m = minimal.template("<html><head><title></title></head><body><p id='content'></p></body></html>")

  $m({
    title: "some title"
  , content: "some content"
  })

  console.log($m.html());

  it($m.html()).like("<head><title>some title</title></head><body><p id='content'>some content</p></body>")

  //notice that it strips <html></html> away, surely this is incorrect?
}



exports ['simple 2'] = function (){
  var $m2 = minimal.template("<html><head><title></title></head><body><p id='content2'></p></body></html>");

  $m2({
    title: "some title 2",
    content2: "some content2"
  });

  console.log($m2.html());

  it($m2.html()).like("<head><title>some title2</title></head><body><p id='content2'>some content2</p></body>")
}
//*/

exports ['list'] = function (){
var temp = '<ul><li></li></ul>'
  , data = { ul: ["foo", "bar", "baz"] }
  , expected = '<ul> <li>foo</li> <li>bar</li> <li>baz</li> </ul>'
  , $m = minimal.template(temp)

  $m(data)

  it($m.html()).like(expected)

}

exports ['children'] = function (){
var temp = '<div data-render="children"> <h2></h2> <p></p> </div>'
  , data = { div: ["header", "content"] }
  , expected = '<div data-render="children"> <h2>header</h2> <p>content</p> </div>'
  , $m = minimal.template(temp)

  $m(data)

  it($m.html()).like(expected)

}

