document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("drawermenu-togglebtn");
  const drawermenuContent = document.getElementById("drawermenu-content");

  // 要素の確認
  if (!toggleButton || !drawermenuContent) {
    return;
  }

  // 初期設定
  toggleButton.setAttribute("aria-expanded", "false");
  toggleButton.setAttribute("aria-controls", "drawermenu-content");

  // メニューの開閉処理
  toggleButton.addEventListener("click", function () {
    const isOpened = toggleButton.classList.toggle("open");
    toggleButton.setAttribute("aria-expanded", isOpened);
    drawermenuContent.classList.toggle("open", isOpened);
  });

  // メニュー内のリンクがクリックされたときの処理
  const menuLinks = drawermenuContent.querySelectorAll("a");
  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      toggleButton.classList.remove("open");
      toggleButton.setAttribute("aria-expanded", "false");
      drawermenuContent.classList.remove("open");
    });
  });
});



/* ======pegetop====== */
document.addEventListener('DOMContentLoaded', function () {
  const pagetop = document.getElementById('pagetop');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      pagetop.classList.add('visible');//縦方向のスクロール量が100以上の場合はclassを追加
    } else {
      pagetop.classList.remove('visible');//縦方向のスクロール量が100以下の場合はclassを削除
    }
  });

  pagetop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
    });
  });
});