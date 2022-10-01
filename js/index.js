window.addEventListener("load", () => {
    const loader = document.querySelector(".ki-load");
    loader.classList.add("hidden");
});
// let tabHeader = document.getElementsByClassName()
const hoUse = document.querySelector(".ho-use ");
let houseLand = document.querySelector(".house-land");
const laNd = document.querySelector(".la-nd ");
const houseList = document.querySelector(".house ");
const landList = document.querySelector(".land ");
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabsPane = houseLand.getElementsByClassName("house");

laNd.addEventListener("click", () => {
    laNd.classList.add("acti");
    hoUse.classList.remove("acti");
    houseList.classList.remove("acti");
    houseList.classList.add("hide");
    landList.classList.remove("hide");
    landList.classList.add("acti");
    alert("msg");
    tabIndicator.style.left = `calc(calc(100%/2))*`;
});
hoUse.addEventListener("click", () => {
    laNd.classList.remove("acti");
    hoUse.classList.add("acti");
    houseList.classList.add("acti");
    houseList.classList.remove("hide");
    landList.classList.add("hide");
    landList.classList.remove("acti");
});

// let cardModal = document.querySelectorAll('.card-imgg');
let card_1 = document.querySelector(".cac1");
let cardCloseBtn = document.querySelector(".closebtn"),
    imgBag = document.querySelector(".img-bag");

// imgBag.addEventListener('click', () => {})

function openNav() {
    card_1.classList.add("acti");
}
cardCloseBtn.addEventListener("click", () => {
    card_1.classList.remove("acti");
    alert("happy");
});

// -----

const imgs = document.querySelectorAll(".gall-select a");
const imgBtns = [...imgs];
let imgId = 1;
imgBtns.forEach((imgItem) => {
    imgItem.addEventListener("click", (event) => {
        event.preventDefault();
        imgId = imgItem.CDATA_SECTION_NODE.id;
        slideImg();
    });
});

function slideImg() {
    const dispWidth = document.querySelector(
        ".gall-showc img:first-child"
    ).clientWidth;
    document.querySelector(".gall-showc").style.transform = `translateX(${
    -(imgId - 1) * dispWidth
  }px)`;
}

// ------------

// document.addEventListener('DOMContentLoaded', function() {
//     // タブに対してクリックイベントを適用
//     const tabs = document.getElementsByClassName('ab');
//     for (let i = 0; i < tabs.length; i++) {
//         tabs[i].addEventListener('click', tabSwitch, false);
//     }

//     // タブをクリックすると実行する関数
//     function tabSwitch() {
//         // タブのclassの値を変更
//         document.getElementsByClassName('acti')[0].classList.remove('acti');
//         this.classList.add('acti');
//         // コンテンツのclassの値を変更
//         document.getElementsByClassName('acti')[0].classList.remove('acti');
//         const arrayTabs = Array.prototype.slice.call(tabs);
//         const index = arrayTabs.indexOf(this);
//         document.getElementsByClassName('house')[index].classList.add('acti');
//     };
// }, false);

// ------
barsInd = document.querySelector(".bars");
headMainLinks = document.querySelector(".header-main_linkss");
barsInd.onclick = function() {
    alert("dante");
    headMainLinks.classList.toggle("acti");
};

// --testimonial

const testimonialCon = document.querySelector(".our-ta");
const testimonial = document.querySelector(".quotes");
const userImage = document.querySelector(".us-img img");
const userName = document.querySelector(".us-name");
const userRole = document.querySelector(".us-role");

