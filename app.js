
for (var x = 1; x <= 100; x++) {

if(x % 3 == 0 && x % 5 == 0)
{
    document.write("FizzBuzz");
}
else if( x % 3 == 0){
    document.write("<p>" + "Fizz" + "</p>");
}
else if (x % 5 == 0){
    document.write("<p>"+ "Buzz" + "</p>");
}
else{
    document.write("<p> " + x + "</p>");
}
}