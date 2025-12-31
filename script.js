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

let points = new Decimal("1e2500")

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

let scl1 = new Decimal(1.01)
let scl2 = new Decimal(2.2)
let scl3 = new Decimal(4.6)
let scl4 = new Decimal(9.6)
let scl5 = new Decimal("1e400")
let sclbyte = new Decimal(3)

let costr1 = cost1.times(cost1mult);
let costr2 = cost2.times(cost2mult);
let costr3 = cost3.times(cost3mult);
let costr4 = cost4.times(cost4mult).times(cost4_achievementmult);
let costr5 = cost5.times(cost5mult);
let costrbyte = costbyte.times(costbytemult);

let costbit = 30
let bitscale = 30

let enccomp = [true ,false, false, false, false, false, false, false, false, false]

let points_add_enhancementmult = new Decimal(1)
let points_add_enhancementmult5 = new Decimal(1)
let points_add_add_enhancementmult = new Decimal(1)
let points_add_add_add_enhancementmult = new Decimal(1)
let upg3_base_enhancementmult = new Decimal(1)

const mainscreenbutton = document.getElementById("mainscreenbutton")
const achievementbutton = document.getElementById("achievementbutton")
const enhancementbutton = document.getElementById("enhancementbutton")

const mainscreen = document.getElementById("mainscreen")
const achievements = document.getElementById("achievements")
const enhancements = document.getElementById("enhancements")

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

    points_add_achievementmult = new Decimal(1.02 ** buyed1r)
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
    tooltipbyte.innerHTML = buyedbyte + ' bought';
    bytedisplay.innerHTML = "byte multiplier: x" + format(bytemultr, 4);
    tooltipbit.innerHTML = "you have " + buyedbit + " polybits"

    achievementdisplay.innerHTML = "achievemts provide a multiplier to<br>point gain: " + format(achievementmult.mul(1000).div(1000)) + "x"
}, 5);

setInterval(() => {
    if (buyed1 >= 1 && tilecomp[1] === false){
        tile1.classList.remove("tileincomplete")
        tile1.classList.add("tilecomplete")
        tilecomp[1] = true
        achievementsdone += 1
    }
    if (buyed2 >= 1 && tilecomp[2] === false){
        tile2.classList.remove("tileincomplete")
        tile2.classList.add("tilecomplete")
        tilecomp[2] = true
        achievementsdone += 1
    }
    if (buyed3 >= 1 && tilecomp[3] === false){
        tile3.classList.remove("tileincomplete")
        tile3.classList.add("tilecomplete")
        tilecomp[3] = true
        achievementsdone += 1
        upg3_base = upg3_base.add(0.02)
    }
    if (buyed4 >= 1 && tilecomp[4] === false){
        tile4.classList.remove("tileincomplete")
        tile4.classList.add("tilecomplete")
        tilecomp[4] = true
        achievementsdone += 1
        cost4_achievementmult = new Decimal(0.95)
    }
    if (buyedbyte >= 1 && tilecomp[5] === false){
        tile5.classList.remove("tileincomplete")
        tile5.classList.add("tilecomplete")
        tilecomp[5] = true
        achievementsdone += 1
    }
    if (seconds_played>= 100 && tilecomp[6] === false){
        tile6.classList.remove("tileincomplete")
        tile6.classList.add("tilecomplete")
        tilecomp[6] = true
        achievementsdone += 1
    }
    if (buyed1 + buyed2 + buyed3 + buyed4 + buyedbyte >= 500 && tilecomp[7] === false){
        tile7.classList.remove("tileincomplete")
        tile7.classList.add("tilecomplete")
        tilecomp[7] = true
        achievementsdone += 1
    }
    if (points_addr.gte(5e15) && tilecomp[8] === false){
        tile8.classList.remove("tileincomplete")
        tile8.classList.add("tilecomplete")
        tilecomp[8] = true
        achievementsdone += 1
    }
    if (buyedbyte >= 64 && tilecomp[9] === false){
        tile9.classList.remove("tileincomplete")
        tile9.classList.add("tilecomplete")
        tilecomp[9] = true
        bytemult_achievementmult = bytemult_achievementmult.times(2)
        achievementsdone += 1
    }
    if (buyed4 >= 20 && tilecomp[10] === false){
        tile10.classList.remove("tileincomplete")
        tile10.classList.add("tilecomplete")
        tilecomp[10] = true
        achievementsdone += 1
    }
    if (points.gte(3.1e41) && tilecomp[11] === false){
        tile11.classList.remove("tileincomplete")
        tile11.classList.add("tilecomplete")
        tilecomp[11] = true
        points_add_achievementmult = points_add_achievementmult.times(4.131)
        achievementsdone += 1
    }
    if (tilecomp[12] === true){
        tile12.classList.remove("tileincomplete")
        tile12.classList.add("tilecomplete")
        tilecomp[12] = false
        achievementsdone += 1
    }
    if (tile13_seconds_played >= 180 && tilecomp[13] === false){
        tile13.classList.remove("tileincomplete")
        tile13.classList.add("tilecomplete")
        tilecomp[13] = true
        points_add_achievementmult = points_add_achievementmult.times(3)
        achievementsdone += 1
    }
    if (points.gte(1e9) && buyed2 === 0 && tilecomp[14] === false){
        tile14.classList.remove("tileincomplete")
        tile14.classList.add("tilecomplete")
        tilecomp[14] = true
        points_add_add_add_achievementmult = points_add_add_add_achievementmult.times(1.1)
        achievementsdone += 1
    }
    if (points.gte(1e21) && buyed3 === 0 && tilecomp[15] === false){
        tile15.classList.remove("tileincomplete")
        tile15.classList.add("tilecomplete")
        tilecomp[15] = true
        upg3_base_achievementmult = upg3_base_achievementmult.times(1.1)
        achievementsdone += 1
    }
    if (buyedbit >= 9 && tilecomp[16] === false){
        tile16.classList.remove("tileincomplete")
        tile16.classList.add("tilecomplete")
        tilecomp[16] = true
        achievementsdone += 1
    }
}, 5);