const testimonials = [{
        name: "Metal Gear Rising IV",
        position: "Soldier",
        photo: "../images/3c008251-3ea1-40ca-9d85-62574955eef4.jpg",
        quote: "Reject common sense to make the impossible possible.",
    },
    {
        name: "Joel - The Last of Us",
        position: "Father",
        photo: "../images/2d9c0996-eb43-4c4c-8a9e-6c95381aa203.jpg",
        quote: "“I’ve struggled a long time with survivin’, but no matter what you have to find something to fight for.”",
    },
    {
        name: "Nico - Grand Theft Auto IV",
        position: " A criminal discussing war and conflict",
        photo: "../images/6b316bef-af5b-4be8-b2b7-fddd335ad9aa.jpg",
        quote: "“War is where the young and stupid are tricked by the old and bitter into killing each other.”",
    },
    {
        name: "Frederico & Ezio - Assassin's Creed II",
        position: "Assassins",
        photo: "../images/9fd29c3c-974f-4636-b3af-c20bd61826b3.jpg",
        quote: "Federico: “It is a good life we lead, brother.” Ezio: “The best. May it never change.” Federico: “And may it never change us.”",
    },
    {
        name: "Javik",
        position: "Mass Effect 3",
        photo: "../images/72aafe93-3232-461a-bde6-37b1c5c12cb0.jpg",
        quote: "Stand in the ashes of a trillion dead souls, and asks the ghosts if honor matters. The silence is your answer.",
    },
    {
        name: "Khan",
        position: "Metro2033",
        photo: "../images/1002279.png",
        quote: "Even in dark times, we cannot relinquish the things that make us human.",
    },
    {
        name: "Mavis Vermillion",
        position: "Fairy Tail",
        photo: "../images/pexels-monstera-6311487.jpg",
        quote: "Mistakes are not shackles that halt one from stepping forward. Rather, they are thatwhich sustain and grow one’s heart.        ",
    },
    {
        name: "Captain Price",
        position: "Call of Duty: Modern Warfare 2",
        photo: "../images/985994.png",
        quote: "The healthy human mind doesn't wake up in the morning thinking this is its last day on Earth.But I think that's a luxury, not a curse.To know you're close to the end is a kind of freedom.Good time to take...inventory.",
    },
    {
        name: "– Emily Kaldwin",
        position: "Dishonored",
        photo: "../images/bcabf8d9-6e38-4111-9353-a0dd76d15b8b.jpg",
        quote: "It's a funny thing, ambition.It can take one to sublime heights or harrowing depths.And sometimes they are one and the same.",
    },
    {
        name: "Jiraiya",
        position: "Naruto",
        photo: "../images/1033673.jpg",
        quote: "Knowing what it feels to be in pain, is exactly why we try to be kind to others. ",
    },
    {
        name: "Renowned soldier",
        position: "Halo",
        photo: "../images/Tron's Light Runner by Daniel Simon - 3D Modeling.jpg",
        quote: "A hero need not speak. When he is gone, the world will speak for him.",
    },
    {
        name: "HACHIMAN HIKIGAYA",
        position: "YAHARI ORE NO SEISHUN LOVE COME WA MACHIGATTEIRU",
        photo: "../images/Trying to find a Formidable and unbelievable logo to elevate your brand_ Look no further!.jpg",
        quote: "Fake people have an image to maintain.Real people just don’ t care.",
    },
    {
        name: "The Jackal",
        position: "Far Cry 2",
        photo: "../images/Vem pra tuve.jpg",
        quote: "You can’t break a man the way you break a dog, or a horse. The harder you beat a man, the taller he stands.",
    },
    {
        name: "YMIR",
        position: "Attack on Titan",
        photo: "../images/'Vegito Blue ' Poster by David Onaolapo _ Displate.jpg",
        quote: "Do you always want to live hiding behind the mask you put up for the sake of others? You’re you, and there’s nothing wrong with that.",
    },
    {
        name: "Queen Myrrah",
        position: "Gears of War 2",
        photo: "../images/Voiture.jpg",
        quote: "Life is cruel. Of this I have no doubt. One can only hope that one leaves behind a lasting legacy. But so often, the legacies we leave behind... are not the ones we intended.",
    },
    {
        name: "VASH THE STAMPEDE",
        position: "Trigun",
        photo: "../images/universe of chaos.jpg",
        quote: "If you only face forward, there is something you will miss seeing.",
    },
    {
        name: "Alan Wake",
        position: "Alan Wake",
        photo: "../images/Welcome To Hell - IPhone Wallpapers.jpg",
        quote: "If our lives are already written, it would take a courageous man to change the script.",
    },
    {
        name: "Shiroe",
        position: "Log Horizon",
        photo: "../images/wallpaperflare.com_wallpaper (5).jpg",
        quote: "If you can’t do something, then don’t. Focus on what you can.",
    },
    {
        name: "Solid Snake",
        position: "Metal Gear Solid",
        photo: "../images/wallpaperflare.com_wallpaper (6).jpg",
        quote: "It's easy to forget what a sin is in the middle of a battlefield.",
    },
    {
        name: "SANAE FURUKAWA",
        position: "Clannad",
        photo: "../images/WhatsApp_Image_2021-09-01_at_17.59.49-removebg-preview.png",
        quote: "If your life can change once, your life can change again.",
    },
    {
        name: "Soldier",
        position: "Battlefield 1",
        photo: "../images/Zedge Backgrounds - WallpaperSafari.jpg",
        quote: "If history only remembers one in a thousands of us, then the future will be filled with stories of who we were and what we did.",
    },
    {
        name: "Parables of the Allspring",
        position: "Destiny",
        photo: "../images/Zhuoxin Ye🌈 on Twitter.jpg",
        quote: "The courage to walk into the Darkness, but strength to return to the Light.",
    },
    {
        name: "KYOUSUKE NATSUME",
        position: "Little Busters",
        photo: "../images/👀.jpg",
        quote: "Anything can happen. No one ever thinks it will until it does. What will happen, happens. That’s how the world is. The most important thing is to not let the tragedy defeat you. To believe that you can get through it.",
    },
    {
        name: "Ezio Auditore",
        position: "Assassin's Creed ",
        photo: "../images/Solo leveling.jpg",
        quote: "Nothing is true, everything is permitted.",
    },
    {
        name: "Ellie",
        position: "Last of Us",
        photo: "../images/Shadow Style Copy by Aragon24 on DeviantArt.jpg",
        quote: "Endure and survive.",
    },
    {
        name: "KEIMA KATSURAGI ",
        position: "THE WORLD GOD ONLY KNOWS",
        photo: "../images/Reencarnando en RWBY - Cap 2_ La academia Beacon.jpg",
        quote: "Don’t be upset because of what you can’t do. Do what you do best, live as carefree and optimistically as you can, because some people aren’t able to do that.",
    },
    {
        name: "Max Payne & Ezio - Assassin's Creed II",
        position: "Max Payne 2: The Fall of Max Payne",
        photo: "../images/Ryujin no ken wo kurae! _ Overwatch.jpg",
        quote: "Death is inevitable. Our fear of it makes us play safe, blocks out emotion. It's a losing game.Without passion, you are already dead.",
    },
    {
        name: "Waka",
        position: "Okami",
        photo: "../images/Random Anime Boy.jpg",
        quote: "Life is all about resolve. Outcome is secondary.",
    },
    {
        name: "Saitama",
        position: "One Punch Man",
        photo: "../images/file 2560x1440_000097.jpg",
        quote: "Who decides limits? And based on what? You said you worked hard? Well, maybe you need to work a little harder. Is that really the limit of your strength? Could you of tomorrow beat you today? Instead of giving in, move forward.",
    },
    {
        name: "Dr Rosalene",
        position: "To the Moon",
        photo: "../images/file 564x1003_000368.jpg",
        quote: "The ending isn’t any more important than any of the moments leading to it.",
    },
    {
        name: "Pandora",
        position: "God of War 3",
        photo: "../images/Eie_Q12XcAAe7y9.jpg",
        quote: "Hope is what makes us strong. It is why we are here. It is what we fight with when all else is lost.",
    },
    {
        name: "Nobito",
        position: "Doraemon",
        photo: "../images/f97197192f7aed4a6b76d515d1b9af89.jpg",
        quote: "Thinking you’re no-good and worthless is the worst thing you can do.",
    },
    {
        name: "The Hero's Shade ",
        position: "Legend of Zelda: Twilight Princess",
        photo: "../images/Radioactive Soldier wallpaper by SrabonSana - Download on ZEDGE™ _ 705f.jpg",
        quote: "A sword wields no strength unless the hands that holds it has courage.",
    },
    {
        name: "The narrator",
        position: "Fallout: New Vegas",
        photo: "../images/pexels-george-becker-131616.jpg",
        quote: "War. War never changes. But men do, through the roads they walk.",
    },
    {
        name: "Grimsley",
        position: "Pokemon Black and White",
        photo: "../images/Pubg Royale 2020 4k 4k Ultra HD Desktop Background Wallpaper for 4K UHD TV » WallpapersKit.jpg",
        quote: "It's more important to master the cards you're holding than to complain about the ones your opponents were dealt.",
    },
    {
        name: "SEBASTIAN MICHAELIS",
        position: "BLACK BUTLER / KUROSHITSUJI",
        photo: "../images/Poster Designs - Vol_ 4.jpg",
        quote: "Hatred and Sorrow are power. They are yours to control. All you have to do is to turn them into strength and use that strength to move forward. ",
    },
    {
        name: "Clay Kaczmarek",
        position: "Assassin's Creed Brotherhood ",
        photo: "../images/pngwing.com.png",
        quote: "What is a man but the sum of his memories? We are the stories we live! The tales we tell ourselves!",
    },
    {
        name: "Ghost",
        position: " Destiny",
        photo: "../images/pngwing.com (2).png",
        quote: "Ghost: This path should lead us straight to the grave. [pause] Ghost: The World's Grave.Not ours.",
    },
    {
        name: "HINATA MIYAKE",
        position: "A PLACE FURTHER THAN THE UNIVERSE",
        photo: "../images/pngwing.com (3).png",
        quote: "When you hit the point of no return, that’s the moment it truly becomes a journey. If you can still turn back, it’s not really a journey.",
    },
    {
        name: "Eren Yaeger",
        position: "Attack on Titan",
        photo: "../images/pngwing.com (1).png",
        quote: "If you win, you live. If you lose, you die. If you don’t fight, you can’t win.",
    },
    {
        name: "DENEIL YOUNG",
        position: "UCHUU KYOUDAI OR SPACEBROTHERS",
        photo: "../images/pngegg.png",
        quote: "All we can do is live until the day we die. Control what we can…and fly free.",
    },
    {
        name: "JUNICHIROU KAGAMI",
        position: "DENPA KYOUSHI",
        photo: "../images/pexels-pavel-danilyuk-8638593.jpg",
        quote: "Just like games, no matter how well you have things lined up in your life, there’s always something to keep you on your toes.",
    },
    {
        name: "MIGHT GUY",
        position: "Naruto",
        photo: "../images/pexels-drew-williams-3568520.jpg",
        quote: "It’s not always possible to do what we want to do, but it’s important to believe in something before you actually do it.",
    },
    {
        name: "The Tarnished",
        position: "Darksouls",
        photo: "../images/Peter Dennis Reilly on Twitter.jpg",
        quote: "What is bravery, without a dash of recklessness?",
    },
    {
        name: "LAVI BOOKMAN",
        position: "D.Gray-man",
        photo: "../images/pexels-fauxels-3228812.jpg",
        quote: "The only home that a man should ever need is within his heart.",
    },
    {
        name: "Claude",
        position: "Final Fantasy VIII",
        photo: "../images/pexels-godisable-jacob-944762.jpg",
        quote: "Someday you’re bound to lose everything. Everybody around you will be gone.",
    },
    {
        name: "Forgotten Soldier",
        position: "The Elder Scrolls: Oblivion",
        photo: "../images/overwatch hanzo  fanart by hyunigraphy on DeviantArt.jpg",
        quote: "Men are but flesh and blood. They know their doom, but not the hour.",
    },
    {
        name: "Renowned Soldier",
        position: "Final Fantasy X",
        photo: "../images/Orphan's Path (Destiny Hunter RWBY Male insert) - Draw from the Void.jpg",
        quote: "No matter how dark the night, the morning always comes.",
    },
    {
        name: "Ruined Soldier",
        position: "Metal Gear Solid 2: Sons of Liberty",
        photo: "../images/nimi-diffa-OWabN5X6xOQ-unsplash.jpg",
        quote: "Life isn’t just about passing on your genes. We can leave behind much more than just DNA. Through speech, music, literature, and movies… what we’ve seen, heard, felt… anger, joy, and sorrow… these are the things I will pass on. That’s what I live for. We need to pass the torch, and let our children read our messy and sad history by its light. We have all the magic of the digital age to do that with. The human race will probably come to an end sometime, and new species may rule over this planet. Earth may not be forever, but we still have the responsibility to leave what traces of life we can. Building the future and keeping the past alive are one and the same thing.",
    },
    {
        name: "Fred",
        position: "Metroid: The Other M",
        photo: "../images/markel-hall-vF3zmHBFQjw-unsplash.jpg",
        quote: "My past is not a memory. It’s a force at my back. It pushes and steers. I may not always like where it leads me, but like any story, the past needs resolution. What’s past is prologue.",
    },
    {
        name: "Gixx",
        position: "Guild Wars 2",
        photo: "../images/Jumpgate.png",
        quote: "Knowledge is useless if it is not used.",
    },
    {
        name: "Chris",
        position: "Team Fortress 2",
        photo: "../images/King Life _ Pixhells Wallpaper.jpg",
        quote: "At the end of the day, as long as there are two people left on the planet, someone is gonna want someone dead.",
    },
    {
        name: "Ellie",
        position: "The Last of Us",
        photo: "../images/kenzie-kraft-9RZ7s4kEv54-unsplash.jpg",
        quote: "Everyone I have cared for has either died or left me. Everyone – fucking except for you! So don’t tell me I would be safer with somebody else, because the truth is I would just be more scared.",
    },
    {
        name: "Rico",
        position: "Assassin’s Creed III",
        photo: "../images/pexels-asya-cusima-3097297.jpg",
        quote: "My enemy is a notion, not a nation.",
    },
    {
        name: "John Marston",
        position: "Marxx",
        photo: "../images/Jett Wallpapers.jpg",
        quote: "If you find yourself in a hole, the first thing to do is stop diggin’.",
    },
    {
        name: "Andrew Ryan",
        position: "Bioshock",
        photo: "../images/Iron man.jpg",
        quote: "We all make choices, but in the end our choices make us.",
    },
    {
        name: "Braid",
        position: "Void",
        photo: "../images/Inspirational Images - Geist -  __ __Onyx Path Forums.jpg",
        quote: "Our world, with its rules of causality, has trained us to be miserly with forgiveness. By forgiving too readily, we can be badly hurt. But if we’ve learned from a mistake and become better for it, shouldn’t we be rewarded for the learning, rather than punished for the mistake?",
    },
    {
        name: "Enzo",
        position: "Tomb Raider",
        photo: "../images/I need some wallpapers, share yours_ - Wallpaper.jpg",
        quote: "A famous explorer once said that the extraordinary is in what we do, not who we are.",
    },
    {
        name: "From T. E. Lawrence’s Seven Pillars of Wisdom",
        position: "Uncharted 3",
        photo: "../images/Goku Black ssj Rose Crimson Masked Saiyan.jpg",
        quote: "All men dream – but not equally. Those who dream by night, in the dusty recesses of their minds, wake in the day to find that it was vanity… But the dreamers of the day are dangerous men, for they may act their dream with open eyes, to make it possible. This I did.",
    },
    {
        name: "John Marston",
        position: "Red Dead Redemption",
        photo: "../images/FWHWyBxUYAcvr5t.png",
        quote: "We all need friends, old-timer. We die alone, but we live among men.",
    },
    {
        name: "Naomi Hunter",
        position: "Metal Gear Solid",
        photo: "../images/FT8iKJmWYAEOv5g.jpeg",
        quote: "You mustn't allow yourself to be chained to fate, to be ruled by your genes.Human beings can choose the kind of life that they want to live.What's important is that you choose life...and then live.",
    },
    {
        name: "Quelana Of Izalith",
        position: "Dark Souls",
        photo: "../images/FWHWyBxUYAcvr5t.png",
        quote: "Always fear the flame, lest you be devoured by it, and lose yourself.",
    },
    {
        name: "Dr Wallace Breen",
        position: "Half-Life 2",
        photo: "../images/Eie_Q12XcAAe7y9.jpg",
        quote: "Be wise. Be safe. Be aware.",
    },
    {
        name: "Handsome Jack",
        position: "Borderlands",
        photo: "../images/f6c877c7-7799-4c34-a8bf-22db9a017835.jpg",
        quote: "Everyone thinks they’re the hero of their own story.",
    },
    {
        name: "Squall Leonhart",
        position: "Final Fantasy VIII",
        photo: "../images/Esports Logo done on Fiverr!🔥 Please Click image for link! AR Designer and Digital Artist -.jpg",
        quote: "Right and wrong are not what separate us and our enemies. It's our different standpoints, our perspectives that separate us.Both sides blame one another.There's no good or bad side.Just two sides holding different views.",
    },
    {
        name: "Nozdormu",
        position: "World of Warcraft",
        photo: "../images/f6c877c7-7799-4c34-a8bf-22db9a017835.jpg",
        quote: "Time is a scary thing. When you lose it, you can’t find it. When you want it, it’s not there. When you try to keep it, the hourglass turns itself around.",
    },
    {
        name: "Frank Coleridge",
        position: "Silent Hill: Downpour",
        photo: "../images/Animation_.jpg",
        quote: "You can’t undo what you’ve already done, but you can face up to it.",
    },
    {
        name: "Don Juan",
        position: "Hotline Miami",
        photo: "../images/'SUPER VEGITO' Poster by black kizz _ Displate.jpg",
        quote: "No matter who you are, bearing too much weight... Inevitably leads to the collapse of everything.",
    },
    {
        name: "Ryuji Sakamoto",
        position: "Persona 5 ",
        photo: "../images/The Dark Soul Rising.jpg",
        quote: "But I’ve realized now… as long as I’m bein’ myself, I’ll always have somewhere I can fit in.” ",
    },
    {
        name: "Squall Leonhart",
        position: "Final Fantasy VIII",
        photo: "../images/Esports Logo done on Fiverr!🔥 Please Click image for link! AR Designer and Digital Artist -.jpg",
        quote: "Right and wrong are not what separate us and our enemies. It's our different standpoints, our perspectives that separate us.Both sides blame one another.There's no good or bad side.Just two sides holding different views.",
    },
    {
        name: "Victor Sullivan",
        position: "Uncharted 3: Drake's Deception",
        photo: "../images/The Emotionless Terror (Neglected!Abused!Emotionless!OP! M!Reader x TTIGRAAS).jpg",
        quote: "Even in the darkest of times, there is always hope. But sometimes fear clouds our vision. Sometimes our strength gives out. And yet sometimes, when all seems lost, a light shines through the darkness, and we are reminded that even the smallest amount of courage can turn the tides of war.",
    },
    {
        name: "The Narrator",
        position: "Darkest Dungeon",
        photo: "../images/The Space - Random.jpg",
        quote: "As life ebbs, terrible vistas of emptiness reveal themselves.",
    },
    {
        name: "Makarov",
        position: "Call of Duty: Modern Warfare 3",
        photo: "../images/Wallpaper.jpg",
        quote: "All warfare is based on deception. For years, the West's hypocrisy has made the world a battlefield. The corrupt talk; while our brothers and sons spill their own blood. But deceit cuts both ways. The bigger the lie, the more likely people will believe it, and when a nation cries for vengeance, the lie spreads like a wildfire. The fire builds, devouring everything in its path. Our enemies believe that they alone dictate the course of history, but all it takes is the will of a single man.",
    },
    {
        name: "The Prince",
        position: "Prince of Persia Trilogy",
        photo: "../images/マッタリ on Twitter.jpg",
        quote: "Most people think time is like a river that flows swift and sure in one direction. But I have seen the face of time, and I can tell you: they are wrong. Time is an ocean in a storm. You may wonder who I am or why I say this. Sit down and I will tell you a tale like none you have ever heard. [First and Last lines in the Trilogy]",
    },
    {
        name: "The Deserter",
        position: "Disco Elysium",
        photo: "../images/f6c877c7-7799-4c34-a8bf-22db9a017835.jpg",
        quote: "Men without ideals are only animals.",
    },
    {
        name: "Squall",
        position: "Chronicle Of The Metal Age Thief II",
        photo: "../images/Esports Logo done on Fiverr!🔥 Please Click image for link! AR Designer and Digital Artist -.jpg",
        quote: "Reliance upon others is weakness for the strong but strength for the weak. Wisdom and balance lie in knowing your own nature over time.",
    },
    {
        name: "Emperor Izaro",
        position: "Path of Exile",
        photo: "../images/Custom Apparel & Activewear Manufacturer.jpg",
        quote: "Wisdom is the offspring of Suffering and Time.",
    },
    {
        name: "Ramza Beoulve",
        position: "Final Fantasy Tactics: The War of the Lions",
        photo: "../images/Destiny 2 fanart, Angelina Sennoma.jpg",
        quote: "We are the sum of our deeds, not our names.",
    },
    {
        name: "The Narrator",
        position: "Darkest Dungeon",
        photo: "../images/destiny_2___hunter_by_painthisice_dcqnyyt-fullview.jpg",
        quote: "As life ebbs, terrible vistas of emptiness reveal themselves.",
    },
    {
        name: "Luxord",
        position: "Kingdom Hearts 358/2 Days",
        photo: "../images/d0f67041-cb65-40b3-9000-f95f36b32cee.jpg",
        quote: "Curiosity is essential to carving your own path through life. Get too curious, though, and it'll be a short walk.",
    },
    {
        name: 'Manuel "Manny" Calavera',
        position: "Grim Fandango",
        photo: "../images/clive-surreal-9kQBQqY_xrk-unsplash.jpg",
        quote: "Nobody knows what's gonna happen at the end of the line, so you might as well enjoy the trip.",
    },
    {
        name: "Edér Teylecg",
        position: "Pillars of Eternity",
        photo: "../images/Boruto wallpaper by Obito_artz - Download on ZEDGE™ _ a023.jpg",
        quote: "There's nothing as dangerous as a crowd with the wrong idea.",
    },
    {
        name: "Mary ",
        position: "Silent Hill 2",
        photo: "../images/Bad Money - IPhone Wallpapers.jpg",
        quote: "I can't tell you to remember me, but I can't bear for you to forget me.",
    },
    {
        name: "Sigma",
        position: "Zero Escape: Virtue's Last Reward ",
        photo: "../images/buka.jpg",
        quote: "The most horrible thing about death is how it turns a person into a thing. It's a thing that looks like your friend, but it's not them anymore.",
    },
    {
        name: "Dillion,",
        position: " Hellblade: Senua's Sacrifice ",
        photo: "../images/Awesome Graffiti Wallpapers.jpg",
        quote: "The hardest battles are fought in the mind, not with the sword.",
    },
    {
        name: "Don Juan",
        position: "Hotline Miami",
        photo: "../images/aikomo-opeyemi-bGB257nb3_4-unsplash.jpg",
        quote: "No matter who you are, bearing too much weight... Inevitably leads to the collapse of everything.",
    },
    {
        name: "Khan",
        position: "Metro 2033",
        photo: "../images/ArtStation - Explore.jpg",
        quote: "Force answers force, war breeds war, and death only brings death. To break this vicious circle one must do more than act without any thought or doubt.",
    },
    {
        name: "Aigis",
        position: " Persona 3",
        photo: "../images/716714.jpg ",
        quote: "You don't have to save the world to find meaning in life...Sometimes all you need is something simple, like someone to take care of.",
    },
    {
        name: "G-Man",
        position: "Half-Life 2",
        photo: " ../../images/648583.jpg ",
        quote: "The right man in the wrong place can make all the difference in the world.",
    },
    {
        name: "Emperor Yoshiro ",
        position: "Command And Conquer 3",
        photo: "../images/599379.jpg ",
        quote: "Given enough time, any man may master the physical. Given enough knowledge, any man may become wise. It is a true warrior, who can master both.",
    },
    {
        name: "Thomas Hildern",
        position: "Fallout: New Vegas",
        photo: "../images/135635.jpg ",
        quote: "Too many people have opinions on things they know nothing about. And the more ignorant they are, the more opinions they have.",
    },
    {
        name: "Matsumoto Rangiku ",
        position: "(Bleach)",
        photo: "../images/914667.jpg",
        quote: "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have.",
    },
    {
        name: "Hitsugaya Toshiro ",
        position: "Bleach",
        photo: "../images/273323.jpg",
        quote: "We are all like fireworks: We climb, we shine and always go our separate ways and become further apart. But even when that time comes, let’s not disappear like a firework and continue to shine… forever.",
    },
    {
        name: "G-Man",
        position: "Half-Life 2",
        photo: "../images/66913ef7-2671-472c-9960-b1318b6bb1a1.jpg",
        quote: "The right man in the wrong place can make all the difference in the world.",
    },
    {
        name: "Armin Arlert",
        position: " Shingeki no Kyojin / Attack on Titan",
        photo: "../images/29284.jpg",
        quote: "People, who can’t throw something important away, can never hope to change anything.",
    },
    {
        name: "Tamaki Suou ",
        position: "(Ouran Highschool Host Club)",
        photo: "../images/8404cb6f-303b-4dc7-a2fd-0ccc8a68dfdb.jpg",
        quote: "What good are dreams, if all you do is work? There’s more to life than hitting the books, I hope you know.",
    },
    {
        name: "Monkey D. Luffy ",
        position: "One Piece",
        photo: "../images/4656ce262d0bec50a9c1bfa4e41bce9c.jpg",
        quote: "If you don’t take risks, you can’t create a future!",
    },
    {
        name: "Thief",
        position: "Chronicle Of The Metal Age (Thief II)",
        photo: "../images/706ed7f2-7730-40f5-a79f-eb69555b980b.jpg",
        quote: "Reliance upon others is weakness for the strong but strength for the weak. Wisdom and balance lie in knowing your own nature over time.",
    },
    {
        name: "Monkey D Luffy ",
        position: " One Piece",
        photo: "../images/8e9bc23e-2a6f-4b8b-88ef-4f725b3d9c4b.jpg",
        quote: "Forgetting is like a wound. The wound may heal but it has already left a scar.",
    },
    {
        name: "Nao Tamori",
        position: "Charlotte",
        photo: "../images/7a84207a-224a-4bb7-8c63-23d71bac018a.jpg",
        quote: "The scars that you can’t see are the hardest to heal.",
    },
    {
        name: "Mei Misaki",
        position: "Magic Index",
        photo: "../images/0c60e3f2-7544-48b5-b105-34c015b90155.jpg",
        quote: "Death isn’t kind. It’s dark and black and as far as you… As far as you can see you’re all alone. There’s no one else.",
    },
    {
        name: "Donald",
        position: "Tesen Realtors",
        photo: "../images/04cd1d1d-0e20-4e32-a6b1-9d049031d8c9.jpg",
        quote: "There's no point in living life on a daily, sleeping around, dining in the most exotic locations and then you call it living. True living is making one's dreams become reality... No matter the cost",
    },
    {
        name: "Marcus",
        position: "Void",
        photo: "../images/5b0b24cf-7911-4ff2-baeb-c330ed3cfd1d.jpg",
        quote: "An eye for an eye and the world goes blind.",
    },
    {
        name: "Renton Thurston",
        position: " Eureka Seven",
        photo: "../images/0c60e3f2-7544-48b5-b105-34c015b90155.jpg",
        quote: "Don’t beg for things. Do it yourself, or else you won’t get anything.",
    },
    {
        name: "Keima Katsuragi ",
        position: "The World God Only Knows",
        photo: "../images/04cd1d1d-0e20-4e32-a6b1-9d049031d8c9.jpg",
        quote: "Don’t be upset because of what you can’t do. Do what you do best, live as carefree and optimistically as you can, because some people aren’t able to do that.",
    },
    {
        name: "Natsu Dragneel",
        position: "Fairy Tail",
        photo: "../images/0c60e3f2-7544-48b5-b105-34c015b90155.jpg",
        quote: "We don’t have to know what tomorrow holds! That’s why we can live for everything we’re worth today!",
    },
    {
        name: "Seiya Kanie",
        position: "Amagi Brilliant Park",
        photo: "../images/04cd1d1d-0e20-4e32-a6b1-9d049031d8c9.jpg",
        quote: "If you wanna make people dream, you’ve gotta start by believing in that dream yourself!” ",
    },
    {
        name: "Jiraiya",
        position: "Naruto",
        photo: "../images/5b0b24cf-7911-4ff2-baeb-c330ed3cfd1d.jpg",
        quote: "A person grows up when he’s able to overcome hardships. Protection is important, but there are some things that a person must learn on his own.",
    },
    {
        name: "Jet Black",
        position: " Cowboy Bebop",
        photo: "../images/0c60e3f2-7544-48b5-b105-34c015b90155.jpg",
        quote: "Man always thinks about the past before he dies, as if he were frantically searching for proof he truly lived.",
    },
    {
        name: "Dr. Hiruluk ",
        position: "One Piece",
        photo: "../images/04cd1d1d-0e20-4e32-a6b1-9d049031d8c9.jpg",
        quote: "When do you think people die? When they are shot through the heart by the bullet of a pistol? No. When they are ravaged by an incurable disease? No. When they drink a soup made from a poisonous mushroom? No! It’s when… they are forgotten.",
    },
    {
        name: "Himura Kenshin",
        position: "Samurai X",
        photo: "../images/5b0b24cf-7911-4ff2-baeb-c330ed3cfd1d.jpg",
        quote: "You’ll only realize that you truly love someone if they already caused you enormous pain. Your enemies can never hurt you the way your loved ones can. It’s the people close to your heart that can give you the most piercing wound. Love is a double-edged sword, it can heal the wound faster or it can sink the blade even deeper.",
    },
    {
        name: "Sunako",
        position: "The Wallflower Wiki",
        photo: "../images/04cd1d1d-0e20-4e32-a6b1-9d049031d8c9.jpg",
        quote: "I think death is equally terrible for everyone. Young people, old people, the good, the bad; it’s always the same. It’s rather fair in its treatment. There’s no such thing as a particularly terrible death, that’s why it’s frightening.",
    },
    {
        name: "Squall Leonhart",
        position: " Final Fantasy VIII",
        photo: "../images/5b0b24cf-7911-4ff2-baeb-c330ed3cfd1d.jpg",
        quote: "Someday you're bound to lose everything. Everybody around you will be gone.",
    },
    {
        name: "Jet Black",
        position: " Cowboy Bebop",
        photo: "../images/0c60e3f2-7544-48b5-b105-34c015b90155.jpg",
        quote: "Man always thinks about the past before he dies, as if he were frantically searching for proof he truly lived.",
    },
    {
        name: "Dr. Hiruluk ",
        position: "One Piece",
        photo: "../images/04cd1d1d-0e20-4e32-a6b1-9d049031d8c9.jpg",
        quote: "When do you think people die? When they are shot through the heart by the bullet of a pistol? No. When they are ravaged by an incurable disease? No. When they drink a soup made from a poisonous mushroom? No! It’s when… they are forgotten.",
    },
    {
        name: "Himura Kenshin",
        position: "Samurai X",
        photo: "../images/Steven Universe x Cozmic guardian reader_.jpg",
        quote: "You’ll only realize that you truly love someone if they already caused you enormous pain. Your enemies can never hurt you the way your loved ones can. It’s the people close to your heart that can give you the most piercing wound. Love is a double-edged sword, it can heal the wound faster or it can sink the blade even deeper.",
    },

    {
        name: "Jet Black",
        position: " Cowboy Bebop",
        photo: "../images/0c60e3f2-7544-48b5-b105-34c015b90155.jpg",
        quote: "Man always thinks about the past before he dies, as if he were frantically searching for proof he truly lived.",
    },
    {
        name: "Ken",
        position: "--Void---",
        photo: "../images/Steven Universe x Cozmic guardian reader_.jpg",
        quote: "One of the greatest mental freedoms is truly not caring what anyone else thinks of you.",
    },

    {
        name: "Jet",
        position: " Void",
        photo: "../images/0c60e3f2-7544-48b5-b105-34c015b90155.jpg",
        quote: "Ignore those people who talk about you behind your back, that’s where they belong",
    },
    {
        name: "Geralt of Rivia ",
        position: "Witcher 3",
        photo: "../images/04cd1d1d-0e20-4e32-a6b1-9d049031d8c9.jpg",
        quote: "Evil is Evil, Lesser, greater, middling. Makes no difference. The degree is arbitrary. The definition's blurred. If I'm to choose between one evil and another. I'd rather not choose at all.",
    },
    {
        name: "Arno Victor Dorian",
        position: "AC Unity",
        photo: "../images/5b0b24cf-7911-4ff2-baeb-c330ed3cfd1d.jpg",
        quote: "All that we do, all that we are, begins and end with ourselves.",
    },

    {
        name: "Jet",
        position: " Void",
        photo: "../images/0c60e3f2-7544-48b5-b105-34c015b90155.jpg",
        quote: "Ignore those people who talk about you behind your back, that’s where they belong",
    },
    {
        name: "Arno Victor Dorian ",
        position: "AC Unity",
        photo: "../images/04cd1d1d-0e20-4e32-a6b1-9d049031d8c9.jpg",
        quote: "It is sometimes hard to remember how easy life was before the world change.",
    },
    {
        name: "Arno Victor Dorian",
        position: "AC Unity",
        photo: "../images/5b0b24cf-7911-4ff2-baeb-c330ed3cfd1d.jpg",
        quote: "It matters not how we complete our task.. Only that’s done.",
    },
    {
        name: "Shay Patrick Cormac",
        position: " AC Rogue",
        photo: "../images/0c60e3f2-7544-48b5-b105-34c015b90155.jpg",
        quote: "Life’s hardest choices are the ones that force you to question your own moral code.",
    },
    {
        name: "Edward Kenway ",
        position: "AC Black Flag",
        photo: "../images/04cd1d1d-0e20-4e32-a6b1-9d049031d8c9.jpg",
        quote: "I want food that don't make me sick. I want walls that hold back the wind. I want a decent life",
    },
    {
        name: "Edward Kenway ",
        position: "AC Black Flag",
        photo: "../images/5b0b24cf-7911-4ff2-baeb-c330ed3cfd1d.jpg",
        quote: "Men dream. But dreams hold no value here. What was first bright light of hope has now turned into a night of captivity. Lost in the dark, we surrender our minds and forget who we are. But some of us have woken up. They remind us that we all have a choice. To stand, not kneel. To oppose, not obey. To live, not just exist .",
    },
    {
        name: "Adewale",
        position: " AC Freedom Cry",
        photo: "../images/0c60e3f2-7544-48b5-b105-34c015b90155.jpg",
        quote: "With no future of me. I forged my own [ I never looked back. Never wanted to, never had to. Until now ]",
    },
    {
        name: "Ratohnhaketon / Connor Kenway",
        position: "AC III",
        photo: "../images/04cd1d1d-0e20-4e32-a6b1-9d049031d8c9.jpg",
        quote: "It is better to have faith on something than none at all.",
    },
    {
        name: "Aveline De Grandpre ",
        position: "AC Liberation",
        photo: "../images/5b0b24cf-7911-4ff2-baeb-c330ed3cfd1d.jpg",
        quote: "I take my rest when this life is exhausted.",
    },
    {
        name: "Ezio Auditore ",
        position: "AC II || Brotherhood",
        photo: "../images/5b0b24cf-7911-4ff2-baeb-c330ed3cfd1d.jpg",
        quote: "People are quick to judge, but slow to correct themselves.",
    },
    {
        name: "Ezio Auditore",
        position: " AC II || Brotherhood",
        photo: "../images/0c60e3f2-7544-48b5-b105-34c015b90155.jpg",
        quote: "My story is one of many thousands, and the world will not suffer if it ends too soon.",
    },
    {
        name: "Altair Ib'n la Ahad",
        position: "Assasin\'s Creed | AC Bloodlines",
        photo: "../images/04cd1d1d-0e20-4e32-a6b1-9d049031d8c9.jpg",
        quote: "Men must be free to do what they believe. It is not our right to punish one for thinking what they do, no matter how much we disagree.",
    },
    {
        name: "Sylens ",
        position: " Horizon Zero Dawn",
        photo: "../images/5b0b24cf-7911-4ff2-baeb-c330ed3cfd1d.jpg",
        quote: "Trust is for fools, it shifts and crumbles like sand. A poor foundation for any partnership , but mutual self-interest now that is a solid bedrock upon which you might build new signs of understanding.",
    },
    {
        name: "Dr. Jonathan Reid ",
        position: "Vampyr",
        photo: "../images/5b0b24cf-7911-4ff2-baeb-c330ed3cfd1d.jpg",
        quote: "I always thought I was the master of my own fate. But now I know we don't always have control over our lives.",
    },
    {
        name: "Marquis de Lafayette ",
        position: " The Order 1866",
        photo: "../images/0c60e3f2-7544-48b5-b105-34c015b90155.jpg",
        quote: "Without passion, monsieur (Mr.), a man cannot fight.",
    },
    {
        name: " Aiden Pearce",
        position: "Watchdogs",
        photo: "../images/04cd1d1d-0e20-4e32-a6b1-9d049031d8c9.jpg",
        quote: "I don't look back anymore. I don't regret. I look forward.",
    },
    {
        name: "Squall Leonhart",
        position: " Final Fantasy",
        photo: "../images/5b0b24cf-7911-4ff2-baeb-c330ed3cfd1d.jpg",
        quote: "Right or wrong are not what separate us and our enemies. It's our different standpoints, our perspectives that separate us. Both side blame one another. There's no good or bad side, just two sides holding different views",
    },
    {
        name: "Aqua",
        position: "Kingdom Hearts: Birth by Sleep",
        photo: "../images/5b0b24cf-7911-4ff2-baeb-c330ed3cfd1d.jpg",
        quote: "There's no deeper sadness that discovering all that you knew is gone.",
    },
    {
        name: "ZenYatta ",
        position: "  Overwatch",
        photo: "../images/0c60e3f2-7544-48b5-b105-34c015b90155.jpg",
        quote: "Always strive for improvement.",
    },
    {
        name: " Eizen",
        position: "Tales of Berseria",
        photo: "../images/04cd1d1d-0e20-4e32-a6b1-9d049031d8c9.jpg",
        quote: "It's OK to feel lost. Let yourself wander for a while. But whatever you end up choosing, decide it for yourself. In the end, it's all that matters.",
    },
    {
        name: "Eizen",
        position: " Tales of Berseria",
        photo: "../images/5b0b24cf-7911-4ff2-baeb-c330ed3cfd1d.jpg",
        quote: "There's more to adventuring than visiting far-off lands and sailing stormy seas, you know. Adventures are about achieving your ambitions and leaping across the walls we've built to protect ourselves, no matter the danger that awaits on the other side. There are no big or small adventures.",
    },
    {
        name: "Aqua",
        position: "Kingdom Hearts: Birth by Sleep",
        photo: "../images/5b0b24cf-7911-4ff2-baeb-c330ed3cfd1d.jpg",
        quote: "There's no deeper sadness that discovering all that you knew is gone.",
    },
    {
        name: "Solid Snake ",
        position: "  Metal Gear Solid 2",
        photo: "../images/0c60e3f2-7544-48b5-b105-34c015b90155.jpg",
        quote: "Find something to believe in and find it for yourself. When you do, pass it on to the future.",
    },
    {
        name: " Aya Brea",
        position: "Parasite Eve | 3rd Birthday",
        photo: "../images/04cd1d1d-0e20-4e32-a6b1-9d049031d8c9.jpg",
        quote: "If you do nothing, you will lose nothing. A craven way to live. If you can really call that life, I for one cannot .",
    },
    {
        name: "Aya Brea",
        position: " Parasite Eve | 3rd Birthday",
        photo: "../images/5b0b24cf-7911-4ff2-baeb-c330ed3cfd1d.jpg",
        quote: "What led you here was hope for tomorrow. Smile and walk toward the future.",
    },
    {
        name: " Ezio Auditore",
        position: "AC II",
        photo: "../images/04cd1d1d-0e20-4e32-a6b1-9d049031d8c9.jpg",
        quote: "Silenzio. Silenzio. Twenty-two years ago, I stood where I stand now – and watched my loved ones die, betrayed by those I had called friends. Vengeance clouded my mind. It would have consumed me, were it not for the wisdom of a few strangers, who taught me to look past my instincts. They never preached answers, but guided me to learn from myself. We don't need anyone to tell us what to do; not Savonarola, not the Medici. We are free to follow our own path. There are those who will take that freedom from us, and too many of you gladly give it. But it is our ability to choose – whatever you think is true – that makes us human... There is no book or teacher to give you the answers, to show you the path. Choose your own way! Do not follow me, or anyone else.",
    },
    {
        name: "Captain John Price",
        position: " COD MW2",
        photo: "../images/5b0b24cf-7911-4ff2-baeb-c330ed3cfd1d.jpg",
        quote: "The healthy human mind doesn't wake up in the morning thinking this is its last day on Earth. But I think that's a luxury, not a curse. To know you're close to the end is a kind of freedom. Good time to take...inventory. Out-gunned. Outnumbered. Out of our minds. On a suicide mission. But the sand and the rocks here, stained with thousands of years of warfare... They will remember us. For this. Because out of all our vast array of nightmares, this is the one we choose for ourselves. We go forward like a breath exhaled from the Earth. With vigor in our hearts and one goal in sight: We. Will. Kill him.",
    },
    {
        name: "Niko Belic ",
        position: "   GTA IV",
        photo: "../images/0c60e3f2-7544-48b5-b105-34c015b90155.jpg",
        quote: "Our past is part of us. And you can’t pretend that what happened never happened only because you landed in another country or changed life.",
    },
    {
        name: " Vinnie",
        position: "Sift Heads saga",
        photo: "../images/04cd1d1d-0e20-4e32-a6b1-9d049031d8c9.jpg",
        quote: "What does it mean you did not have a choice? Every man has the chance to choose. A gun in your hand and the choice is made.",
    },
    {
        name: " Prince Xander of Nohr",
        position: " Fire Emblem: Fates",
        photo: "../images/5b0b24cf-7911-4ff2-baeb-c330ed3cfd1d.jpg",
        quote: "The sad truth is that justice is an illusion. A child’s fairy tale. There is no light path that always leads to good, nor a dark path that leads to evil. To believe that — to see the world in black and white — is missing half the picture. All that matters are the choices we make — especially the hard ones.",
    },
    {
        name: " Vortigaunt",
        position: "Half-Life II",
        photo: "../images/04cd1d1d-0e20-4e32-a6b1-9d049031d8c9.jpg",
        quote: "How many are there in you? Whose hopes and dreams do you encompass? Could you but see the eyes in your own, the minds in your mind, you would see how much we share.",
    },
    {
        name: "Captain John Price",
        position: " COD MW2",
        photo: "../images/5b0b24cf-7911-4ff2-baeb-c330ed3cfd1d.jpg",
        quote: "The healthy human mind doesn't wake up in the morning thinking this is its last day on Earth. But I think that's a luxury, not a curse. To know you're close to the end is a kind of freedom. Good time to take...inventory. Out-gunned. Outnumbered. Out of our minds. On a suicide mission. But the sand and the rocks here, stained with thousands of years of warfare... They will remember us. For this. Because out of all our vast array of nightmares, this is the one we choose for ourselves. We go forward like a breath exhaled from the Earth. With vigor in our hearts and one goal in sight: We. Will. Kill him.",
    },
    {
        name: "Fallen Soldier",
        position: " Spec Ops: The Line",
        photo: "../images/5b0b24cf-7911-4ff2-baeb-c330ed3cfd1d.jpg",
        quote: "“To kill for yourself is murder. To kill for your government is heroic. To kill for entertainment is harmless.  “It takes a strong man to deny what's right in front of him. And if the truth is undeniable, you create your own.”  “If you were a better person,you wouldn't be here.” ” There were over five thousand people alive in Dubai, the day before you arrived.How many are alive today, I wonder ? How many will be alive tomorrow ? I thought it was my duty to protect the people from the storm.I was wrong captain.I have to protect it from you.” Even the loading screens, that initially give you some tips about the game, start getting more disturbing the further you go in the story.“ “Do you feel like a hero yet ? ” “How many Americans have you killed today ? ” “This is all your fault” “Do you even remember why you came here ? ” “You’ re still a good person” ",
    },
];
let iddx = 1;

