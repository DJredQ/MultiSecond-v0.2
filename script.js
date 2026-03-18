let seconds_played = 0
let tile13_seconds_played = 0

let tilecomp = [true ,false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let achievementsdone = 0
let achievementmult = new Decimal(1)
let bytemult_achievementmult = new Decimal(1)

let points_add_achievementmult = new Decimal(1)
let points_add_add_achievementmult = new Decimal(1)
let points_add_add_add_achievementmult = new Decimal(1)
let upg3_base_achievementmult = new Decimal(1)

let points = new Decimal("1")

let points_add = new Decimal("0")
let points_add_add = new Decimal("1")
let points_add_add_add = new Decimal("1.2")
let upg3_base = new Decimal("0.1")

let points_addr = new Decimal("1")
let points_add_addr = new Decimal("1")
let points_add_add_addr = new Decimal("1.2")
let upg3_baser = new Decimal("0.1")
let bytemultr = new Decimal("1")

let bytemult = new Decimal("1")
let bytepower = new Decimal("1.15")

let buyed1 = 0
let buyed2 = 0
let buyed3 = 0
let buyed4 = 0
let buyed5 = 0
let buyedbyte = 0
let buyedbit = 0

let buyed1r = 1
let buyed1mult = 1

let buyed1_enhancementmult = 0

let cost1 = new Decimal(1)
let cost2 = new Decimal(2500)
let cost3 = new Decimal(360000)
let cost4 = new Decimal(10000000000)
let cost5 = new Decimal("1e2000");
let costbyte = new Decimal(10)

let cost1mult = new Decimal(1)
let cost2mult = new Decimal(1)
let cost3mult = new Decimal(1)
let cost4mult = new Decimal(1)
let cost5mult = new Decimal(1)
let costbytemult = new Decimal(1)

let cost4_achievementmult = new Decimal(1)

let cost1_enhancementmult = new Decimal(1)
let cost2_enhancementmult = new Decimal(1)
let cost3_enhancementmult = new Decimal(1)
let cost4_enhancementmult = new Decimal(1)
let cost5_enhancementmult = new Decimal(1)
let costbyte_enhancementmult = new Decimal(1)

let points_add_add_add_enhancementpower = new Decimal("1")

let scl1 = new Decimal(1.15)
let scl2 = new Decimal(2.2)
let scl3 = new Decimal(4.6)
let scl4 = new Decimal(9.6)
let scl5 = new Decimal("1e200")
let sclbyte = new Decimal(3)

let costr1 = cost1.times(cost1mult);
let costr2 = cost2.times(cost2mult);
let costr3 = cost3.times(cost3mult);
let costr4 = cost4.times(cost4mult).times(cost4_achievementmult);
let costr5 = cost5.times(cost5mult);
let costrbyte = costbyte.times(costbytemult);

let costbit = 35
let bitscale = 35

let enccomp = [true ,false, false, false, false, false, false, false, false, false, false]

let points_add_enhancementmult = new Decimal(1)
let points_add_enhancementmult5 = new Decimal(1)
let points_add_add_enhancementmult = new Decimal(1)
let points_add_add_add_enhancementmult = new Decimal(1)
let upg3_base_enhancementmult = new Decimal(1)

const mainscreenbutton = document.getElementById("mainscreenbutton")
const achievementbutton = document.getElementById("achievementbutton")
const enhancementbutton = document.getElementById("enhancementbutton")
const settingsbutton = document.getElementById("settingsbutton")

const achievementnotifier = document.getElementById("achievementnotifier")

const mainscreen = document.getElementById("mainscreen")
const achievements = document.getElementById("achievements")
const enhancements = document.getElementById("enhancements")
const settings = document.getElementById("settings")

const enhancementtile = document.querySelectorAll("#enhancements button")

const enhancement1 = document.getElementById("enhancement1")
const enhancement2 = document.getElementById("enhancement2")
const enhancement3 = document.getElementById("enhancement3")
const enhancement4 = document.getElementById("enhancement4")
const enhancement5 = document.getElementById("enhancement5")
const enhancement6 = document.getElementById("enhancement6")
const enhancement7 = document.getElementById("enhancement7")
const enhancement8 = document.getElementById("enhancement8")
const enhancement9 = document.getElementById("enhancement9")
const enhancement10 = document.getElementById("enhancement10")

const counter = document.getElementById("display")
const upgrade1 = document.getElementById("upgrade1")
const upgrade2 = document.getElementById("upgrade2")
const upgrade3 = document.getElementById("upgrade3")
const upgrade4 = document.getElementById("upgrade4")
const upgrade5 = document.getElementById("upgrade5")
const byte = document.getElementById('byteupgrade')
const bytedisplay = document.getElementById('bytedisplay')
const polybit = document.getElementById('polybit')

const tooltip1 = document.getElementById('tooltip1')
const tooltip2 = document.getElementById('tooltip2')
const tooltip3 = document.getElementById('tooltip3')
const tooltip4 = document.getElementById('tooltip4')
const tooltip5 = document.getElementById('tooltip5')
const tooltipbyte = document.getElementById('tooltipbyte')
const tooltipbit = document.getElementById('tooltipbit')

const achievementdisplay = document.getElementById('achievementdisplay')

const tile1 = document.getElementById('tile1')
const tile2 = document.getElementById('tile2')
const tile3 = document.getElementById('tile3')
const tile4 = document.getElementById('tile4')
const tile5 = document.getElementById('tile5')
const tile6 = document.getElementById('tile6')
const tile7 = document.getElementById('tile7')
const tile8 = document.getElementById('tile8')
const tile9 = document.getElementById('tile9')
const tile10 = document.getElementById('tile10')
const tile11 = document.getElementById('tile11')
const tile12 = document.getElementById('tile12')
const tile13 = document.getElementById('tile13')
const tile14 = document.getElementById('tile14')
const tile15 = document.getElementById('tile15')
const tile16 = document.getElementById('tile16')

const tile1info = document.getElementById('tile1info')
const tile2info = document.getElementById('tile2info')
const tile3info = document.getElementById('tile3info')
const tile4info = document.getElementById('tile4info')
const tile5info = document.getElementById('tile5info')
const tile6info = document.getElementById('tile6info')
const tile7info = document.getElementById('tile7info')
const tile8info = document.getElementById('tile8info')
const tile9info = document.getElementById('tile9info')
const tile10info = document.getElementById('tile10info')
const tile11info = document.getElementById('tile11info')
const tile12info = document.getElementById('tile12info')
const tile13info = document.getElementById('tile13info')
const tile14info = document.getElementById('tile14info')
const tile15info = document.getElementById('tile15info')
const tile16info = document.getElementById('tile16info')

const hardreset = document.getElementById('hardreset')

document.addEventListener('DOMContentLoaded', (event) => {
    seconds_played = Number(localStorage.getItem("seconds_played")) || 0;
    tile13_seconds_played = Number(localStorage.getItem("tile13_seconds_played")) || 0;

    tilecomp = JSON.parse(localStorage.getItem("tilecomp")) || [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    achievementsdone = Number(localStorage.getItem("achievementsdone")) || 0;
    achievementmult = new Decimal(localStorage.getItem("achievementmult") || "1");
    bytemult_achievementmult = new Decimal(localStorage.getItem("bytemult_achievementmult") || "1");

    points_add_achievementmult = new Decimal(localStorage.getItem("points_add_achievementmult") || "1");
    points_add_add_achievementmult = new Decimal(localStorage.getItem("points_add_add_achievementmult") || "1");
    points_add_add_add_achievementmult = new Decimal(localStorage.getItem("points_add_add_add_achievementmult") || "1");
    upg3_base_achievementmult = new Decimal(localStorage.getItem("upg3_base_achievementmult") || "1");

    points = new Decimal(localStorage.getItem("points") || "1");

    points_add = new Decimal(localStorage.getItem("points_add") || "0");
    points_add_add = new Decimal(localStorage.getItem("points_add_add") || "1");
    points_add_add_add = new Decimal(localStorage.getItem("points_add_add_add") || "1.2");
    upg3_base = new Decimal(localStorage.getItem("upg3_base") || "0.1");

    points_addr = new Decimal(localStorage.getItem("points_addr") || "1");
    points_add_addr = new Decimal(localStorage.getItem("points_add_addr") || "1");
    points_add_add_addr = new Decimal(localStorage.getItem("points_add_add_addr") || "1.2");
    upg3_baser = new Decimal(localStorage.getItem("upg3_baser") || "0.1");
    bytemultr = new Decimal(localStorage.getItem("bytemultr") || "1");

    bytemult = new Decimal(localStorage.getItem("bytemult") || "1");
    bytepower = new Decimal(localStorage.getItem("bytepower") || "1.15");

    buyed1 = Number(localStorage.getItem("buyed1")) || 0;
    buyed2 = Number(localStorage.getItem("buyed2")) || 0;
    buyed3 = Number(localStorage.getItem("buyed3")) || 0;
    buyed4 = Number(localStorage.getItem("buyed4")) || 0;
    buyed5 = Number(localStorage.getItem("buyed5")) || 0;
    buyedbyte = Number(localStorage.getItem("buyedbyte")) || 0;
    buyedbit = Number(localStorage.getItem("buyedbit")) || 0;

    buyed1r = Number(localStorage.getItem("buyed1r")) || 1;
    buyed1mult = Number(localStorage.getItem("buyed1mult")) || 1;

    buyed1_enhancementmult = Number(localStorage.getItem("buyed1_enhancementmult")) || 0;

    cost1 = new Decimal(localStorage.getItem("cost1") || "1");
    cost2 = new Decimal(localStorage.getItem("cost2") || "2500");
    cost3 = new Decimal(localStorage.getItem("cost3") || "360000");
    cost4 = new Decimal(localStorage.getItem("cost4") || "10000000000");
    cost5 = new Decimal(localStorage.getItem("cost5") || "1e2000");
    costbyte = new Decimal(localStorage.getItem("costbyte") || "10");

    cost1mult = new Decimal(localStorage.getItem("cost1mult") || "1");
    cost2mult = new Decimal(localStorage.getItem("cost2mult") || "1");
    cost3mult = new Decimal(localStorage.getItem("cost3mult") || "1");
    cost4mult = new Decimal(localStorage.getItem("cost4mult") || "1");
    cost5mult = new Decimal(localStorage.getItem("cost5mult") || "1");
    costbytemult = new Decimal(localStorage.getItem("costbytemult") || "1");

    cost4_achievementmult = new Decimal(localStorage.getItem("cost4_achievementmult") || "1");

    cost1_enhancementmult = new Decimal(localStorage.getItem("cost1_enhancementmult") || "1");
    cost2_enhancementmult = new Decimal(localStorage.getItem("cost2_enhancementmult") || "1");
    cost3_enhancementmult = new Decimal(localStorage.getItem("cost3_enhancementmult") || "1");
    cost4_enhancementmult = new Decimal(localStorage.getItem("cost4_enhancementmult") || "1");
    cost5_enhancementmult = new Decimal(localStorage.getItem("cost5_enhancementmult") || "1");
    costbyte_enhancementmult = new Decimal(localStorage.getItem("costbyte_enhancementmult") || "1");

    points_add_add_add_enhancementpower = new Decimal(localStorage.getItem("points_add_add_add_enhancementpower") || "1");

    scl1 = new Decimal(localStorage.getItem("scl1") || "1.15");
    scl2 = new Decimal(localStorage.getItem("scl2") || "2.2");
    scl3 = new Decimal(localStorage.getItem("scl3") || "4.6");
    scl4 = new Decimal(localStorage.getItem("scl4") || "9.6");
    scl5 = new Decimal(localStorage.getItem("scl5") || "1e400");
    sclbyte = new Decimal(localStorage.getItem("sclbyte") || "3");

    costr1 = cost1.times(cost1mult);
    costr2 = cost2.times(cost2mult);
    costr3 = cost3.times(cost3mult);
    costr4 = cost4.times(cost4mult).times(cost4_achievementmult);
    costr5 = cost5.times(cost5mult);
    costrbyte = costbyte.times(costbytemult);

    costbit = Number(localStorage.getItem("costbit")) || 35;
    bitscale = Number(localStorage.getItem("bitscale")) || 35;

    enccomp = JSON.parse(localStorage.getItem("enccomp")) || [true, false, false, false, false, false, false, false, false, false, false];

    points_add_enhancementmult = new Decimal(localStorage.getItem("points_add_enhancementmult") || "1");
    points_add_enhancementmult5 = new Decimal(localStorage.getItem("points_add_enhancementmult5") || "1");
    points_add_add_enhancementmult = new Decimal(localStorage.getItem("points_add_add_enhancementmult") || "1");
    points_add_add_add_enhancementmult = new Decimal(localStorage.getItem("points_add_add_add_enhancementmult") || "1");
    upg3_base_enhancementmult = new Decimal(localStorage.getItem("upg3_base_enhancementmult") || "1");

    autosave()
})

function autosave() {
    localStorage.setItem("seconds_played", seconds_played);
    localStorage.setItem("tile13_seconds_played", tile13_seconds_played);

    localStorage.setItem("tilecomp", JSON.stringify(tilecomp));
    localStorage.setItem("achievementsdone", achievementsdone);
    localStorage.setItem("achievementmult", achievementmult.toString());
    localStorage.setItem("bytemult_achievementmult", bytemult_achievementmult.toString());

    localStorage.setItem("points_add_achievementmult", points_add_achievementmult.toString());
    localStorage.setItem("points_add_add_achievementmult", points_add_add_achievementmult.toString());
    localStorage.setItem("points_add_add_add_achievementmult", points_add_add_add_achievementmult.toString());
    localStorage.setItem("upg3_base_achievementmult", upg3_base_achievementmult.toString());

    localStorage.setItem("points", points.toString());

    localStorage.setItem("points_add", points_add.toString());
    localStorage.setItem("points_add_add", points_add_add.toString());
    localStorage.setItem("points_add_add_add", points_add_add_add.toString());
    localStorage.setItem("upg3_base", upg3_base.toString());

    localStorage.setItem("points_addr", points_addr.toString());
    localStorage.setItem("points_add_addr", points_add_addr.toString());
    localStorage.setItem("points_add_add_addr", points_add_add_addr.toString());
    localStorage.setItem("upg3_baser", upg3_baser.toString());
    localStorage.setItem("bytemultr", bytemultr.toString());

    localStorage.setItem("bytemult", bytemult.toString());
    localStorage.setItem("bytepower", bytepower.toString());

    localStorage.setItem("buyed1", buyed1);
    localStorage.setItem("buyed2", buyed2);
    localStorage.setItem("buyed3", buyed3);
    localStorage.setItem("buyed4", buyed4);
    localStorage.setItem("buyed5", buyed5);
    localStorage.setItem("buyedbyte", buyedbyte);
    localStorage.setItem("buyedbit", buyedbit);

    localStorage.setItem("buyed1r", buyed1r);
    localStorage.setItem("buyed1mult", buyed1mult);

    localStorage.setItem("buyed1_enhancementmult", buyed1_enhancementmult);

    localStorage.setItem("cost1", cost1.toString());
    localStorage.setItem("cost2", cost2.toString());
    localStorage.setItem("cost3", cost3.toString());
    localStorage.setItem("cost4", cost4.toString());
    localStorage.setItem("cost5", cost5.toString());
    localStorage.setItem("costbyte", costbyte.toString());

    localStorage.setItem("cost1mult", cost1mult.toString());
    localStorage.setItem("cost2mult", cost2mult.toString());
    localStorage.setItem("cost3mult", cost3mult.toString());
    localStorage.setItem("cost4mult", cost4mult.toString());
    localStorage.setItem("cost5mult", cost5mult.toString());
    localStorage.setItem("costbytemult", costbytemult.toString());

    localStorage.setItem("cost4_achievementmult", cost4_achievementmult.toString());

    localStorage.setItem("cost1_enhancementmult", cost1_enhancementmult.toString());
    localStorage.setItem("cost2_enhancementmult", cost2_enhancementmult.toString());
    localStorage.setItem("cost3_enhancementmult", cost3_enhancementmult.toString());
    localStorage.setItem("cost4_enhancementmult", cost4_enhancementmult.toString());
    localStorage.setItem("cost5_enhancementmult", cost5_enhancementmult.toString());
    localStorage.setItem("costbyte_enhancementmult", costbyte_enhancementmult.toString());

    localStorage.setItem("points_add_add_add_enhancementpower", points_add_add_add_enhancementpower.toString());

    localStorage.setItem("scl1", scl1.toString());
    localStorage.setItem("scl2", scl2.toString());
    localStorage.setItem("scl3", scl3.toString());
    localStorage.setItem("scl4", scl4.toString());
    localStorage.setItem("scl5", scl5.toString());
    localStorage.setItem("sclbyte", sclbyte.toString());

    localStorage.setItem("costbit", costbit);
    localStorage.setItem("bitscale", bitscale);

    localStorage.setItem("enccomp", JSON.stringify(enccomp));

    localStorage.setItem("points_add_enhancementmult", points_add_enhancementmult.toString());
    localStorage.setItem("points_add_enhancementmult5", points_add_enhancementmult5.toString());
    localStorage.setItem("points_add_add_enhancementmult", points_add_add_enhancementmult.toString());
    localStorage.setItem("points_add_add_add_enhancementmult", points_add_add_add_enhancementmult.toString());
    localStorage.setItem("upg3_base_enhancementmult", upg3_base_enhancementmult.toString());

}

setInterval(() => {
    autosave()
}, 20000);

function format(decimal, precision = 2) {
    decimal = new Decimal(decimal);
    if (decimal.lt(1000)) return decimal.toNumber().toFixed(precision).replace(/\.0+$|\.$/, '');

    const exponent = decimal.exponent;
    const mantissa = decimal.mantissa;

    if (exponent >= 306) return mantissa.toFixed(precision) + "e" + exponent;

    const baseSuffixes = ['', 'K', 'M', 'B', 'T', 'Qd', 'Qi', 'Sx', 'Sp', 'Oc', 'No'];
    const higherPrefixes = ['', 'De', 'Vt', 'Tg', 'Qg', 'Qq', 'Sa', 'Su', 'Og', 'Ng', 'Ce'];
    const unitPrefixes = ['', 'U', 'D', 'T', 'Qd', 'Qi', 'Sx', 'Sp', 'Oc', 'No']; 

    const suffixIndex = Math.floor(exponent / 3);
    if (suffixIndex > 101) return mantissa.toFixed(precision) + "e" + exponent;

    let suffix = (suffixIndex <= 10) ? baseSuffixes[suffixIndex] : unitPrefixes[(suffixIndex - 1) % 10] + higherPrefixes[Math.floor((suffixIndex - 1) / 10)];

    const displayMantissa = mantissa * Math.pow(10, exponent % 3);
    if (displayMantissa >= 999.9) return format(decimal, precision); 

    return displayMantissa.toFixed(precision).replace(/\.0+$|\.$/, '') + suffix;
}

setInterval(() => {
    seconds_played += 0.05;
    tile13_seconds_played += 0.05;
    points = points.add(points_addr.div(20));
}, 50);

setInterval(() => {
    costr1 = cost1.times(cost1mult).times(cost1_enhancementmult);
    costr2 = cost2.times(cost2mult).times(cost2_enhancementmult);
    costr3 = cost3.times(cost3mult).times(cost3_enhancementmult);
    costr4 = cost4.times(cost4mult).times(cost4_achievementmult);    
    costr5 = cost5.times(cost5mult)

    costrbyte = costbyte.times(costbytemult).times(costbyte_enhancementmult);

    points_addr = points_add_addr.times(buyed1r)
    if (tilecomp[2]) {
        points_add_addr = points_add_add.times(points_add_add_addr.pow(buyed2)).times(bytemultr).times(points_add_enhancementmult).times(points_add_achievementmult).times(points_add_enhancementmult5).times(points_add_add_achievementmult).times(achievementmult);
    } else {
        points_add_addr = points_add_add.times(points_add_add_addr.pow(buyed2)).times(bytemultr).times(achievementmult);
    } 
    points_add_add_addr = points_add_add_add.add(buyed3 * upg3_baser).times(points_add_add_add_enhancementmult).times(points_add_add_add_achievementmult).pow(points_add_add_add_enhancementpower);
    upg3_baser = upg3_base.times(upg3_base_achievementmult).times(upg3_base_enhancementmult)
    bytemultr = bytemult.times(bytemult_achievementmult)

    buyed1mult = 1 + buyed5

    buyed1r = buyed1 * (buyed1_enhancementmult + buyed1mult)

    points_add_achievementmult = new Decimal(new Decimal(1.02).pow(buyed1r))
    achievementmult = new Decimal(1.55 ** achievementsdone)

    counter.textContent = format(points.mul(100).div(100));
    upgrade1.innerHTML = "cost:" + format(costr1) + " <br> +" + format(points_add_addr) +" p/s";
    upgrade2.innerHTML = "cost:" + format(costr2) + " <br> Upgrade 1 x" + format(points_add_add_addr);
    upgrade3.innerHTML = "cost:" + format(costr3) + " <br> Upgrade 2 +" + format(upg3_baser);
    upgrade4.innerHTML = "cost:" + format(costr4) + "<br> All cost -15%";
    upgrade5.innerHTML = "cost:" + format(costr5) + "<br> Upgrade 1 gain +1";
    byte.innerHTML = "cost:" + format(costrbyte) + " Byte upgrade";
    polybit.innerHTML = "get a polybit for " + costbit + " Byte upgrades<br>Reset your progress for a better byte multiplier";

    upgrade1.style.backgroundColor = points.gte(costr1) ? 'green' : 'black';
    upgrade2.style.backgroundColor = points.gte(costr2) ? 'green' : 'black';
    upgrade3.style.backgroundColor = points.gte(costr3) ? 'green' : 'black';
    upgrade4.style.backgroundColor = points.gte(costr4) ? 'green' : 'black';
    upgrade5.style.backgroundColor = points.gte(costr5) ? 'green' : 'black';
    byte.style.backgroundColor = points.gte(costrbyte) ? 'green' : 'black';
    polybit.style.backgroundColor = (buyedbyte >= costbit) ? 'green' : 'black';

    tooltip1.innerHTML = buyed1r + ' bought';
    tooltip2.innerHTML = buyed2 + ' bought';
    tooltip3.innerHTML = buyed3 + ' bought';
    tooltip4.innerHTML = buyed4 + ' bought';
    tooltip5.innerHTML = buyed5 + ' bought';
    tooltipbyte.innerHTML = buyedbyte + ' bought';
    bytedisplay.innerHTML = "byte multiplier: x" + format(bytemultr, 4);
    tooltipbit.innerHTML = "you have " + buyedbit + " polybits"

    achievementdisplay.innerHTML = "achievements provide a multiplier to<br>point gain: " + format(achievementmult.mul(1000).div(1000)) + "x"
}, 5);


function keepdisplay(name) {
    achievementnotifier.innerHTML = name
    achievementnotifier.style.display = "inline"
    setInterval(() => {
        achievementnotifier.style.display = "none"
    }, 5000);
}

setInterval(() => {
    if (buyed1 >= 1 && tilecomp[1] === false){
        tilecomp[1] = true
        achievementsdone += 1
        keepdisplay("First time?")
        }
    if (buyed2 >= 1 && tilecomp[2] === false){
        tilecomp[2] = true
        achievementsdone += 1   
        keepdisplay("Second word play")
    }
    if (buyed3 >= 1 && tilecomp[3] === false){
        tilecomp[3] = true
        achievementsdone += 1
        upg3_base = upg3_base.add(0.02)
        keepdisplay(">100 hours")
    }
    if (buyed4 >= 1 && tilecomp[4] === false){
        tilecomp[4] = true
        achievementsdone += 1
        cost4_achievementmult = new Decimal(0.95)
        keepdisplay("Slight discount")
    }
    if (buyedbyte >= 1 && tilecomp[5] === false){
        tilecomp[5] = true
        achievementsdone += 1
        keepdisplay("A bit good")
    }
    if (seconds_played>= 100 && tilecomp[6] === false){
        tilecomp[6] = true
        achievementsdone += 1
        keepdisplay("CentiSecond")
    }
    if (buyed1 + buyed2 + buyed3 + buyed4 + buyedbyte >= 500 && tilecomp[7] === false){
        tilecomp[7] = true
        achievementsdone += 1
        keepdisplay("Nessisary upgrades")
    }
    if (points_addr.gte(5e15) && tilecomp[8] === false){
        tilecomp[8] = true
        achievementsdone += 1
        keepdisplay("Superefficiency")
    }
    if (buyedbyte >= 64 && tilecomp[9] === false){
        tilecomp[9] = true
        bytemult_achievementmult = bytemult_achievementmult.times(2)
        achievementsdone += 1
        keepdisplay("8 bit")
    }
    if (buyed4 >= 20 && tilecomp[10] === false){
        tilecomp[10] = true
        achievementsdone += 1
        keepdisplay("Souldn't this be free?")
    }
    if (points.gte(3.1e41) && tilecomp[11] === false){
        tilecomp[11] = true
        points_add_achievementmult = points_add_achievementmult.times(4.131)
        achievementsdone += 1
        keepdisplay("e41 - 31")
    }
    if (tilecomp[12] === false && enccomp[1]){
        tilecomp[12] = true
        achievementsdone += 1
        keepdisplay("Advancing")
    }
    if (tile13_seconds_played >= 180 && tilecomp[13] === false){
        tilecomp[13] = true
        points_add_achievementmult = points_add_achievementmult.times(3)
        achievementsdone += 1
        keepdisplay("patience is a virtue")
    }
    if (points.gte(1e9) && buyed2 === 0 && tilecomp[14] === false){
        tilecomp[14] = true
        points_add_add_add_achievementmult = points_add_add_add_achievementmult.times(1.1)
        achievementsdone += 1
        keepdisplay("30 years until upgrade 2")
    }
    if (points.gte(1e21) && buyed3 === 0 && tilecomp[15] === false){
        tilecomp[15] = true
        upg3_base_achievementmult = upg3_base_achievementmult.times(1.1)
        achievementsdone += 1
        keepdisplay("GIVE ME A BASE INCREASE")
    }
    if (buyedbit >= 9 && tilecomp[16] === false){
        tilecomp[16] = true
        achievementsdone += 1
        keepdisplay("polyapocalypse")
    }


    for (let i = 1; i <= 16; i++) {
        if (tilecomp[i] === true) {
            let currentTile = window[`tile${i}`]; 
            
            if (currentTile) {
                currentTile.classList.remove("tileincomplete");
                currentTile.classList.add("tilecomplete");
            }
        }
    }

    tile2info.innerHTML = "<b>Second word play</b><br>Buy upgrade 2 for the first time<br><i>reward: Upgrade 1 is better everytime it's bought<br>currently: x" + format(points_add_achievementmult) + "</i>"
}, 5);

setInterval(() => {
    if (enccomp[1] === true) {
        points_add_enhancementmult = new Decimal(5);
        enhancement1.innerHTML = "bought<br>Points gain x5";
        enhancement1.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
        enhancement1.style.backgroundColor = "rgba(21, 104, 212, 1)";
        enhancement2.style.display = "inline";
        enhancement3.style.display = "inline";
    } else {
        points_add_enhancementmult = new Decimal(1);
        enhancement1.innerHTML = "cost:10No<br>Points gain x5";
        enhancement1.style.backgroundColor = (points.gte(1e31) || enccomp[1] === true) ? "rgba(21, 104, 212, 1)" : "black";
    }

    if (enccomp[2] === true) {
        cost1_enhancementmult = new Decimal(1).div(200);
        enhancement2.innerHTML = "bought<br>Upgrade 1 cost /200";
        enhancement2.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
        enhancement2.style.backgroundColor = "rgba(21, 104, 212, 1)";
        enhancement4.style.display = "inline";
    } else {
        cost1_enhancementmult = new Decimal(1);
        enhancement2.innerHTML = "cost:2NoDe<br>Upgrade 1 cost /200";
        enhancement2.style.backgroundColor = (points.gte(2e60) || enccomp[2] === true) ? "rgba(21, 104, 212, 1)" : "black";
    }

    if (enccomp[3] === true) {
        points_add_add_add_enhancementmult = new Decimal(1.25);
        enhancement3.innerHTML = "bought<br>upgrade 2 effect 25% better";
        enhancement3.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
        enhancement3.style.backgroundColor = "rgba(21, 104, 212, 1)";
        enhancement5.style.display = "inline";
    } else {
        points_add_add_add_enhancementmult = new Decimal(1);
        enhancement3.innerHTML = "cost:20Vg<br>upgrade 2 effect 25% better";
        enhancement3.style.backgroundColor = (points.gte(2e64) || enccomp[3] === true) ? "rgba(21, 104, 212, 1)" : "black";
    }

    if (enccomp[4] === true) {
        costbyte_enhancementmult = (new Decimal(0.94).pow(Math.floor(buyedbyte)));
        enhancement4.innerHTML = "bought<br>Byte upgrade cheaper everytime it's bought<br>currently:/" + format(1/(new Decimal(0.94).pow(Math.floor(buyedbyte))), 4);
        enhancement4.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
        enhancement4.style.backgroundColor = "rgba(21, 104, 212, 1)";
        enhancement6.style.display = "inline";
        enhancement7.style.display = "inline";
    } else {
        costbyte_enhancementmult = new Decimal(1);
        enhancement4.innerHTML = "cost:1UTg<br>Byte upgrade cheaper everytime it's bought<br>currently:/" + format(1/(new Decimal(0.94).pow(Math.floor(buyedbyte))), 4);
        enhancement4.style.backgroundColor = (points.gte(1e96) || enccomp[4] === true) ? "rgba(21, 104, 212, 1)" : "black";
    }

    if (enccomp[5] === true) {
        points_add_enhancementmult5 = points.pow(1/12);
        enhancement5.innerHTML = "bought<br>Points boosts itself<br>currently:x" + format(points.pow(1/12));
        enhancement5.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
        enhancement5.style.backgroundColor = "rgba(21, 104, 212, 1)";
        enhancement8.style.display = "inline";
        enhancement7.style.display = "inline";
    } else {
        points_add_enhancementmult5 = new Decimal(1);
        enhancement5.innerHTML = "cost:15UQq<br>Points boosts itself<br>currently:x" + format(points.pow(1/12));
        enhancement5.style.backgroundColor = (points.gte(1e102) || enccomp[5] === true) ? "rgba(21, 104, 212, 1)" : "black";
    }

    if (enccomp[6] === true) {
        cost1_enhancementmult = new Decimal(0.1);
        cost2_enhancementmult = new Decimal(0.1);
        cost3_enhancementmult = new Decimal(0.1);
        enhancement6.innerHTML = "bought<br>Upgrade 1-3 90% cheaper";
        enhancement6.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
        enhancement6.style.backgroundColor = "rgba(21, 104, 212, 1)";
    } else {
        cost1_enhancementmult = new Decimal(1);
        cost2_enhancementmult = new Decimal(1);
        cost3_enhancementmult = new Decimal(1);
        enhancement6.innerHTML = "cost:1Sa<br>Upgrade 1-3 90% cheaper";
        enhancement6.style.backgroundColor = (points.gte(1e141) || enccomp[6] === true) ? "rgba(21, 104, 212, 1)" : "black";
    }

    if (enccomp[7] === true) {
        upg3_base_enhancementmult = 1 + ((buyed1r + buyed2 + buyed3 + buyed4 + buyedbyte) ** 1/100);
        enhancement7.innerHTML = "bought<br>Upgrade 3 is better based on total upgrades bought<br>currently:x" + format(1 + ((buyed1r + buyed2 + buyed3 + buyed4 + buyedbyte) ** 1/100));
        enhancement7.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
        enhancement7.style.backgroundColor = "rgba(21, 104, 212, 1)";
        enhancement9.style.display = "inline";
    } else {
        upg3_base_enhancementmult = new Decimal(1);
        enhancement7.innerHTML = "cost:1e345<br>Upgrade 3 is better based on total upgrades bought<br>currently:x" + format(1 + ((buyed1r + buyed2 + buyed3 + buyed4 + buyedbyte) ** 1/100));
        enhancement7.style.backgroundColor = (points.gte("1e345") || enccomp[7] === true) ? "rgba(21, 104, 212, 1)" : "black";
    }

    if (enccomp[8] === true) {
        points_add_add_add_enhancementpower = new Decimal(1.2);
        enhancement8.innerHTML = "bought<br>Upgrade 2 effect ^1.2";
        enhancement8.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
        enhancement8.style.backgroundColor = "rgba(21, 104, 212, 1)";
    } else {
        points_add_add_add_enhancementpower = new Decimal(1);
        enhancement8.innerHTML = "cost:300SpSa<br>Upgrade 2 effect ^1.2";
        enhancement8.style.backgroundColor = (points.gte(3e205) || enccomp[8] === true) ? "rgba(21, 104, 212, 1)" : "black";
    }

    if (enccomp[9] === true) {
        buyed1_enhancementmult = 1;
        enhancement9.innerHTML = "bought<br>Upgrade 1 gain +1";
        enhancement9.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
        enhancement9.style.backgroundColor = "rgba(21, 104, 212, 1)";
        enhancement10.style.display = "inline";
    } else {
        buyed1_enhancementmult = 0;
        enhancement9.innerHTML = "cost:1e2300<br>Upgrade 1 gain +1";
        enhancement9.style.backgroundColor = (points.gte("1e2300") || enccomp[9] === true) ? "rgba(21, 104, 212, 1)" : "black";
    }

    if (enccomp[10] === true) {
        upgrade5.style.display = "inline";
        enhancement10.innerHTML = "bought<br>Unlock upgrade 5";
        enhancement10.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
        enhancement10.style.backgroundColor = "rgba(21, 104, 212, 1)";
    } else {
        enhancement10.innerHTML = "cost:1e2900<br>Unlock upgrade 5";
        enhancement10.style.backgroundColor = (points.gte("1e2900") || enccomp[10] === true) ? "rgba(21, 104, 212, 1)" : "black";
    }

}, 5);



function TabHidden() {
    if (document.visibilityState === "hidden") {
        localStorage.setItem("currenttime", Date.now())
    } else {
        let elapsedtime = Date.now() - Number(localStorage.getItem("currenttime"))
        for (let i = 0; i < (elapsedtime/1000); i++){
            points = points.add(points_addr)
            points_add_enhancementmult5 = points.pow(1/12);
        }
    }
}

document.addEventListener("visibilitychange", TabHidden)


const yieldToBrowser = () => new Promise(resolve => setTimeout(resolve, 0));

mainscreenbutton.addEventListener('click', async () => {
    achievements.style.display = 'none';
    achievementdisplay.style.display = 'none';
    mainscreen.style.display = 'inline';
    enhancements.style.display = 'none';
    settings.style.display = 'none'
});

achievementbutton.addEventListener('click', async () => {
    mainscreen.style.display = 'none';
    achievements.style.display = 'inline';
    achievements.style.display = 'flex';
    achievementdisplay.style.display = 'inline';
    settings.style.display = 'none'
    enhancements.style.display = 'none';
});

enhancementbutton.addEventListener('click', async () => {
    mainscreen.style.display = 'none';
    achievements.style.display = 'none';
    achievementdisplay.style.display = 'none';
    settings.style.display = 'none'
    enhancements.style.display = 'inline'
});

settingsbutton.addEventListener('click', async () => {
    mainscreen.style.display = 'none';
    achievements.style.display = 'none';
    achievementdisplay.style.display = 'none';
    enhancements.style.display = 'none'
    settings.style.display = 'inline'
});

upgrade1.addEventListener('click', async () => {
    let iterations = 0;
    while (points.gte(costr1)) {
        points = points.sub(costr1);
        cost1 = cost1.times(scl1);
        scl1 = scl1.times(1.002);
        buyed1 += 1;
        costr1 = cost1.times(cost1mult).times(cost1_enhancementmult);
        if (++iterations % 1000 === 0) await yieldToBrowser();
    }
    tile13_seconds_played = 0;
});

upgrade2.addEventListener('click', async () => {
    let iterations = 0;
    while (points.gte(costr2)) {
        points = points.sub(costr2);
        cost2 = cost2.times(scl2);
        scl2 = scl2.times(1.05);
        buyed2 += 1;
        costr2 = cost2.times(cost2mult).times(cost3_enhancementmult);
        if (++iterations % 1000 === 0) await yieldToBrowser();
    }
});

upgrade3.addEventListener('click', async () => {
    let iterations = 0;
    while (points.gte(costr3)) {
        points = points.sub(costr3);
        cost3 = cost3.times(scl3);
        scl3 = scl3.times(1.3);
        buyed3 += 1;
        costr3 = cost3.times(cost3mult).times(cost3_enhancementmult);
        if (++iterations % 1000 === 0) await yieldToBrowser();
    }
});

upgrade4.addEventListener('click', async () => {
    let iterations = 0;
    while (points.gte(costr4)) {
        points = points.sub(costr4);
        cost1mult = cost1mult.times(0.85);
        cost2mult = cost2mult.times(0.85);
        cost3mult = cost3mult.times(0.85);
        cost4 = cost4.times(scl4);
        scl4 = scl4.times(1.85);
        buyed4 += 1;
        costr4 = cost4.times(cost4mult).times(cost4_enhancementmult).times(cost4_achievementmult);
        if (++iterations % 1000 === 0) await yieldToBrowser();
    }
});

upgrade5.addEventListener('click', async () => {
    let iterations = 0;
    while (points.gte(costr5)) {
        points = points.sub(costr5);
        cost5 = cost5.times(scl5);
        scl5 = scl5.times(1e20);
        buyed5 += 1;
        costr5 = cost5.times(cost5mult).times(cost5_enhancementmult);
        if (++iterations % 1000 === 0) await yieldToBrowser();
    }
});



polybit.addEventListener('click', () => {
    if (buyedbyte < costbit) return;
    
    buyedbit += 1
    bytepower = bytepower.times(1.05);
    costbit += bitscale;
    if (buyedbit >= 80) {
        bitscale += 10
    }

    points = new Decimal(1);
    points_addr = new Decimal(0);
    points_add_addr = new Decimal(0);
    buyed1r = 0; 
    buyed1mult = 0;

    points_add_add = new Decimal(1);
    points_add_add_add = new Decimal(1.2);
    cost1 = new Decimal(1); 
    cost2 = new Decimal(2500);
    cost3 = new Decimal(360000); 
    cost4 = new Decimal(10000000000);
    cost5 = new Decimal("1e2000");
    costbyte = new Decimal(10);
    buyed1 = 0; 
    buyed2 = 0; 
    buyed3 = 0; 
    buyed4 = 0; 
    buyed5 = 0;
    buyedbyte = 0;
    scl1 = new Decimal(1.2)
    scl2 = new Decimal(2.2)
    scl3 = new Decimal(4.6)
    scl4 = new Decimal(11)
    scl5 = new Decimal("1e200")
    sclbyte = new Decimal(3)
    cost1mult = new Decimal(1); 
    cost2mult = new Decimal(1);
    cost3mult = new Decimal(1); 
    cost4mult = new Decimal(1);    
    cost5mult = new Decimal(1);
    bytemult = new Decimal(1)
    points_add_achievementmult = new Decimal(1)
});

byte.addEventListener('click', async () => {
    let iterations = 0;
    while (points.gte(costrbyte)) {
        points = points.sub(costrbyte);
        bytemult = bytemult.times(bytepower)
        costbyte = costbyte.times(sclbyte);
        buyedbyte += 1;
        if (buyedbyte >= 100) {
            sclbyte = sclbyte.times(1.06)
        } 
        costrbyte = costbyte.times(costbytemult).times(costbyte_enhancementmult);
        if (++iterations % 1000 === 0) await yieldToBrowser();
    }
});

hardreset.addEventListener('click', () => {
    localStorage.clear()
    document.querySelectorAll(".tilecomplete").forEach(el => {
        el.classList.add("tileincomplete");
        el.classList.remove("tilecomplete");
    });
    location.reload()
});

byte.addEventListener('mouseenter', () => { 
    tooltipbyte.style.display = 'inline'; 
    bytedisplay.style.display = 'inline'; 
    if (enccomp[10]) { upgrade5.style.marginTop = "20px"; } 
    else { polybit.style.marginTop = "20px"; } 
});
byte.addEventListener('mouseleave', () => { 
    tooltipbyte.style.display = 'none'; 
    bytedisplay.style.display = 'none'; 
    if (enccomp[10]) { upgrade5.style.marginTop = "75px"; } 
    else { polybit.style.marginTop = "75px"; } 
});
upgrade1.addEventListener('mouseenter', () => { 
    tooltip1.style.display = 'inline'; 
    if (enccomp[10]) { upgrade5.style.marginTop = "47.5px"; } 
    else { polybit.style.marginTop = "47.5px"; } 
});
upgrade1.addEventListener('mouseleave', () => { 
    tooltip1.style.display = 'none'; 
    if (enccomp[10]) { upgrade5.style.marginTop = "75px"; } 
    else { polybit.style.marginTop = "75px"; } 
});
upgrade2.addEventListener('mouseenter', () => { 
    tooltip2.style.display = 'inline'; 
    if (enccomp[10]) { upgrade5.style.marginTop = "47.5px"; } 
    else { polybit.style.marginTop = "47.5px"; } 
});
upgrade2.addEventListener('mouseleave', () => { 
    tooltip2.style.display = 'none'; 
    if (enccomp[10]) { upgrade5.style.marginTop = "75px"; } 
    else { polybit.style.marginTop = "75px"; } 
});
upgrade3.addEventListener('mouseenter', () => { 
    tooltip3.style.display = 'inline'; 
    if (enccomp[10]) { upgrade5.style.marginTop = "47.5px"; } 
    else { polybit.style.marginTop = "47.5px"; } 
});
upgrade3.addEventListener('mouseleave', () => { 
    tooltip3.style.display = 'none'; 
    if (enccomp[10]) { upgrade5.style.marginTop = "75px"; } 
    else { polybit.style.marginTop = "75px"; } 
});
upgrade4.addEventListener('mouseenter', () => { 
    tooltip4.style.display = 'inline'; 
    if (enccomp[10]) { upgrade5.style.marginTop = "47.5px"; } 
    else { polybit.style.marginTop = "47.5px"; } 
});
upgrade4.addEventListener('mouseleave', () => { 
    tooltip4.style.display = 'none'; 
    if (enccomp[10]) { upgrade5.style.marginTop = "75px"; } 
    else { polybit.style.marginTop = "75px"; } 
});
polybit.addEventListener('mouseenter', () => { 
    tooltipbit.style.display = 'inline'; 
});
polybit.addEventListener('mouseleave', () => { 
    tooltipbit.style.display = 'none'; 
});
upgrade5.addEventListener('mouseenter', () => { 
    tooltip5.style.display = 'inline'; 
    polybit.style.marginTop = "47.5px";
});
upgrade5.addEventListener('mouseleave', () => { 
    tooltip5.style.display = 'none'; 
    polybit.style.marginTop = "75px";
});


enhancement1.addEventListener('click', async () => {
    if (points.lt(1e31) || enccomp[1] === true) return;
    points = points.sub(1e30);
    enhancement2.style.display = "inline";
    enhancement3.style.display = "inline";
    points_add_enhancementmult = points_add_enhancementmult.times(5);
    enhancement1.innerHTML = "bought<br>Points gain x5";
    enhancement1.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
    enhancement1.style.backgroundColor = "rgba(21, 104, 212, 1)";
    enccomp[1] = true;
    tilecomp[12] = true;
});

enhancement2.addEventListener('click', async () => {
    if (points.lt(2e60) || enccomp[2] === true) return;
    points = points.sub(2e60);
    enhancement4.style.display = "inline";
    cost1_enhancementmult = cost1_enhancementmult.div(200)
    enhancement2.innerHTML = "bought<br>Upgrade 1 cost /200";
    enhancement2.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
    enhancement2.style.backgroundColor = "rgba(21, 104, 212, 1)";
    enccomp[2] = true;
});

enhancement3.addEventListener('click', async () => {
    if (points.lt(2e64) || enccomp[3] === true) return;
    points = points.sub(2e64);
    enhancement5.style.display = "inline";
    points_add_add_add_enhancementmult = points_add_add_add_enhancementmult.times(1.25)
    enhancement3.innerHTML = "bought<br>upgrade 2 effect 25% better";
    enhancement3.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
    enhancement3.style.backgroundColor = "rgba(21, 104, 212, 1)";
    enccomp[3] = true;
});

enhancement4.addEventListener('click', async () => {
    if (points.lt(1e96) || enccomp[4] === true) return;
    points = points.sub(1e96);
    enhancement6.style.display = "inline";
    enhancement7.style.display = "inline";
    enhancement4.innerHTML = "bought<br>Byte upgrade cheaper per 2 bought<br>currently:/1.00";
    enhancement4.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
    enhancement4.style.backgroundColor = "rgba(21, 104, 212, 1)";
    enccomp[4] = true;
});

enhancement5.addEventListener('click', async () => {
    if (points.lt(1e102) || enccomp[5] === true) return;
    points = points.sub(1e102);
    enhancement8.style.display = "inline";
    enhancement7.style.display = "inline";
    enhancement5.innerHTML = "bought<br>Points boosts itself<br>currently:x1.00";
    enhancement5.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
    enhancement5.style.backgroundColor = "rgba(21, 104, 212, 1)";
    enccomp[5] = true;
});

enhancement6.addEventListener('click', async () => {
    if (points.lt(1e141) || enccomp[6] === true) return;
    points = points.sub(1e141);
    cost1_enhancementmult = cost1_enhancementmult.times(0.1)
    cost2_enhancementmult = cost2_enhancementmult.times(0.1)
    cost3_enhancementmult = cost3_enhancementmult.times(0.1)
    enhancement6.innerHTML = "bought<br>Upgrade 1-3 90% cheaper";
    enhancement6.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
    enhancement6.style.backgroundColor = "rgba(21, 104, 212, 1)";
    enccomp[6] = true;
});

enhancement8.addEventListener('click', async () => {
    if (points.lt(3e205) || enccomp[8] === true) return;
    points = points.sub(3e205);
    points_add_add_add_enhancementpower = new Decimal("1.2")
    enhancement8.innerHTML = "bought<br>Upgrade 2 effect ^1.2";
    enhancement8.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
    enhancement8.style.backgroundColor = "rgba(21, 104, 212, 1)";
    enccomp[8] = true;
});

enhancement7.addEventListener('click', async () => {
    if (points.lt('1e345') || enccomp[7] === true) return;
    points = points.sub('1e345');
    enhancement9.style.display = "inline";
    enhancement7.innerHTML = "bought<br>Upgrade 3 is better based on total upgrades bought<br>currently:x1.00";
    enhancement7.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
    enhancement7.style.backgroundColor = "rgba(21, 104, 212, 1)";
    enccomp[7] = true;
});

enhancement9.addEventListener('click', async () => {
    if (points.lt('1e2300') || enccomp[9] === true) return;
    points = points.sub('1e2300');
    buyed1_enhancementmult += 1
    enhancement10.style.display = "inline";
    enhancement9.innerHTML = "bought<br>Upgrade 1 gain +1";
    enhancement9.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
    enhancement9.style.backgroundColor = "rgba(21, 104, 212, 1)";
    enccomp[9] = true;
});

enhancement10.addEventListener('click', async () => {
    if (points.lt('1e2900') || enccomp[10] === true) return;
    points = points.sub('1e2900');
    upgrade5.style.display = "inline";
    enhancement10.innerHTML = "bought<br>Unlock upgrade 5";
    enhancement10.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
    enhancement10.style.backgroundColor = "rgba(21, 104, 212, 1)";
    enccomp[10] = true;
});





tile1.addEventListener('mouseenter', () => { tile1info.style.display = 'inline';});
tile1.addEventListener('mouseleave', () => { tile1info.style.display = 'none'});
tile2.addEventListener('mouseenter', () => { tile2info.style.display = 'inline';});
tile2.addEventListener('mouseleave', () => { tile2info.style.display = 'none'});
tile3.addEventListener('mouseenter', () => { tile3info.style.display = 'inline';});
tile3.addEventListener('mouseleave', () => { tile3info.style.display = 'none'});
tile4.addEventListener('mouseenter', () => { tile4info.style.display = 'inline';});
tile4.addEventListener('mouseleave', () => { tile4info.style.display = 'none'});
tile5.addEventListener('mouseenter', () => { tile5info.style.display = 'inline';});
tile5.addEventListener('mouseleave', () => { tile5info.style.display = 'none'});
tile6.addEventListener('mouseenter', () => { tile6info.style.display = 'inline';});
tile6.addEventListener('mouseleave', () => { tile6info.style.display = 'none'});
tile7.addEventListener('mouseenter', () => { tile7info.style.display = 'inline';});
tile7.addEventListener('mouseleave', () => { tile7info.style.display = 'none'});
tile8.addEventListener('mouseenter', () => { tile8info.style.display = 'inline';});
tile8.addEventListener('mouseleave', () => { tile8info.style.display = 'none'});
tile9.addEventListener('mouseenter', () => { tile9info.style.display = 'inline';});
tile9.addEventListener('mouseleave', () => { tile9info.style.display = 'none'});
tile10.addEventListener('mouseenter', () => { tile10info.style.display = 'inline';});
tile10.addEventListener('mouseleave', () => { tile10info.style.display = 'none'});
tile11.addEventListener('mouseenter', () => { tile11info.style.display = 'inline';});
tile11.addEventListener('mouseleave', () => { tile11info.style.display = 'none'});
tile12.addEventListener('mouseenter', () => { tile12info.style.display = 'inline';});
tile12.addEventListener('mouseleave', () => { tile12info.style.display = 'none'});
tile13.addEventListener('mouseenter', () => { tile13info.style.display = 'inline';});
tile13.addEventListener('mouseleave', () => { tile13info.style.display = 'none'});
tile14.addEventListener('mouseenter', () => { tile14info.style.display = 'inline';});
tile14.addEventListener('mouseleave', () => { tile14info.style.display = 'none'});
tile15.addEventListener('mouseenter', () => { tile15info.style.display = 'inline';});
tile15.addEventListener('mouseleave', () => { tile15info.style.display = 'none'});
tile16.addEventListener('mouseenter', () => { tile16info.style.display = 'inline';});
tile16.addEventListener('mouseleave', () => { tile16info.style.display = 'none'});