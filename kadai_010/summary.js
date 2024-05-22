$(function () {
  // 要素がクリックされたら
  $("#change-color").on("click", function () {
    //文字色変化する
    $("#target").css("color", "red");
  });
});

$(function () {
  // 要素がクリックされたら
  $("#change-text").on("click", function () {
    //文字内容変化する
    $("#target").text("Hello!");
  });
});

$(function () {
  // id属性がfadeOutの要素がクリックされたら
  $("#fade-out").on("click", function () {
    // フェードアウトする
    $("#target").fadeOut();
  });
});

$(function () {
  // id属性がfadeOutの要素がクリックされたら
  $("#fade-in").on("click", function () {
    // フェードアウトする
    $("#target").fadeIn();
  });
});
