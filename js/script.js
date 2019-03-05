

function onKeyDown(event) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    // When a key is pressed, set the content of the text item:
    var myCircle = new Path.Circle(new Point(point, 100), 10).fillColor = "yellow";
    console.log(point);


}

