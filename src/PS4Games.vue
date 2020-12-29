<template>
    <html>
        <head>
            <meta charset="utf8">
            <title>Vue Slot Template</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        </head>
        <body>
            <div id="app" class="container">
                <div class="row">
                    <GameCard v-for="(game, index) in games" :key="game.id" v-bind:src="getImage(index)" v-bind:alt="game.alt">
                        <template slot="title">{{game.title}}</template>
                        <template slot="button">View</template>
                        {{game.description}}
                    </GameCard>
                </div>
            </div>
        </body>
    </html>
</template>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

<script>
import GameCard from "./components/GameCard"

export default {
    name: "PS4Games",
    components: {
        GameCard
    },
    data: function(){
        return {
            games:[
                {
                    id: 1,
                    img: `gtav.jpg`,
                    alt: "GTA V",
                    title: "Grand Theft Auto V",
                    description: `Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games.
                    It is the first main entry in the Grand Theft Auto series since 2008's Grand Theft Auto IV.`
                },
                {
                    id: 2,
                    img: "rdr2.jpg",
                    alt: "RDR2",
                    title: "Red dead redemption 2",
                    description: `Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games.
                    The game is the third entry in the Red Dead series and is a prequel to the 2010 game Red Dead Redemption.`
                },
                {
                    id: 3,
                    img: "p5r.jpg",
                    alt: "P5",
                    title: "Persona 5 Royal",
                    description: `Persona®5 Royal presents a unique visual style and award nominated composer Shoji Meguro returns with an all-new soundtrack.
                    Explore Tokyo, unlock new Personas, customize your own personal Thieves Den, discover a never-before-seen story arc, cutscenes, alternate endings, and more! Platform: PS4 Release: 3/30/2020.`
                },
                {
                    id: 4,
                    img: "tlour.jpg",
                    alt: "TLOU",
                    title: "The last of us Remastered",
                    description: `Winner of over 200 game of the year awards, The Last of Us has been remastered for the PlayStation®4.
                    Now featuring higher resolution character models, improved shadows and lighting, in addition to several other gameplay improvements.
                    Abandoned cities reclaimed by nature. A population decimated by a modern plague.`
                },
                {
                    id: 5,
                    img: `gow.jpg`,
                    alt: "GOW",
                    title: "God of War",
                    description: `His vengeance against the gods of Olympus far behind him, Kratos now lives as a man in the lands of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive…`
                },
                {
                    id: 6,
                    img: "tloup2.jpg",
                    alt: "TLOUII",
                    title: "The Last of Us Part II",
                    description: `Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant `
                },
                {
                    id: 7,
                    img: "dqxi.jpg",
                    alt: "DQXI",
                    title: "Dragon Quest XI S: Echoes of an Elusive Age - Definitive Edition",
                    description: `The Definitive Edition includes all the content from the original release of the acclaimed DRAGON QUEST XI, and adds extra character-specific scenarios, the choice of playing with the original soundtrack or a grand orchestral version of the `
                },
                {
                    id: 8,
                    img: "mgsv.jpg",
                    alt: "mgsv",
                    title: "Metal Gear Solid V: The Phantom Pain",
                    description: `Following the prologue METAL GEAR SOLID V: GROUND ZEROES, METAL GEAR SOLID V: THE PHANTOM PAIN concludes the METAL GEAR SOLID V experience by following the story of the protagonist of the series, Big Boss (a.k.a. Snake). The `
                },
                {
                    id: 9,
                    img: `uncharted4.jpg`,
                    alt: "Uncharted4",
                    title: "Uncharted 4: A Thief's End",
                    description: `Set 3 years after the events of Uncharted 3, Nathan Drake has apparently left the world of fortune hunting behind. However, it doesn’t take long for adventure to come calling when Drake’s brother, Sam, re-emerges asking for his help to save his own life `
                },
                {
                    id: 10,
                    img: "journey.jpg",
                    alt: "Journey",
                    title: "Journey",
                    description: `The pioneers that brought you the award-winning PlayStation Network titles flOw & Flower are back with another title that challenges traditional gaming conventions. With Journey, thatgamecompany (TGC) continues its tradition of delivering simple gameplay `
                },
                {
                    id: 11,
                    img: "bloodborne.jpg",
                    alt: "Bloodborne",
                    title: "Bloodborne",
                    description: `Bloodborne is an action RPG in which you hunt for answers in the ancient city of Yharnam, now cursed with a strange endemic illness spreading through the streets like a disease. Peril, death and madness infest this dark world, and you're tasked with `
                },
                {
                    id: 12,
                    img: "tw3.jpg",
                    alt: "TW3",
                    title: "The Witcher 3: Wild Hunt",
                    description: `With the Empire attacking the Kingdoms of the North and the Wild Hunt, a cavalcade of ghastly riders, breathing down your neck, the only way to survive is to fight back. As Geralt of Rivia, a master swordsman and monster hunter, leave none of your enemies `
                },
                                {
                    id: 13,
                    img: `undertale.jpg`,
                    alt: "Undertale",
                    title: "Undertale",
                    description: `Welcome to UNDERTALE. In this RPG, you control a human who falls underground into the world of monsters. Now you must find your way out... or stay trapped forever. ((Healthy Dog's Warning: Game contains imagery that may be harmful to players with `
                },
                {
                    id: 14,
                    img: "sotc.jpg",
                    alt: "SOTC",
                    title: "Shadow of the Colossus",
                    description: ` Tales speak of an ancient realm where Colossi roam the majestic landscape. Bound to the land, these creatures hold a key to a mystical power of revival – a power you must obtain to bring a loved one back to life. `
                },
                {
                    id: 15,
                    img: "INSIDE.jpg",
                    alt: "INSIDE",
                    title: "INSIDE",
                    description: `Hunted and alone, a boy finds himself drawn into the center of a dark project. The second game from Limbo developer Playdead. `
                },
                {
                    id: 16,
                    img: "ds3.jpg",
                    alt: "DS3",
                    title: "Dark Souls III",
                    description: `Developed by Japanese developer FromSoftware, DARK SOULS III is the latest chapter in the DARK SOULS series with its trademark sword and sorcery combat and rewarding action RPG gameplay. Players travel across a wide variety of locations in an`
                },
                                                {
                    id: 17,
                    img: `hzd.jpg`,
                    alt: "HZD",
                    title: "Horizon Zero Dawn",
                    description: `Horizon Zero Dawn is a PS4-exclusive action role playing game developed by Guerrilla Games, creators of the Killzone franchise. As Horizon Zero Dawn’s main protagonist Aloy, a skilled hunter, explore a vibrant and lush world inhabited by mysterious `
                },
                {
                    id: 18,
                    img: "tndc.jpg",
                    alt: "TNDC",
                    title: "Uncharted: The Nathan Drake Collection",
                    description: `From the storytellers at Naughty Dog, comes the epic that altered adventure storytelling, rebuilt by Bluepoint Games with the power of the PS4 system. Follow the harrowing journey of Nathan Drake across the globe, from humble beginnings to `
                },
                {
                    id: 19,
                    img: "rottr.jpg",
                    alt: "ROTTR",
                    title: "Rise of the Tomb Raider: 20 Year Celebration",
                    description: `Lara Croft embarks on her first Tomb Raiding expedition to the most treacherous and remote regions of Siberia. Rise of the Tomb Raider: 20 Year Celebration also includes the new “Blood Ties” single player content, VR support, new Co-op play for Endurance `
                },
                {
                    id: 20,
                    img: "ch.jpg",
                    alt: "CH",
                    title: "Cuphead",
                    description: `Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era, i.e. traditional hand drawn cel animation, watercolor `
                }
            ]
        }
    },
    methods:{
        getImage: function(index){
            //injuri ham mishe
            //return require(`./assets/img/` + this.games[index].img);
            return require(`@/assets/img/` + this.games[index].img);
        }
    }
}
</script>