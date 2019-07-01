$(function () {
    call();

})
const call = () => {
    $.ajax({
        type: "GET",
        url: "https://cc-mock-api.herokuapp.com/product",
        dataType: "json",
        success: function (obj) {
            console.log(obj);
            data(obj);
        }
    })

}
const data = (obj) => {
    $(document).ready(function () {
        obj.list.forEach(data1 =>
            $("#append").append(` 
                    <div class="card overflow-hidden" id="card-01" style="width:200px; height:400px; ">
                        <img class="card-img-top" src="${data1.image_url}" alt="Card image"  style="height:160px" >

                        <div class="card-body"  style="height:50px ">

                                    <h6 class="card-title" style="overflow: hidden;
                                    text-overflow: ellipsis; height:40px">${data1.name}</h6>

                                    <div class="card-text" style="overflow: hidden;
                                    text-overflow: clip; height:40px ; font-size:13px">${data1.description}</div>

                                    <div class="price" style = "color:red ;text-align: end; margin:10px 0px;">฿ ${data1.price}</div>

                                    <a href="#" class="btn btn-primary" style="width:100%; background-color:#0BF3A6  ;">Detail</a>
                        </div>
                    </div>`)
        );

    });
};
