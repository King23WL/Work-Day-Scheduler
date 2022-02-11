var saveBtn = $(".saveBtn");

$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

function listColor(){
    var hour=moment().hours();
    $(".time-block").each(function(){
        var currentHour = parseInt($(this).attr("id"));
        if (currentHour>hour){
            $(this).addClass("future");
        }else if (currentHour === hour){
            $(this).addClass("present");
        }else{
            $(this).addClass("past");
        }
    })
};

saveBtn.on("click", function(){
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();
    localStorage.setItem(time, plan);

});

function starter(){

    $(".hour").each(function(){
        var currentHour=$(this).text();
        var currentPlan=localStorage.getItem(currentHour);
        if(currentHour!==null){
            $(this).siblings(".plan").val(currentPlan);
        }


    });

};

listColor();
starter();
