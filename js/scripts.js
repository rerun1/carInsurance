$(document).ready(function(){
  $("form#quote").submit(function(event){
    event.preventDefault();

    var age = parseInt($("input#age").val());
    var gender = $("input:radio[name=gender]:checked").val();

    var quote = (100 - age) * 3;

    alert(age);

      if (gender === 'male' &&  age < 26) {
        quote += 50;

        $("#rate").empty().append(quote);
        $("#lizardQuote").show();

      } else if (age > 26) {
        $("#rate").empty().append(quote);
        $("#lizardQuote").show();
      }
       else {
        alert('Please enter your age.');
      }




  });

});
