function carddata(title, cName, views, days, duration, thumbnail) {
        let viewcount
        if (views < 1000) {
                viewcount = views;
        }
        else if (views > 1000000) {
                viewcount = views / 1000000 + "M";
        }
        else {
                viewcount = views / 1000 + "K";
        }

        let daycount
        if(days < 32){
                daycount = days + "days";
        }
        else{
                daycount = days/31 + "months";
        }
        let html = `<div class="card">
                        <div class="image">
                                <img src="${thumbnail}" alt="">
                                <div class="duration">${duration}</div>
                        </div>
                        <div class="text">
                                <h1>${title}</h1>
                                <p>${cName} • ${viewcount} views • ${daycount} ago</p>
                        </div>`

        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

carddata("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 28, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")