function updateTest() {
    // console.log();
    const { name, position, photo, quote } = testimonials[iddx]
    testimonial.innerHTML = quote;
    userImage.src = photo;
    userName.innerHTML = name;
    userRole.innerHTML = position;
    iddx++

    if (iddx > testimonials.length - 1) {
        iddx = 0;
    }

}
setInterval(updateTest, 10000);
// updateTest()
// ---cookie alert

const cookieBox = document.querySelector(".cookies .wrapper"),
    acceptBtn = cookieBox.querySelector(".butt button");

acceptBtn.onclick = () => {
    console.log("les go!");
    // setting for 1 month, after 1 month, cookie would expire
    document.cookie =
        "Cookie Created=Simply Mi Homes; max-age=" + 4 * 60 * 60 * 24 * 30;
    if (document.cookie) {
        // if above cookei set
        alert("Cookie is set");
        cookieBox.classList.add("hide");
    } else {
        alert("Cookie cannot be set");
    }
};
let checkCookie = document.cookie.indexOf("Cookie Created=Simply Mi Homes"); //checking our set cookie

// if cookie is set, hide the cookie, else show it.
checkCookie != -1 ?
    cookieBox.classList.add("hide") :
    cookieBox.classList.remove("hide");

// ----mobile nav

// gsap.registerPlugin(ScrollTrigger, )

