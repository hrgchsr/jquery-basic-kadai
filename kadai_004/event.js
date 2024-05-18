// load:と自動整形された後の最後のカンマが謎。
$(window).on({
  // ロード時
  load: (e) => {
    console.log("ロードイベントが発生しました");
  },
});

//この書き方でも表示される。
// $(window).on("load", function () {
//   console.log("loadイベントが発生しました");
// });

$(function () {
  $(document).on("scroll", (e) => {
    // 	画面をスクロールしたとき
    if (e.type === "scroll") {
      console.log("scrollイベントが発生しました");
    }
  });
});
