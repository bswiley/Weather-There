var submit = $(".searchbtn")
var formContent = $("#searchfrm")
var buttonList = $("#buttonList")

submit.on("click",handleSubmit);

function handleSubmit(){
   city = formContent.val()
   makeCityButton(city);
};

var makeCityButton = function(city){
    var buttonEl =$("<button>");
    var buttonDetail = city;
    buttonEl.addClass('city').text(city);
    buttonEl.appendTo($("#buttonList"))
}

buttonList.on("click",handleClick);

function handleclick(){
    
}