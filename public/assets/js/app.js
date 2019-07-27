$(".article").on("click", ".save", function (event) {
    event.preventDefault();
    const link = $(this).attr("data-link");
    const text = $(this).attr("data-text");
    const title = $(this).attr("data-title");
    const cardParentId = `#${$(this).attr("card-parent")}`;
    article = {
        title,
        link,
        text
    }
    console.log(article);
    console.log("before post");
    $.post("/api/article", article, (result) => {
        //console.log(cardParentId);
        $(cardParentId).remove();
    });
});

$(".article-delete").on("click", ".delete", function (event) {
    event.preventDefault();
    const id = $(this).attr("card-parent");
    console.log(id);
    const cardParentId = `#${$(this).attr("card-parent")}`;
    $.ajax(
        {
            url: "/api/delete-article/" + id,
            type: "DELETE",
            data: id
        }
    ).then(result => {
        console.log(result);
        $(cardParentId).remove();
    });

});

$("#delete-all").on("click", function (event) {
    event.preventDefault();
    $.ajax(
        {
            url: "/api/delete-articles",
            type: "DELETE"
        }
    ).then(result => {
        console.log(result);

    });

});