// -----

// OPEN TRIGGER
var openTrigger = $(".menu-trigger");
var openTriggerTop = openTrigger.find(".menu-trigger-bar.top");
var openTriggerMiddle = openTrigger.find(".menu-trigger-bar.middle");
var openTriggerBottom = openTrigger.find(".menu-trigger-bar.bottom");

//CLOSE TRIGGER
var closeTrigger = $(".close-trigger");
var closeTriggerLeft = closeTrigger.find(".close-trigger-bar.left");
var closeTriggerRight = closeTrigger.find(".close-trigger-bar.right");

//LOGO
var logo = $(".logo");

//MENU
var menuContainer = $(".menu-container");
var menu = $(".menu");
var menuTop = $(".menu-bg.top");
var menuMiddle = $(".menu-bg.middle");
var menuBottom = $(".menu-bg.bottom");

//TL
var tlOpen = new TimelineMax({
    paused: true,
});
var tlClose = new TimelineMax({
    paused: true,
});

//OPEN TIMELINE
tlOpen
    .add("preOpen")
    .to(
        logo,
        0.4, {
            scale: 0.8,
            opacity: 0,
            ease: Power2.easeOut,
        },
        "preOpen"
    )
    .to(
        openTriggerTop,
        0.4, {
            x: "+80px",
            y: "-80px",
            delay: 0.1,
            ease: Power4.easeIn,
            onComplete: function() {
                closeTrigger.css("z-index", "25");
            },
        },
        "preOpen"
    )
    .to(
        openTriggerMiddle,
        0.4, {
            x: "+=80px",
            y: "-=80px",
            ease: Power4.easeIn,
            onComplete: function() {
                openTrigger.css("visibility", "hidden");
            },
        },
        "preOpen"
    )
    .to(
        openTriggerBottom,
        0.4, {
            x: "+=80px",
            y: "-=80px",
            delay: 0.2,
            ease: Power4.easeIn,
        },
        "preOpen"
    )
    .add("open", "-=0.4")
    .to(
        menuTop,
        0.8, {
            y: "13%",
            ease: Power4.easeInOut,
        },
        "open"
    )
    .to(
        menuMiddle,
        0.8, {
            scaleY: 1,
            ease: Power4.easeInOut,
        },
        "open"
    )
    .to(
        menuBottom,
        0.8, {
            y: "-114%",
            ease: Power4.easeInOut,
        },
        "open"
    )
    .fromTo(
        menu,
        0.6, {
            y: 30,
            opacity: 0,
            visibility: "hidden",
        }, {
            y: 0,
            opacity: 1,
            visibility: "visible",
            ease: Power4.easeOut,
        },
        "-=0.2"
    )
    .add("preClose", "-=0.8")
    .to(
        closeTriggerLeft,
        0.8, {
            x: "-=100px",
            y: "+=100px",
            ease: Power4.easeOut,
        },
        "preClose"
    )
    .to(
        closeTriggerRight,
        0.8, {
            x: "+=100px",
            y: "+=100px",
            delay: 0.2,
            ease: Power4.easeOut,
        },
        "preClose"
    );

