$(document).ready(function(){
    $("#myBtn").on("click", function(){
        ready();
    });

    $(".reply").click(function(){
        $(this).parents("div.row").next("div.card").toggle();
    });
});

function ready() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var BtnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        BtnText.innerHTML = "عرض المزيد";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        BtnText.innerHTML = "عرض عناصر أقل";
        moreText.style.display = "inline";
    }
}