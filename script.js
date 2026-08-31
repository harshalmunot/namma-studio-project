let menu_item = document.querySelector("#menu-item")
let talk_item = document.querySelector("#talk-item")
let hero_video_container = document.querySelector(".cursor-follower-video-container")
let hero_container =  document.querySelector(".hero-container")


menu_item.addEventListener("mouseenter",() => {
    menu_item.textContent = "OPEN"
})

menu_item.addEventListener("mouseleave",() => {
    menu_item.textContent = "MENU"
})
menu_item.addEventListener("click", () => {
    let menu = document.querySelector(".container-main");

    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
});

talk_item.addEventListener("mouseenter",() => {
    talk_item.textContent = "CONTACT US"
})

talk_item.addEventListener("mouseleave",() => {
    talk_item.textContent = "LET'S TALK"
})


document.addEventListener("mousemove", (e) => {
    // cursor follower logic
    hero_video_container.style.top= `${e.clientY}px`
    hero_video_container.style.left=`${e.clientX}px`
    hero_video_container.style.display = "block"
})

hero_container.addEventListener("mouseenter", (e) => {
    hero_video_container.style.opacity="1" 
})

hero_container.addEventListener("mouseleave", (e) => {
    // cursor follower logic
    hero_video_container.style.opacity="0" 
})