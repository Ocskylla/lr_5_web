// BEGIN
import {extend} from "lodash";

function Point(x, y){
    this.x = x;
    this.y = y;
}

Point.prototype = {
    getX: function() {
        return this.x;
    },
    getY: function() {
        return this.y;
    },
    constructor: Point
};
function Segment(begin, end){
    this.beginPoint = begin;
    this.endPoint = end;
}
Segment.prototype.getEndPoint = function() {
    return this.endPoint;
}
Segment.prototype.getBeginPoint = function() {
    return this.beginPoint;
}
function reverse(segment) {
    const newBegin = new Point(
        segment.getEndPoint().getX(),
        segment.getEndPoint().getY()
    );
    const newEnd = new Point(
        segment.getBeginPoint().getX(),
        segment.getBeginPoint().getY()
    );
    return new Segment(newBegin, newEnd);
}
export  {Point, Segment, reverse};
// END
