var Isograph = function(){
	var Iso = this;
	
	this.Shape = {
		Quad: function(origin, xS, yS, zS){
			if(!(this instanceof Iso.Shape.Quad)){
				return new Iso.Shape.Quad(origin, xS, yS, zS);
			}
			
			
		}
	};
	
	this.Point = function(x, y, z){
		if(!(this instanceof Iso.Point)){
			return new Iso.Point(x, y, z);
		}
		
		this.x = x;
		this.y = y;
		this.z = z;
		
		return this;
	};
	
	this.Color = function(r, g, b, a){
		return "rbga(" + r + ", " + g + ", " + b + ", " + a + ")";
	};
	
	this.draw = function(shape, color){
		
	};
	
	this.Origin = this.Point(0, 0, 0);
}
