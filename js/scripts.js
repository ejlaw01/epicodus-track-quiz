//business logic


//user interface logic

$(document).ready(function() {

  $("form#button").submit(function(event) {

    var q1 = $("input:radio[name=question1]:checked").val();
    var q2 = $("input:radio[name=question2]:checked").val();
    var q3 = $("input:radio[name=question3]:checked").val();

    var cssDesign = 0;
    var javaAndroid = 0;
    var phpDrupal = 0;
    var csharpNet = 0;
    var rubyRails = 0;


    if (q1 === "A") {
      cssDesign += 1
    } else if (q1 === "B") {
      javaAndroid += 1
    } else if (q1 === "C") {
      phpDrupal += 1
    } else if (q1 === "D") {
      csharpNet += 1
    } else {
      rubyRails += 1
    }

    if (q2 === "A") {
      cssDesign += 1
    } else if (q2 === "B") {
      javaAndroid += 1
    } else if (q2 === "C") {
      phpDrupal += 1
    } else if (q2 === "D") {
      csharpNet += 1
    } else {
      rubyRails += 1
    }

    if (q3 === "A") {
      cssDesign += 1
    } else if (q3 === "B") {
      javaAndroid += 1
    } else if (q3 === "C") {
      phpDrupal += 1
    } else if (q3 === "D") {
      csharpNet += 1
    } else {
      rubyRails += 1
    }

    alert("Css: " + cssDesign + " JA: " + javaAndroid + " Php: " + phpDrupal + " C#: " + csharpNet + " RR: " + rubyRails);

    event.preventDefault();

  });

});
