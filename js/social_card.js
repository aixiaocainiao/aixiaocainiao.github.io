var zhsher = {
    getTimeState: function () {
        var element = (new Date).getHours(), time = "";
        return 0 <= element && element <= 5 ? time = "晚安😴" : 5 < element && element <= 10 ? time = "早上好👋" : 10 < element && element <= 14 ? time = "中午好👋" : 14 < element && element <= 18 ? time = "下午好👋" : 18 < element && element <= 24 && (time = "晚上好👋"), time
    },
    sayhi: function () {
        var element = document.getElementById("author-info__sayhi");
        element && (element.innerHTML = zhsher.getTimeState() + "！我是")
    }
}
zhsher.sayhi();


