$('.food_option').on('click', function(){

    //get the food
    var food = $(this).attr('food');

    //get the food type i.e  black, green or gold
    var food_type = $(this).attr('food_type');

    //Price of the food selected
    var food_price = $(this).attr('price');

    //get the current food
    var current_food = $('#'+food).attr('current_food');

    //remove the styling of the current food
    $('#'+food).removeClass(current_food);

    //add the styling of the food selected
    $('#'+food).addClass('food-'+food_type);

    //update the attribute of the current food to the new selected food
    $('#'+food).attr('current_food','food-'+food_type);

    $('#'+food+" > .price").html('N'+food_price);
    $('#'+food+" header .type").html(food_type);
    // alert(food_type);
})