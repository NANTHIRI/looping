
for (var x = 1; x <= 100; x++) {

if(x % 3 == 0)
{
    document.write("Fizz");
}
else if( x % 5 ==0){
    document.write("<p>" + "Buzz" + "</p>");
}
else{
    document.write("<p> " + x + "</p>");
}
}