setInterval(() => {
    if (points.gte(1e31) || enccomp[1] === true) {
        enhancement1.style.backgroundColor = "rgba(21, 104, 212, 1)"
    } else {enhancement1.style.backgroundColor = "black"}
    if (points.gte(2e60) || enccomp[2] === true) {
        enhancement2.style.backgroundColor = "rgba(21, 104, 212, 1)"
    } else {enhancement2.style.backgroundColor = "black"}
    if (points.gte(2e64) || enccomp[3] === true) {
        enhancement3.style.backgroundColor = "rgba(21, 104, 212, 1)"
    } else {enhancement3.style.backgroundColor = "black"}
    if (points.gte(1e96) || enccomp[4] === true) {
        enhancement4.style.backgroundColor = "rgba(21, 104, 212, 1)"
    } else {enhancement4.style.backgroundColor = "black"}
    if (points.gte(1.5e157) || enccomp[5] === true) {
        enhancement5.style.backgroundColor = "rgba(21, 104, 212, 1)"
    } else {enhancement5.style.backgroundColor = "black"}
    if (points.gte(1e183) || enccomp[6] === true) {
        enhancement6.style.backgroundColor = "rgba(21, 104, 212, 1)"
    } else {enhancement6.style.backgroundColor = "black"}
    if (points.gte(3e205) || enccomp[8] === true) {
        enhancement8.style.backgroundColor = "rgba(21, 104, 212, 1)"
    } else {enhancement8.style.backgroundColor = "black"}
    if (points.gte("1e345") || enccomp[7] === true) {
        enhancement7.style.backgroundColor = "rgba(21, 104, 212, 1)"
    } else {enhancement7.style.backgroundColor = "black"}
    if (points.gte("1e2300") || enccomp[9] === true) {
        enhancement9.style.backgroundColor = "rgba(21, 104, 212, 1)"
    } else {enhancement9.style.backgroundColor = "black"}
    
    if (enccomp[4] === true) {
        costbyte_enhancementmult = new Decimal(0.94 ** Math.floor(buyedbyte))
        enhancement4.innerHTML = "bought<br>Byte upgrade cheaper per upgrade bought<br>currently:/" + format(1/(0.94 ** Math.floor(buyedbyte)), 4);
    } else {enhancement4.innerHTML = "cost:1UTg<br>Byte upgrade cheaper per upgrade bought<br>currently:/" + format(1/(0.94 ** Math.floor(buyedbyte)), 4);}
    if (enccomp[5] === true) {
        points_add_enhancementmult5 = points.pow(1/14)
        enhancement5.innerHTML = "bought<br>Points boosts itself<br>currently:x" + format(points.pow(1/16));
    } else {enhancement5.innerHTML = "cost:15UQq points<br>Points boosts itself<br>currently:x" + format(points.pow(1/16));}
    if (enccomp[7] === true) {
        upg3_base_enhancementmult = 1 + ((buyed1r + buyed2 + buyed3 + buyed4 + buyedbyte) ** 1/100)
        enhancement7.innerHTML = "bought<br>Upgrade 3 is better based on total upgrades bought<br>currently:x" + format(1 + ((buyed1r + buyed2 + buyed3 + buyed4 + buyedbyte) ** 1/100));
    } else {enhancement7.innerHTML = "cost:1e345 points<br>Upgrade 3 is better based on total upgrades bought<br>currently:x" + format(1 + ((buyed1r + buyed2 + buyed3 + buyed4 + buyedbyte) ** 1/100));}
}, 5);



const yieldToBrowser = () => new Promise(resolve => setTimeout(resolve, 0));

