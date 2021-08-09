function countConstellation(i, str = "")
{
    if (i < parseInt(document.querySelectorAll(".value")[4].innerText))
    {
        let charName = document.querySelector(".name").innerText;
        let charFav = document.querySelector(".fav");
        charFav = (charFav)?charFav.innerHTML:"";

        let countLock = document.querySelectorAll(".lock").length;
        let unlocked = 6 - countLock;
        str += `\n${charName} : Constellation ${unlocked} Favorite level: ${charFav}`;
        document.querySelectorAll(".right")[1].click()
        setTimeout(()=>{ countConstellation(++i, str) },500);
    }
    else {
        console.log(str);
    }
}

if(window.location.hostname != "webstatic-sea.mihoyo.com" && window.location.hostname != "webstatic-sea.hoyolab.com"){
    window.location.href = document.querySelector("iframe").src;
}
else {
    countConstellation(0)
}
