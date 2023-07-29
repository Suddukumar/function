// 1 using function area of circle
function circle(b, h) {
  console.log( '1). the area of circle is  = ' + (b * h / 2));
}



function AreaOfTriangle(b,h){
  console.log( '2). area of ' + 'triangle is  = ' + (0.5 * b * h))
}


function rectangle(l,w){
  console.log('3). Area ' + 'of rectangle is ' + ' = ' + (l * w)
)
}
function perimeter(l,w){
  console.log('4). Perimeter of rectangle is  = ' + (2 * (l + w))
)
}
function circum(r){
  console.log('5). Circumference of circle is = ' + (2 * 3.14 * r)
)
}
function peri(a,b ,c){
  console.log('6). Perimeter of triangle is = ' + ( a + b + c)
)
}
function abc(p,r,t){
  console.log( '7). simple interest of p r and t ' + 'is = ' + (p*r*t/100));
}
function even(abhi){
  if (abhi % 2 == 0){
    console.log("8). the given number is even")
  }else{
    console.log("8). the given no is odd ")
  }

}
circle(5,7 )
AreaOfTriangle(5,7)
rectangle(7,5)
perimeter(7,5)
circum(7)
peri(5,6 ,7)
abc(1000,2,2)
even(5)