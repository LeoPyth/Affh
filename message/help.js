const chalk = require('chalk')
const fs = require('fs')

global.anonmenu = (prefix) => {
return `「 *Anonymous Menu* 」
あ ${prefix}anonymous
あ ${prefix}start
あ ${prefix}next
あ ${prefix}keluar
あ ${prefix}menfess
──────────────•
`}
global.ownermenu = (prefix) => {
return `「 *Owner Menu* 」
あ ${prefix}react [emoji]
あ ${prefix}chat [option]
あ ${prefix}join [link]
あ ${prefix}leave
あ ${prefix}block @user
あ ${prefix}unblock @user
あ ${prefix}bcgroup [text]
あ ${prefix}culik [text]
あ ${prefix}bcall [text]
あ ${prefix}setppbot [image]
あ ${prefix}setexif
あ ${prefix}setmenu [option]
あ ${prefix}bitly
あ ${prefix}cuttly
あ ${prefix}tinyurl
あ ${prefix}ban [ 628*** ]
あ ${prefix}addprem
──────────────•
`}
global.downloadmenu = (prefix) => {
return `「 *Downloader Menu* 」
あ ${prefix}tiktok [url]
あ ${prefix}tiktokaudio [url]
あ ${prefix}wikimedia [url]
あ ${prefix}pinterest
あ ${prefix}play [judul]
あ ${prefix}ytmp3 [url]
あ ${prefix}ytmp4 [url]
あ ${prefix}mediafire [url]
あ ${prefix}gitclone [url]
あ ${prefix}umma [url]
あ ${prefix}twitter
あ ${prefix}facebook
あ ${prefix}instagramdl
──────────────•
`}
global.grupmenu = (prefix) => {
return `「 *Group Menu* 」
あ ${prefix}linkgroup
あ ${prefix}ephemeral [option]
あ ${prefix}setppgc [image]
あ ${prefix}setname [text]
あ ${prefix}setdesc [text]
あ ${prefix}group [option]
あ ${prefix}editinfo [option]
あ ${prefix}add @user
あ ${prefix}antiwame [on/off]
あ ${prefix}kick @user
あ ${prefix}hidetag [text]
あ ${prefix}tagall [text]
あ ${prefix}antilink [on/off]
あ ${prefix}mute [on/off]
あ ${prefix}promote @user
あ ${prefix}demote @user
あ ${prefix}vote [text]
あ ${prefix}devote
あ ${prefix}upvote
あ ${prefix}cekvote
あ ${prefix}hapusvote
──────────────•
`}
global.islami = (prefix) => {
return `「 *Islamic Menu* 」
あ ${prefix}ceramah
あ ${prefix}tafsirsurah
あ ${prefix}jadwalsholat
あ ${prefix}asmaulhusna
あ ${prefix}niatsholat 
あ ${prefix}kisahnabi
──────────────•
`}
global.cek = (prefix) => {
return `「 *CEK MENU* 」
あ${prefix}goblokcek 
あ ${prefix}jelekcek 
あ ${prefix}rate
あ ${prefix}haram
あ ${prefix}gaycek
あ ${prefix}lesbicek
あ ${prefix}gantengcek 
あ ${prefix}cantikcek
あ ${prefix}begocek 
あ ${prefix}suhucek
あ ${prefix}pintercek
あ ${prefix}jagocek
あ ${prefix}nolepcek
あ ${prefix}babicek
あ ${prefix}bebancek
あ ${prefix}baikcek
あ ${prefix}jahatcek
あ ${prefix}anjingcek
あ ${prefix}haramcek
あ ${prefix}pakboycek
あ ${prefix}pakgirlcek
あ ${prefix}sangecek 
あ ${prefix}bapercek
あ ${prefix}fakboycek
あ ${prefix}alimcek
あ ${prefix}suhucek
あ ${prefix}fakgirlcek
あ ${prefix}kerencek
あ ${prefix}wibucek
あ ${prefix}pasarkascek
──────────────•
`}
global.info = (prefix) => {
return `「 *Information Menu* 」
あ ${prefix}gempa
あ ${prefix}jadwaltv
あ ${prefix}gempanow
あ ${prefix}bioskopnow
あ ${prefix}latintoaksara
あ ${prefix}aksaratolatin
あ ${prefix}cuaca
──────────────•
`}
global.main = (prefix) => {
return `「 *Main Menu* 」
あ ${prefix}cuaca
あ ${prefix}nulis
あ ${prefix}ping
あ ${prefix}owner
あ ${prefix}menu / ${prefix}help / ${prefix}?
あ ${prefix}delete
あ ${prefix}infochat
あ ${prefix}quoted
あ ${prefix}listpc
あ ${prefix}listgc
あ ${prefix}listonline
あ ${prefix}tinyurl
あ ${prefix}menfess
あ ${prefix}speedtest
あ ${prefix}request
あ ${prefix}tts
あ ${prefix}styletext
あ ${prefix}jadibot [ premium ]
──────────────•
`}
global.imbon = (prefix) => {
return `「 *Primbon Menu* 」
あ ${prefix}nomorhoki
あ ${prefix}artimimpi
あ ${prefix}artinama
あ ${prefix}ramaljodoh
あ ${prefix}ramaljodohbali
あ ${prefix}suamiistri
あ ${prefix}ramalcinta
あ ${prefix}cocoknama
あ ${prefix}pasangan
あ ${prefix}jadiannikah
あ ${prefix}sifatusaha
あ ${prefix}rezeki
あ ${prefix}pekerjaan
あ ${prefix}nasib
あ ${prefix}penyakit
あ ${prefix}tarot
あ ${prefix}fengshui
あ ${prefix}haribaik
あ ${prefix}harisangar
あ ${prefix}harisial
あ ${prefix}nagahari
あ ${prefix}arahrezeki
あ ${prefix}peruntungan
あ ${prefix}weton
あ ${prefix}karakter
あ ${prefix}keberuntungan
あ ${prefix}memancing
あ ${prefix}masasubur
あ ${prefix}zodiak
──────────────•
`}
global.bokep = (prefix) => {
return `「 *N S F W - M E N U* 」
あ ${prefix}ahegao
あ ${prefix}ass
あ ${prefix}bdsm
あ ${prefix}blowjob
あ ${prefix}cuckold
あ ${prefix}cum
あ ${prefix}ero
あ ${prefix}femdom
あ ${prefix}foot
あ ${prefix}gangbang
あ ${prefix}glasses
あ ${prefix}hentai
あ ${prefix}jahy
あ ${prefix}manga
あ ${prefix}masturbation
あ ${prefix}netorare
あ ${prefix}nsfwloli
あ ${prefix}orgy
あ ${prefix}panties
あ ${prefix}pussy
あ ${prefix}tentacles
あ ${prefix}thighs
あ ${prefix}yuri
あ ${prefix}zettai
──────────────•
`}
global.apkmenu = (prefix) => {
return `「 *A P K - M E N U* 」
» ${prefix}apkfap
» ${prefix}apkgoogle
» ${prefix}apkmody
» ${prefix}dlandroid
» ${prefix}happymod
» ${prefix}hostapk
» ${prefix}idlemod
» ${prefix}luckymodapk
» ${prefix}moddroid
» ${prefix}revdl
» ${prefix}toraccino
» ${prefix}uapkpro
──────────────•
`}
global.news = (prefix) => {
return `「 *NEWS MENU* 」
あ ${prefix}news-merdeka 
あ ${prefix}kontan-news 
あ ${prefix}cnbc-news 
あ ${prefix}tribun-news 
あ ${prefix}indozone-news 
あ ${prefix}kompas-news 
あ ${prefix}detik-news 
あ ${prefix}daily-news 
あ ${prefix}inews-news 
あ ${prefix}okezone-news 
あ ${prefix}sindo-news 
あ ${prefix}tempo-news 
あ ${prefix}antara-news 
あ ${prefix}cnn-news 
あ ${prefix}fajar-news 
──────────────•
`}
global.cerpen = (prefix) => {
return `「 *RANDOM CERPEN* 」
あ ${prefix}cerpen
あ ${prefix}cerpen-sejarah
あ ${prefix}cerpen-sedih
あ ${prefix}cerpen-sastra
あ ${prefix}cerpen-romantis
あ ${prefix}cerpen-rohani
あ ${prefix}cerpen-rindu
あ ${prefix}cerpen-remaja
あ ${prefix}cerpen-ramadhan
あ ${prefix}cerpen-petualangan
あ ${prefix}cerpen-persahabatan
あ ${prefix}cerpen-perpisahan
あ ${prefix}cerpen-perjuangan
あ ${prefix}cerpen-penyesalan
あ ${prefix}cerpen-pengorbanan
あ ${prefix}cerpen-pengalaman
あ ${prefix}cerpen-pendidikan
あ ${prefix}cerpen-penantian
あ ${prefix}cerpen-patahhati
あ ${prefix}cerpen-olahraga
あ ${prefix}cerpen-nasionalisme
あ ${prefix}cerpen-nasihat
あ ${prefix}cerpen-motivasi
あ ${prefix}cerpen-misteri
あ ${prefix}cerpen-mengharukan
あ ${prefix}cerpen-malaysia
あ ${prefix}cerpen-liburan
あ ${prefix}cerpen-kristen
あ ${prefix}cerpen-korea
あ ${prefix}cerpen-kisahnyata
あ ${prefix}cerpen-keluarga
あ ${prefix}cerpen-kehidupan
あ ${prefix}cerpen-jepang
あ ${prefix}cerpen-inspiratif
あ ${prefix}cerpen-gokil
あ ${prefix}cerpen-galau
あ ${prefix}cerpen-cintasejati
あ ${prefix}cerpen-cintasegitiga
あ ${prefix}cerpen-cintasedih
あ ${prefix}cerpen-cintaromantis
あ ${prefix}cerpen-cintapertama
あ ${prefix}cerpen-cintaislami
あ ${prefix}cerpen-cinta
あ ${prefix}cerpen-budaya
あ ${prefix}cerpen-bahasasunda
あ ${prefix}cerpen-bahasajawa
あ ${prefix}cerpen-bahasainggris
あ ${prefix}cerpen-bahasadaerah
あ ${prefix}cerpen-anak
──────────────•
`}
global.photo = (prefix) => {
return `「 *Photo Oxy* 」
あ ${prefix}shadow 
あ ${prefix}write
あ ${prefix}narutobanner
あ ${prefix}smoke
あ ${prefix}burnpaper
あ ${prefix}romantic
あ ${prefix}coffecup
あ ${prefix}doublelove
あ ${prefix}undergrass
あ ${prefix}love
underwaterocean
あ ${prefix}smokyneon
あ ${prefix}starstext
あ ${prefix}rainboweffect
あ ${prefix}balloontext
あ ${prefix}embroiderytext
あ ${prefix}flamingtext
あ ${prefix}stonetext
あ ${prefix}writeart
あ ${prefix}summertext
あ ${prefix}metalliceffect
あ ${prefix}wolfmetaltext
あ ${prefix}nature3dtext
あ ${prefix}rosestext
あ ${prefix}naturetypography
あ ${prefix}shinetext
あ ${prefix}quotesunder
──────────────•
`}
global.stalk = (prefix) => {
return `「 *Stalk Menu* 」
あ ${prefix}githubstalk
あ ${prefix}npmstalk
あ ${prefix}ffstalk
あ ${prefix}mlstalk
──────────────•
`}
global.sound = (prefix) => {
return `「 *Sound Menu* 」
あ ${prefix}sound1
あ ${prefix}sound2
あ ${prefix}sound3
あ ${prefix}sound4
あ ${prefix}sound5
あ ${prefix}sound6
あ ${prefix}sound7
あ ${prefix}sound8
あ ${prefix}sound9
あ ${prefix}sound10
あ ${prefix}sound11
あ ${prefix}sound12
あ ${prefix}sound13
あ ${prefix}sound14
あ ${prefix}sound15
あ ${prefix}sound16
あ ${prefix}sound17
あ ${prefix}sound18
あ ${prefix}sound19
あ ${prefix}sound20
あ ${prefix}sound21
あ ${prefix}sound22
あ ${prefix}sound23
あ ${prefix}sound24
あ ${prefix}sound25
あ ${prefix}sound26
あ ${prefix}sound27
あ ${prefix}sound28
あ ${prefix}sound29
あ ${prefix}sound30
あ ${prefix}sound31
あ ${prefix}sound32
あ ${prefix}sound33
あ ${prefix}sound34
あ ${prefix}sound35
あ ${prefix}sound36
あ ${prefix}sound37
あ ${prefix}sound38
あ ${prefix}sound39
あ ${prefix}sound40
あ ${prefix}sound41
あ ${prefix}sound42
あ ${prefix}sound43
あ ${prefix}sound44
あ ${prefix}sound45
あ ${prefix}sound46
あ ${prefix}sound47
あ ${prefix}sound48
あ ${prefix}sound49
あ ${prefix}sound50
あ ${prefix}sound51
あ ${prefix}sound52
あ ${prefix}sound53
あ ${prefix}sound54
あ ${prefix}sound55
あ ${prefix}sound56
あ ${prefix}sound57
あ ${prefix}sound58
あ ${prefix}sound59
あ ${prefix}sound60
──────────────•
`}
global.cari = (prefix) => {
return `「 *Search Menu* 」
あ ${prefix}play [query]
あ ${prefix}yts [query]
あ ${prefix}gimage [query]
あ ${prefix}pinterest [query]
あ ${prefix}wallpaper [query]
あ ${prefix}wikimedia [query]
あ ${prefix}ringtone [query]
あ ${prefix}ssweb [ link ]
あ ${prefix}gcsearch [query]
あ ${prefix}cariresep [Boba]
あ ${prefix}bacaresep
あ ${prefix}lirik [ judul ]
──────────────•
`}
global.random = (prefix) => {
return `「 *Random Menu* 」
あ ${prefix}coffe
あ ${prefix}quotesanime
あ ${prefix}motivasi
あ ${prefix}quotes
あ ${prefix}quotesjawa
あ ${prefix}katagalau
あ ${prefix}dilan
あ ${prefix}katabucin
あ ${prefix}bucin
あ ${prefix}katailham
あ ${prefix}renungan
あ ${prefix}gombalan
あ ${prefix}couple
あ ${prefix}anime
あ ${prefix}waifu
──────────────•
`}
global.textpro = (prefix) => {
return `「 *Text Pro Menu* 」
あ ${prefix}nulis
あ ${prefix}blackpink
あ ${prefix}glitch
あ ${prefix}berry
あ ${prefix}pencil
あ ${prefix}3dboxtext
あ ${prefix}neon
あ ${prefix}logobear
あ ${prefix}thunder
あ ${prefix}3dchristmas
あ ${prefix}strawberry
あ ${prefix}magma
あ ${prefix}pornhub
あ ${prefix}candy
あ ${prefix}christmas
あ ${prefix}sparklechristmas
あ ${prefix}holographic
あ ${prefix}deepsea
あ ${prefix}scifi
あ ${prefix}rainbow
あ ${prefix}waterpipe
あ ${prefix}spooky
あ ${prefix}karbon
あ ${prefix}colorneon
あ ${prefix}circuit
あ ${prefix}discovery
あ ${prefix}metalic
あ ${prefix}fiction
あ ${prefix}demon
あ ${prefix}3dbox
あ ${prefix}transformer 
あ ${prefix}3dstone 
あ ${prefix}greenneon 
あ ${prefix}neonlight 
あ ${prefix}harrypotter 
あ ${prefix}brokenglass 
あ ${prefix}papercut 
あ ${prefix}lion2 
あ ${prefix}watercolor
あ ${prefix}multicolor 
あ ${prefix}neondevil
あ ${prefix}underwater
あ ${prefix}graffitibike
あ ${prefix}3davengers
あ ${prefix}snow
あ ${prefix}cloud
あ ${prefix}honey
あ ${prefix}ice
あ ${prefix}fruitjuice
あ ${prefix}biscuit
あ ${prefix}wood
あ ${prefix}whitebear 
あ ${prefix}chocolate 
あ ${prefix}matrix
あ ${prefix}blood
あ ${prefix}dropwater
あ ${prefix}toxic
あ ${prefix}lava
あ ${prefix}rock
あ ${prefix}bloodglas
あ ${prefix}hallowen
あ ${prefix}darkgold
あ ${prefix}joker 
あ ${prefix}wicker
あ ${prefix}firework
あ ${prefix}skeleton
あ ${prefix}sand
あ ${prefix}glue
あ ${prefix}1917
あ ${prefix}leaves
あ ${prefix}glitch2 
あ ${prefix}harrypot
あ ${prefix}graffiti
あ ${prefix}glitch3
あ ${prefix}3dspace
あ ${prefix}lion
あ ${prefix}wolf 
あ ${prefix}retro
あ ${prefix}8bit 
──────────────•
`}
global.ephoto = (prefix) => {
return `「 *Ephoto Menu* 」
あ ${prefix}glitchtext 
あ ${prefix}writetext 
あ ${prefix}advancedglow 
あ ${prefix}typographytext 
あ ${prefix}pixelglitch 
あ ${prefix}neonglitch 
あ ${prefix}flagtext 
あ ${prefix}flag3dtext 
あ ${prefix}deletingtext 
あ ${prefix}blackpinkstyle 
あ ${prefix}glowingtext 
あ ${prefix}underwatertext 
あ ${prefix}logomaker 
あ ${prefix}cartoonstyle 
あ ${prefix}papercutstyle 
あ ${prefix}watercolortext 
あ ${prefix}effectclouds 
あ ${prefix}blackpinklogo 
あ ${prefix}gradienttext 
あ ${prefix}summerbeach 
あ ${prefix}luxurygold 
あ ${prefix}multicoloredneon 
あ ${prefix}sandsummer 
あ ${prefix}galaxywallpaper 
あ ${prefix}1917style 
あ ${prefix}makingneon 
あ ${prefix}royaltext 
あ ${prefix}freecreate 
あ ${prefix}galaxystyle 
あ ${prefix}lighteffects 
──────────────•
`}
global.fun = (prefix) => {
return `「 *Fun Menu* 」
あ ${prefix}simih
あ ${prefix}halah
あ ${prefix}hilih
あ ${prefix}huluh
あ ${prefix}heleh
あ ${prefix}holoh
あ ${prefix}jadian
あ {prefix}tts
あ ${prefix}jodohku
あ ${prefix}delttt
──────────────•
`}
global.copy = (prefix) => {
return `「 *Convert Menu* 」
あ ${prefix}attp
あ ${prefix}ttp
あ ${prefix}toimage
あ ${prefix}removebg
あ ${prefix}sticker
あ ${prefix}emoji
あ ${prefix}tovideo
あ ${prefix}togif
あ ${prefix}tourl
あ ${prefix}tovn
あ ${prefix}tomp3
あ ${prefix}toaudio
あ ${prefix}ebinary
あ ${prefix}dbinary
あ ${prefix}styletext
あ ${prefix}smeme
──────────────•
`}
global.image = (prefix) => {
return `「 *Random Image* 」
あ ${prefix}darkjokes
あ ${prefix}meme
あ ${prefix}aestatic
あ ${prefix}mountain
あ ${prefix}art
あ ${prefix}boneka
あ ${prefix}cyber
あ ${prefix}doraemon
あ ${prefix}exo
あ ${prefix}wallpapergame
あ ${prefix}islamic
あ ${prefix}kartun
あ ${prefix}katakata
あ ${prefix}kpop
あ ${prefix}mobil
あ ${prefix}motor
あ ${prefix}programming
あ ${prefix}pubg
あ ${prefix}pokemon
あ ${prefix}quotesyt
あ ${prefix}stanic
あ ${prefix}tatasurya
あ ${prefix}technology
あ ${prefix}wallhp
あ ${prefix}wallml
あ ${prefix}wallnime
あ ${prefix}yulibocil
──────────────•
`}
global.anime = (prefix) => {
return `「 *Random Anime* 」
あ ${prefix}loli
あ ${prefix}husbu
あ ${prefix}boruto
あ ${prefix}asuna
あ ${prefix}luffy
あ ${prefix}anya
あ ${prefix}akiyama
あ ${prefix}ana
あ ${prefix}ayuzawa
あ ${prefix}chiho
あ ${prefix}chitoge
あ ${prefix}cosplay
あ ${prefix}deidara
あ ${prefix}eba
あ ${prefix}emilia
あ ${prefix}erza
あ ${prefix}isuzu
あ ${prefix}itachi
あ ${prefix}itori
あ ${prefix}kaga
あ ${prefix}kagura
あ ${prefix}kakasih
あ ${prefix}kaori
あ ${prefix}kaneki
あ ${prefix}kotori
あ ${prefix}kurumi
あ ${prefix}madara
あ ${prefix}mikasa
あ ${prefix}mikey
あ ${prefix}miku
あ ${prefix}milf
あ ${prefix}minato
あ ${prefix}nezuko
あ ${prefix}sasuke
あ ${prefix}sakura
あ ${prefix}shina
あ ${prefix}shinka
あ ${prefix}shinomiya
あ ${prefix}shizuka
あ ${prefix}shota
あ ${prefix}toukachan
あ ${prefix}tsunade
あ ${prefix}yotsuba
あ ${prefix}yumeko
──────────────•
`}
global.asupan = (prefix) => {
return `「 *Asupan Menu* 」
あ ${prefix}asupan
あ ${prefix}asupanloli
あ ${prefix}asupankayes
あ ${prefix}asupanghea
あ ${prefix}asupanbocil
あ ${prefix}asupanukhty
あ ${prefix}asupansantuy
あ ${prefix}asupanrika
あ ${prefix}asupannotnot
──────────────•
`}
global.short = (prefix) => {
return `「 *Short Link* 」
あ ${prefix}bitly
あ ${prefix}tinyurl
あ ${prefix}cuttly
──────────────•
`}
global.data = (prefix) => {
return `「 *Database Menu* 」
あ ${prefix}setcmd
あ ${prefix}listcmd
あ ${prefix}delcmd
あ ${prefix}lockcmd
あ ${prefix}addmsg
あ ${prefix}listmsg
あ ${prefix}getmsg
あ ${prefix}delmsg
──────────────•
`}
global.voice = (prefix) => {
return `「 *Voice Changer* 」
あ ${prefix}bass
あ ${prefix}blown
あ ${prefix}deep
あ ${prefix}earrape
あ ${prefix}fast
あ ${prefix}fat
あ ${prefix}nightcore
あ ${prefix}reverse
あ ${prefix}robot
あ ${prefix}slow
あ ${prefix}tupai
──────────────•
`}