//CLOSE TIMELINE
tlClose
    .add("close")
    .to(
        menuTop,
        0.2, {
            backgroundColor: "#6295ca",
            ease: Power4.easeInOut,
            onComplete: function() {
                logo.css("z-index", "26");
                closeTrigger.css("z-index", "5");
                openTrigger.css("visibility", "visible");
            },
        },
        "close"
    )
    .to(
        menuMiddle,
        0.2, {
            backgroundColor: "#6295ca",
            ease: Power4.easeInOut,
        },
        "close"
    )
    .to(
        menuBottom,
        0.2, {
            backgroundColor: "#6295ca",
            ease: Power4.easeInOut,
        },
        "close"
    )
    .to(
        menu,
        0.6, {
            y: 20,
            opacity: 0,
            ease: Power4.easeOut,
            onComplete: function() {
                menu.css("visibility", "hidden");
            },
        },
        "close"
    )
    .to(
        logo,
        0.8, {
            scale: 1,
            opacity: 1,
            ease: Power4.easeInOut,
        },
        "close",
        "+=0.2"
    )
    .to(
        menuTop,
        0.8, {
            y: "-113%",
            ease: Power4.easeInOut,
        },
        "close",
        "+=0.2"
    )
    .to(
        menuMiddle,
        0.8, {
            scaleY: 0,
            ease: Power4.easeInOut,
        },
        "close",
        "+=0.2"
    )
    .to(
        menuBottom,
        0.8, {
            y: "23%",
            ease: Power4.easeInOut,
            onComplete: function() {
                menuTop.css("background-color", "#ffffff");
                menuMiddle.css("background-color", "#ffffff");
                menuBottom.css("background-color", "#ffffff");
            },
        },
        "close",
        "+=0.2"
    )
    .to(
        closeTriggerLeft,
        0.2, {
            x: "+=100px",
            y: "-=100px",
            ease: Power4.easeIn,
        },
        "close"
    )
    .to(
        closeTriggerRight,
        0.2, {
            x: "-=100px",
            y: "-=100px",
            delay: 0.1,
            ease: Power4.easeIn,
        },
        "close"
    )
    .to(
        openTriggerTop,
        1, {
            x: "-=80px",
            y: "+=80px",
            delay: 0.2,
            ease: Power4.easeOut,
        },
        "close"
    )
    .to(
        openTriggerMiddle,
        1, {
            x: "-=80px",
            y: "+=80px",
            ease: Power4.easeOut,
        },
        "close"
    )
    .to(
        openTriggerBottom,
        1, {
            x: "-=80px",
            y: "+=80px",
            delay: 0.1,
            ease: Power4.easeOut,
        },
        "close"
    );

