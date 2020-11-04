function setup() {
  createCanvas(800,400);
  

    var name = "REVISION CLASS";
    console.log(name.length);
 
console.log(name.toLowerCase());
       console.log(name.slice(4,6));
 
  console.log(name.replace("CLASS","ACTIVITY"))


  var a = "hi"
  
var b ="bye"

console.log(a+b);
console.log(a/b);
var c = 6;
var d="6";
console.log(c===d);




//switch statement


var day = Math.round(random(1,7));

switch (day)   {

  case 1 : dayname= "monday"
  break ;

  case 2 : dayname= "tuesday"
  break ;

  case 3 : dayname= "wednesday"
  break ;

  case 4 : dayname= "thursday"
  break ;

  case 5 : dayname= "friday"
  break ;

  case 6 : dayname= "saturday"
  break ;

  case 7 : dayname= "sunday"
  break ;

}
console.log(dayname);



   //array[]
var h =["lol","tysm","ge","gg","bff","ttyl"];
    console.log(h.length);
    console.log(h[3]);

  h.push(56,7,9,8)


    for (var i=0;i<h.length;i++)
console.log(h[i]);






//array of arrays






var g = [[true,null,undefined,false],[1,33,59876,98765,54,654,9876,5000],["fh","ty","v","veh","evt","bj","b5y"]];

console.log(g[2][2])


for (var i=0;i<g.length;i++)

    {
        for(var k =0;k<g[i].length;k++){


          console.log(g[i][k]);

        }




    }




//json





  stateCapitals=[

{


  state:"punjab",
  capital:"chandigarh"









},{


  state:"karnataka",
  capital:"bengaluru"

},

{


  state:"gujrat",
  capital:"gandhiNagar"
}



  ]

for ( var c in stateCapitals )
{


console.log(stateCapitals[c].state);

console.log(stateCapitals[c].capital);

}
}


function draw() {
  background(255,255,255);  
  drawSprites();
}



















