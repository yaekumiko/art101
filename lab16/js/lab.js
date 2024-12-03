/* 
Author: Miki Foster
Created: 2 December 2024
*/

$.ajax({
    // URL for the request (from api docs)
    url: "https://xkcd.com/info.0.json",
    method: "GET",
    dataType: "json",
    data: {
       
    }
    success:function(data) {
        console.log(data);


        // display comic title, image, text
        $("#output").append("<h2>" + data.title);
        $("#output").append(`<p>${data.alt}</p>`);
        $("#output").append(`<img src='${data.url}' />`);


    },


    error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error fetching the XKCD comic", error);
    }
});
