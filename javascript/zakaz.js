let CloseId = $('#myModal form').attr('id');
let modal = document.getElementById("myModal");
let closeForm = $(".order from").attr('id');
// let span = document.getElementsByClassName("close");

// closeForm[0].onclick = function() {
// modal[0].style.display = "block";
// }

$('.basket').click(function(){
  $('#myModal').show();
  // $('.container').addClass('container-shodow');
  // $('.components').addClass('components-shadow');
  // $('.container h1').addClass('components-shadow');
  // $(".order").css({'height' : heightWindow });
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

$('.header').click(function(){
  $('#myModal').hide();
  // $('.container').removeClass('container-shodow');
  // $('.components').removeClass('components-shadow');
  // $('.container h1').removeClass('components-shadow');
});

$(document.body).on('click', '.close', function(){
  $(this).closest('form').remove();
});


$('.basket').click(function(id){
  let _this = $(this);
  let formId = _this.closest('.production').attr('id') + 'Form';
  // let rightMenu = $('#right-menu');
  // if(rightMenu.find('#' + formId).length) {
  //   increasePrice(_this, formId)
  // } else {
  //   addNewFormObject(_this, formId);
  // }
  let rightMenu = $('#myModal');
  $('#' + formId).remove();
  addNewFormObject(_this, formId);
});

let increasePrice = function(element, formId) {
   let basePrice =$('#' + formId).find('.qta-number').attr('value');//получить цену
  // let sum = element.closest(formId).find('.sum-select').val();

  // $('#' + formId).find(sum * basePrice);// найти в уже созданной в правом меню форме старую цену и увеличить ее на сумму основнй цены
  //увеличить количество выбраных элементов на 1
     // newForm.find('.qta-number').attr('value', basePrice);

// let newNumber = element.closest('#'+ idOldInput).find('.slct').text();
// newForm.find('.qta-number').attr('value', number);

};

let addNewFormObject = function(element, formId) {
  let newForm = $('.form-container form').clone();
  let sourceBlock = element.closest('.production');
  let name = sourceBlock.find($('h2')).attr('name');
  let img = sourceBlock.find('.image-productions').attr("src");
  let count = Number(sourceBlock.find('.slct').text());
  let sourcePrise = Number(sourceBlock.find('#prise-product').text().substring(1));
  let sum = sourcePrise * count;
  let totalAmount = sum;
  $('.order form').each(function(){
    totalAmount += Number($(this).find('.sum-select').text());
  });
  // let ollSumma = $('.sum-select').each(function(){
  //   var a = 0.0;
  //   return a+=parseFloat($(this).text());
  // })


  newForm.attr('id',formId);
  newForm.find('.image-form img').attr("src",img);
  newForm.find('.name-text').html(name);
  newForm.find('.qta-number').attr('value', count);//.html(number);
  newForm.find('.sum-select').html(sum);

  $('.order-form').append(newForm);
  increasePrice(element, formId);
  $('.order .text-sum').text(totalAmount);

    // here, you have your sum
// });​​​​​​​​​
  // $('#add').click(function(){
  //   for(let i = 1; i<=$('.qta-number').attr('value'); i++){
  //       $('.qta-number').attr('value')+1;
  //   }

  // })
};

// $('#add').click(function () {
//             var $input = $(this).parent().find('input');
//             var count = parseInt($input.val()) + 1;
//             count = count < 1 ? 1 : count;
//             $input.val(count);
//             $input.change();
//             return false;
//         });
// $('.up').click(function () {
//     var $input = $(this).parent().find('input');
//     $input.val(parseInt($input.val()) + 1);
//     $input.change();
//     return false;
// });
// $('.image-form').html($('.image-productions').get(i).attr("src"));
// }


// $('.production').index();
// // $('.order').css({'heigth': $('body').height()});
// $('.image-form').html($('.image-productions').clone().appendTo('img'));
// $('.name-text').html(name);
// $('.qta-number').html($('.number-select').val());
// $('.sum-select').html(Number($('#prise-product').text().substring(1)) * ($('.number-select').val()));


// })
// $('.production').index();
// $('.order').css({'heigth': $('body').height()});
// $('.image-form').html($('.image-productions').clone().appendTo('img'));
// $('.name-text').html(name);
// $('.qta-number').html($('.number-select').val());
// $('.sum-select').html(Number($('#prise-product').text().substring(1)) * ($('.number-select').val()));


// $('.basket').click(function(){
//     var id = $(this).find('.production').attr('id');
//     console.log(id);
// });
