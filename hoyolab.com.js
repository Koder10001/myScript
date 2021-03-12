function countConstellation(i)
{
    if (i < parseInt(document.querySelectorAll(".value")[4].innerText))
    {

        let charName = document.querySelector(".name").innerText;
        let charFav = document.querySelector(".fav").innerText;
        charFav = (charFav)?charFav:"";

        let countLock = document.querySelectorAll(".lock").length;
        let unlocked = 6 - countLock;
        console.log(`${charName} : Constellation ${unlocked} Favorite level: ${charFav}`);
        document.querySelectorAll(".right")[1].click()
        setTimeout(()=>{ countConstellation(++i) },500);
    }
}

if(window.location.hostname != "webstatic-sea.hoyolab.com"){
    window.location.href = document.querySelector("iframe").src;
}
else {
    countConstellation(0)
}