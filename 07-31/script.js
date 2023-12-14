$(function () {
  const myP = $("p");

  myP.hide(4000, changeText).show(4000);

  function changeText() {
    myP.text("New text");
  }
});