//EVENTS
openTrigger.on("click", function() {
    if (tlOpen.progress() < 1) {
        tlOpen.play();
    } else {
        tlOpen.restart();
    }
});

closeTrigger.on("click", function() {
    if (tlClose.progress() < 1) {
        tlClose.play();
    } else {
        tlClose.restart();
    }
});

// gsap animations

// gsap.fromTo('.', {
//     // y: 50,
//     scale: .6,
//     opacity: 0,
//     duration: 2,
//     delay: 4,
//     ease: 'power2.inOut',
//     yoyo: true,
//     yoyoEase: true,
//     repeat: 2,
//     repeatRefresh: true,
//     repeatDelay: 1.5,
// }, {
//     // y: 0,
//     // y: 1 0,
//     scale: 1,
//     opacity: 1,
//     ease: 'elastic.inOut',
//     duration: 2,
// })

// gsap.fromTo('.header-main', {
//     scale: .5,
//     // x: 50,
//     // y: 50,
//     opacity: .5,
//     delay: 1.2,
//     duration: 1,
//     ease: 'power3.inOut',
//     repeat: 1,
//     repeatRefresh: true,
//     repeatDelay: 1.5,
// }, {
//     // y: 100,
//     // x: 50,
//     scale: 1,

// gsap.fromTo('.header-main', {
//     scale: 0,
//     opacity: .41,
//     // backgroundColor: 'white',
//     // borderRadius: 1,
//     ease: 'power2.out',
//     duration: 2,
//     delay: 1,
// }, {
//     scale: 1,
//     opacity: 1,
//     x: 35,
//     // backgroundColor: 'transparent',
//     // borderRadius: 0,
//     ease: 'elastic.inOut',
//     duration: 1,
//     delay: 2,
//     yoyo: true,
//     yoyoEase: true,
// })

