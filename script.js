$(".perfil").click(function () {
  $(".menu-lateral ul .itens-perfil").toggleClass("mostra");
});
$(".projeto").click(function () {
  $(".menu-lateral ul .itens-projeto").toggleClass("mostra");
});
$(".chat").click(function () {
  $(".menu-lateral ul .itens-chat").toggleClass("mostra");
});

$(".abrir").click(function () {
  $(".menu-lateral").toggleClass("mostra");
});
