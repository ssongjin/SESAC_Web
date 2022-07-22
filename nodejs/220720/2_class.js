class cat {
    constructor( name ){
        this.name = name;
    }
    mew() {
        console.log( this.name +  "야옹" );
    }
}

var cat1 = new cat( "나비" );
var cat2 = new cat( "냥이" );
console.log( cat1 );
cat1.mew();