//     delay: .2,
//     opacity: 1,
//     yoyo: true,
//     yoyoEase: true,
//     duration: 2,
//     ease: 'elastic.out'
// })

// gsap.fromTo('.header-main_links ul li a', {
//     y: -50,
//     ease: 'bounce.inOut',
//     stagger: .5,
//     opacity: 0,
//     // delay: 2.5,
//     duration: 1,
// }, {
//     y: 0,
//     opacity: 1,
//     // stagger: .25,
//     stagger: {
//         each: .5,
//         from: 'random',
//         ease: 'power2.inOut'
//     },
//     ease: 'power3.inOut',
//     // delay: 3,
//     duration: 2,
//     repeat: 2,
// }, .5)

// gsap.to('.header-main_links a', {
//     y: 50,
//     duration: 5,
//     delay: .75,
//     ease: 'power3.inOut',
//     yoyo: true,
//     yoyoEase: true,
//     stagger: 1,
// })

// Register an effect for reuse
// gsap.registerEffect({
//     name: "fade",
//     effect: (targets, config) => {
//         return gsap.to(targets, {
//             duration: config.duration,
//             opacity: 0
//         });
//     },
//     defaults: {
//         duration: 2
//     },
//     extendTimeline: true
// });

// // tl-timelines
// let tl = gsap.timeline({
//     delay: 0.5,
//     paused: true, // default is false
//     repeat: 2, // number of repeats (-1 for infinite)
//     repeatDelay: 1, // seconds between repeats
//     repeatRefresh: true, // invalidates on each repeat
//     yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
//     defaults: { // children inherit these defaults
//         duration: 1,
//         ease: "elastic.out"
//     },
// })

