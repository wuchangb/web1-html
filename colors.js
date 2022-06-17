var Body = {
    bodycolor:function (color){
    document.querySelector('body').style.color = color;
    },
    backcolor:function (color){
    document.querySelector('body').style.backgroundColor = color;
}
}
var Links = {
    linkcolor: function (color){
    var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = color;
            i = i+1;
        }
}
}

function nightdayhandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night') {
        Body.backcolor('black');
        Body.bodycolor('white');
        self.value='day';
        Links.linkcolor('powderblue');

    } else {
        Body.backcolor('white');
        Body.bodycolor('black');
        self.value='night';
        Links.linkcolor('blue');

    }
}
