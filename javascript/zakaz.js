let modal = document.getElementById("modalWindow");

$('.basket').click(function(){
  $('#modalWindow').show();
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

$('.header').click(function(){
  $('#modalWindow').hide();
});

$('.right-menu-button').click(function(){
  alert('Thank you for placing your order.')
})

$('.basket').click(function(id){
  let _this = $(this);
  let formId = _this.closest('.production').attr('id') + 'Form';
  let rightMenu = $('#modalWindow');

  $('#' + formId).remove();
  addNewFormObject(_this, formId);

});

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

  newForm.attr('id',formId);
  newForm.find('.image-form img').attr("src",img);
  newForm.find('.name-text').html(name);
  newForm.find('.qta-number').attr('value', count);
  newForm.find('.sum-select').html(sum);

  $('.order-form').append(newForm);
  $('.order .text-sum').text(totalAmount);

};