// tl.to('')
// gsap animations end

// anime-js animations
anime({
    targets: ".header-main_links .hml",
    translateX: [-270, 0],
    // translateY: [270, 0],
    endDelay: 1000,
    opacity: [0, 1],
    delay: anime.stagger(1000), // increase delay by 100ms for each elements.
});

// anime({
//     targets: '.basic-staggering-demo .el',
//     translateX: 270,
//     delay: anime.stagger(100) // increase delay by 100ms for each elements.
// });
anime({
    targets: ".header-main_title h1",
    translateX: [250, 0],
    opacity: [0, 1],
    delay: 5500,
    // delay: anime.stagger(1000),
    endDelay: 1000,
    // easing: 'easeOutInExpo'
});
anime({
    targets: ".header-main_title .hms",
    // delay: 6000,
    delay: anime.stagger(1000, {
        start: 6000,
    }),
    endDelay: 1500,
    opacity: [0, 1],
    translateX: [-100, 0],
    // direction: 'alternate'
});
anime({
    targets: ".cookies",
    translateY: [100, 0],
    opacity: [0, 1],
    easing: "easeOutQuad",
    delay: 6800,
    endDelay: 1000,
});

// anime({
//     targets: '.main-bod .text',
//     opacity: [0, 1],
//     delay: 3000,
//     backgroundColor: '#0fc',
//     endDelay: 1000,
//     translateX: [200, 0]
//          translateY: [200, 0],
//          direction: 'alternate'

// })

anime({
    targets: ".main-bod .text .tx-m",
    opacity: [0, 1],
    // delay: 3000,
    delay: anime.stagger(2000, {
        start: 2000,
    }),
    // backgroundColor: '#0fc',
    endDelay: 1000,
    translateX: [200, 0],
    // translateY: [200, 0],
    // direction: 'alternate'
});
anime({
    targets: ".main-bod .img-con",
    opacity: [0, 1],
    delay: 2500,
    endDelay: 1000,
    right: [150, 0],
    // left: ['240px', '0']
});

anime({
    targets: ".ho-la .ab",
    opacity: [0, 1],
    // delay: 3500,
    delay: anime.stagger(500, {
        start: 2000,
    }),
    endDelay: 1000,
    easing: "easeInOutQuad",
    // right: [150, 0],
    left: [100, 0],
    // left: ['240px', '0']
});
anime({
    targets: "ho-la .tab-indicator",
    opacity: [0, 1],
    translateX: [-100, 0],
    // left: [100, 0],
    delay: 1500,
    endDelay: 1000,
});
anime({
    targets: ''
})
anime({
    targets: ".house .ho-us",
    opacity: [0, 1],
    // delay: 3500,
    delay: anime.stagger(1000, {
        start: 2000,
    }),
    endDelay: 1000,
    easing: "easeInOutQuad",
    translateX: [500, 0],
});
anime({
    targets: ".ho-us .hou-img",
    opacity: [0, 1],
    delay: 4000,
    // delay: anime.stagger(1000, {
    //     start: 2000
    // }),
    endDelay: 1000,
    easing: "easeInOutExpo",
    translateY: [100, 0],
});
anime({
    targets: ".ho-us .ho-det h1",
    opacity: [0, 1],
    delay: 5000,
    // delay: anime.stagger(1000, {
    //     start: 2000
    // }),
    endDelay: 1000,
    easing: "easeInOutExpo",
    translateY: [100, 0],
});
anime({
    targets: ".ho-us .ho-det_grid .ho-it",
    opacity: [0, 1],
    // delay: 5000,
    delay: anime.stagger(500, {
        start: 4000,
    }),
    endDelay: 1500,
    easing: "easeInOutExpo",
    translateY: [100, 0],
});

anime({
    targets: ".ho-us .ho-det .prop",
    opacity: [0, 1],
    delay: 5000,
    // delay: anime.stagger(500, {
    //     start: 4000
    // }),
    endDelay: 1000,
    easing: "easeOutBounce",
    translateX: [-100, 0],
});
anime({
    targets: ".house .hoo-u",
    opacity: [0, 1],
    // delay: 3500,
    delay: anime.stagger(1200, {
        start: 2000,
    }),
    endDelay: 1000,
    easing: "easeInOutQuad",
    translateX: [-500, 0],
});
anime({
    targets: ".hoo-u .hou-img",
    opacity: [0, 1],
    delay: 4000,
    // delay: anime.stagger(1000, {
    //     start: 2000
    // }),
    endDelay: 1000,
    easing: "easeOutInQuad",
    translateY: [-100, 0],
});
anime({
    targets: ".hoo-u .ho-det",
    opacity: [0, 1],
    delay: 4500,
    // delay: anime.stagger(1000, {
    //     start: 2000
    // }),
    endDelay: 1000,
    easing: "easeOutInQuad",
    translateY: [-100, 0],
});
anime({
    targets: ".hoo-u .ho-det_grid .ho-it",
    opacity: [0, 1],
    // delay: 4500,
    delay: anime.stagger(500, {
        start: 4000,
    }),
    endDelay: 1500,
    easing: "easeOutBounce",
    translateY: [-100, 0],
});

anime({
    targets: ".hoo-u .ho-det .prop",
    opacity: [0, 1],
    delay: 5000,
    // delay: anime.stagger(500, {
    //     start: 4000
    // }),
    endDelay: 1000,
    easing: "easeOutBounce",
    translateX: [100, 0],
});

anime({
    targets: ".hoo-u .ho-det .prop",
    opacity: [0, 1],
    delay: 5000,
    // delay: anime.stagger(500, {
    //     start: 4000
    // }),
    endDelay: 1000,
    easing: "easeOutBounce",
    translateX: [100, 0],
});

// anime-js animations end

//typed-js

var typed = new Typed('.auto-type', {
    strings: ['schedule an inspection today!', 'Don\'t miss out! '],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

var typed_1 = new Typed('.at-1', {
    strings: ['request a call', 'We are open 24/7'],
    typeSpeed: 180,
    backSpeed: 180,
    loop: true
})
var typed_2 = new Typed('.at-2', {
    strings: ['brief message from the director'],
    typeSpeed: 180,
    backSpeed: 180,
    loop: true,
    // color: 'red',
})
var typed_3 = new Typed('.tx-1', {
    strings: ['building your dream'],
    typeSpeed: 180,
    backSpeed: 180,
    loop: true,
    // color: 'red',
})