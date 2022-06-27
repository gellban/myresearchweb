$(function(){
    // $("#home").load("home.html");
    const a = ["home","research","publications","teaching", "projects","news"];
    // const a = ["home","research","projects","news"];
    for (const element of a) { // You can use `let` instead of `const` if you like
        console.log(element);
        $("#" + element).load(element + ".html");
        console.log(element, "end");
    } 
  });