mainscreenbutton.addEventListener('click', async () => {
    achievements.style.display = 'none';
    achievementdisplay.style.display = 'none';
    mainscreen.style.display = 'inline';
    enhancements.style.display = 'none';
});

achievementbutton.addEventListener('click', async () => {
    mainscreen.style.display = 'none';
    achievements.style.display = 'inline';
    achievements.style.display = 'flex';
    achievementdisplay.style.display = 'inline';
    enhancements.style.display = 'none';
});

enhancementbutton.addEventListener('click', async () => {
    mainscreen.style.display = 'none';
    achievements.style.display = 'none';
    achievementdisplay.style.display = 'none';
    enhancements.style.display = 'inline'
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

byte.addEventListener('click', async () => {
    let iterations = 0;
    while (points.gte(costrbyte)) {
        points = points.sub(costrbyte);
        bytemult = bytemult.times(bytepower)
        costbyte = costbyte.times(sclbyte);
        buyedbyte += 1;
        if (buyedbyte >= 100) {
            sclbyte = sclbyte.times(1.01)
        } 
        costrbyte = costbyte.times(costbytemult).times(costbyte_enhancementmult);
        if (++iterations % 1000 === 0) await yieldToBrowser();
    }
});

polybit.addEventListener('click', () => {
    if (buyedbyte < costbit) return;
    
    buyedbit += 1
    bytepower = bytepower.times(1.05);
    costbit += bitscale;
    bitscale += 5

    points_add = new Decimal(0);
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
    scl1 = new Decimal(1.05)
    scl2 = new Decimal(2.2)
    scl3 = new Decimal(4.6)
    scl4 = new Decimal(11)
    scl5 = new Decimal("1e400")
    sclbyte = new Decimal(3)
    cost1mult = new Decimal(1); 
    cost2mult = new Decimal(1);
    cost3mult = new Decimal(1); 
    cost4mult = new Decimal(1);    
    cost5mult = new Decimal(1);
    bytemult = new Decimal(1)
    points_add_achievementmult = new Decimal(1)
    points = new Decimal(1);
});

byte.addEventListener('mouseenter', () => { tooltipbyte.style.display = 'inline'; bytedisplay.style.display = 'inline'; upgrade5.style.marginTop = "20px"; });
byte.addEventListener('mouseleave', () => { tooltipbyte.style.display = 'none'; bytedisplay.style.display = 'none'; upgrade5.style.marginTop = "75px"; });
upgrade1.addEventListener('mouseenter', () => { tooltip1.style.display = 'inline'; upgrade5.style.marginTop = "47.5px"; });
upgrade1.addEventListener('mouseleave', () => { tooltip1.style.display = 'none'; upgrade5.style.marginTop = "75px"; });
upgrade2.addEventListener('mouseenter', () => { tooltip2.style.display = 'inline'; upgrade5.style.marginTop = "47.5px"; });
upgrade2.addEventListener('mouseleave', () => { tooltip2.style.display = 'none'; upgrade5.style.marginTop = "75px"; });
upgrade3.addEventListener('mouseenter', () => { tooltip3.style.display = 'inline'; upgrade5.style.marginTop = "47.5px"; });
upgrade3.addEventListener('mouseleave', () => { tooltip3.style.display = 'none'; upgrade5.style.marginTop = "75px"; });
upgrade4.addEventListener('mouseenter', () => { tooltip4.style.display = 'inline'; upgrade5.style.marginTop = "47.5px"; });
upgrade4.addEventListener('mouseleave', () => { tooltip4.style.display = 'none'; upgrade5.style.marginTop = "75px"; });
polybit.addEventListener('mouseenter', () => { tooltipbit.style.display = 'inline'; tooltipbit.style.margin = '0px'; });
polybit.addEventListener('mouseleave', () => { tooltipbit.style.display = 'none'; tooltipbit.style.margin = '0px'; });

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
    if (points.lt(1.5e157) || enccomp[5] === true) return;
    points = points.sub(1.5e157);
    enhancement8.style.display = "inline";
    enhancement7.style.display = "inline";
    enhancement5.innerHTML = "bought<br>Points boosts itself<br>currently:x1.00";
    enhancement5.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
    enhancement5.style.backgroundColor = "rgba(21, 104, 212, 1)";
    enccomp[5] = true;
});

enhancement6.addEventListener('click', async () => {
    if (points.lt(1e183) || enccomp[6] === true) return;
    points = points.sub(1e183);
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
    enhancement9.innerHTML = "bought<br>Upgrade 1 gain +1";
    enhancement9.style.outline = "7.5px solid rgba(0, 66, 152, 1)";
    enhancement9.style.backgroundColor = "rgba(21, 104, 212, 1)";
    enccomp[9] = true;
});





tile1.addEventListener('mouseenter', () => { tile1info.style.display = 'inline';});
tile1.addEventListener('mouseleave', () => { tile1info.style.display = 'none'});