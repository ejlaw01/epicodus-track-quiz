//business logic


//user interface logic

$(document).ready(function() {

  $("form#quiz-result").submit(function(event) {
//I felt like this section was business logic, but it didn't work when I pulled it out of the function.
    var q1 = $("input:radio[name=question1]:checked").val();
    var q2 = $("input:radio[name=question2]:checked").val();
    var q3 = $("input:radio[name=question3]:checked").val();
    var q4 = $("input:radio[name=question4]:checked").val();
    var q5 = $("input:radio[name=question5]:checked").val();
    var cssDesign = 0;
    var javaAndroid = 0;
    var phpDrupal = 0;
    var csharpNet = 0;
    var rubyRails = 0;
    var result;

    if (q1 === "A") {
      cssDesign += 1.01
    } else if (q1 === "B") {
      javaAndroid += 1.001
    } else if (q1 === "C") {
      phpDrupal += 1.0001
    } else if (q1 === "D") {
      csharpNet += 1.00001
    } else {
      rubyRails += 1.000001
    }
    if (q2 === "A") {
      cssDesign += 1.01
    } else if (q2 === "B") {
      javaAndroid += 1.001
    } else if (q2 === "C") {
      phpDrupal += 1.0001
    } else if (q2 === "D") {
      csharpNet += 1.00001
    } else {
      rubyRails += 1.000001
    }
    if (q3 === "A") {
      cssDesign += 1.01
    } else if (q3 === "B") {
      javaAndroid += 1.001
    } else if (q3 === "C") {
      phpDrupal += 1.0001
    } else if (q3 === "D") {
      csharpNet += 1.00001
    } else {
      rubyRails += 1.000001
    }
    if (q4 === "A") {
      cssDesign += 1.01
    } else if (q4 === "B") {
      javaAndroid += 1.001
    } else if (q4 === "C") {
      phpDrupal += 1.0001
    } else if (q4 === "D") {
      csharpNet += 1.00001
    } else {
      rubyRails += 1.000001
    }
    if (q5 === "A") {
      cssDesign += 1.01
    } else if (q5 === "B") {
      javaAndroid += 1.001
    } else if (q5 === "C") {
      phpDrupal += 1.0001
    } else if (q5 === "D") {
      csharpNet += 1.00001
    } else {
      rubyRails += 1.000001
    }
//How do I make it display TWO results if they are equal? My solution was to change point values to make it so 2 results cannot be equal, but the problems with this were that it forced me to favor certain results and it wouldn't always work with a many-question quiz.
    if (cssDesign > javaAndroid && cssDesign > phpDrupal && cssDesign > csharpNet && cssDesign > rubyRails) {
      result = "CSS/Design"
    } else if (javaAndroid > cssDesign && javaAndroid > phpDrupal && javaAndroid > csharpNet && javaAndroid > rubyRails) {
      result = "Java/Android"
    } else if (phpDrupal > cssDesign && phpDrupal > javaAndroid && phpDrupal > csharpNet && phpDrupal > rubyRails) {
      result = "PhP/Drupal"
    } else if (csharpNet > cssDesign && csharpNet > javaAndroid && csharpNet > phpDrupal && csharpNet > rubyRails) {
      result = "C#/.NET"
    } else {
      result = "Ruby/Rails"
    }

    $("h2, h5").show();
    $(".result").text(result);

    if (result === "CSS/Design") {
      $("#css").show();
      $("#java").hide();
      $("#php").hide();
      $("#csharp").hide();
      $("#ruby").hide();
    } else if (result === "Java/Android") {
      $("#java").show();
      $("#css").hide();
      $("#php").hide();
      $("#csharp").hide();
      $("#ruby").hide();
    } else if (result === "PhP/Drupal") {
      $("#php").show();
      $("#css").hide();
      $("#java").hide();
      $("#csharp").hide();
      $("#ruby").hide();
    } else if (result === "C#/.NET") {
      $("#csharp").show();
      $("#css").hide();
      $("#java").hide();
      $("#php").hide();
      $("#ruby").hide();
    } else {
      $("#ruby").show();
      $("#css").hide();
      $("#java").hide();
      $("#php").hide();
      $("#csharp").hide();
    }

    // alert("Css: " + cssDesign + " JA: " + javaAndroid + " Php: " + phpDrupal + " C#: " + csharpNet + " RR: " + rubyRails + " result: " + result);

    event.preventDefault();
  });

  $("form#start-quiz").submit(function() {
    $("form#start-quiz").fadeOut('fast', function(){
      $("#question1").fadeIn('fast');
    });
    event.preventDefault();
  });
  $("form#question1").change(function() {
    $("form#question1").fadeOut('fast', function() {
      $("form#question2").fadeIn('fast');
    });
  event.preventDefault();
  });
  $("form#question2").change(function() {
    $("form#question2").fadeOut('fast', function() {
      $("form#question3").fadeIn('fast');
    });
  event.preventDefault();
  });
  $("form#question3").change(function() {
    $("form#question3").fadeOut('fast', function() {
      $("form#question4").fadeIn('fast');
    });
  event.preventDefault();
  });
  $("form#question4").change(function() {
    $("form#question4").fadeOut('fast', function() {
      $("form#question5").fadeIn('fast');
    });
  event.preventDefault();
  });
  $("form#question5").change(function() {
    $("form#question5").fadeOut('fast', function() {
      $("form#quiz-result").fadeIn('fast');
    });
  event.preventDefault();
  });
  $("form#quiz-result").submit(function() {
    $("form#quiz-result").hide();
  event.preventDefault();
  });

  // $("form#retake").submit(function() {
  //   $(".result-info").hide();
  //   $("#question1").show();
  // event.preventDefault();
  // });

  //better way than having event preventD with for every function?

});
