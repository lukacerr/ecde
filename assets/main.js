$(() => {
  AOS.init();
  $(window).on('load', () => AOS.refresh());
  $('.carousel-promos').slick({ dots: true });

  toastr.options.closeButton = true;
	toastr.options.positionClass = 'toast-bottom-right';
  $(document).on('click', '.btn-add', () => toastr.success('¡Agregado al carrito!'));
});
