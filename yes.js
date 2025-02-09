const febHolidays = [
    "yaarr mie princess",
    "i ammm sorryyyyy ",
    "yourr anshuz ki glti thii",
    "merkoo smjhna chahiyee thaa",
    "merko gussa nhi krna chahiye tha",
    "muahhhhhhhhhh",
    "Maine shiddat se chaha hai tumhe, I love you❤️",
    "You're my sabb kuchhh ",
    "You are my pyariii sii princess",
    "And of course... wait baby girlz.....",
    "My future wife🤭",
    "kitti pyariii hogii na shreya sandhuu",
    "ek dumm muahhh ",
    "fir ni rhe call vall ki dikkt gussa hora to thppt",
    "koii chkkr hi ni sogya ye wooo ,",
    "jb mrjii tbbb bt tb pyar",
    "perfect.😍",
    "I loveeeee youuuuu",
    "I'm so grateful I met you❤️",
    "kitniii achii ni hojegi lyfff🥺",
    "Main humesa jb mn kre tb hugg krun tujhe",
    "kabhi bhii pyariii se ni mna kre frr tuu ",
    "jb je kreee tabb pyariiii woww🥰",
    "galeeee lagakee sounnn shiyaz koo",
    "schii aur chahiye hi kyAa lyf mee 🥰",
    "wowowowowowowoww",
    "You're the best  myyy baby girll!! 💖",
    "i love youuuuuu meri shiyaaa",
    "yrd fr to m jb chahe tb ek ek chiz btaun tujhee 🤨",
    "Acche lagte hai wo pal jo tumhare",
    "yhi ho ke bas mn ni bhre bt kr kr keee",
    "frr aaega na mja bhi ladaionn kaa , 😢",
    "shreya mere piche belan leke bhagrii 🥰",
    "anshu aage aage shiya piche pichee",
    "muahh muahh muahhhhhhh",
    "yr tu one in a million ni puri dunia me ek hi h, 😘",
    "itniiii pyariii cutuzzzz sii💖",
    "really loves you❤",
    "aaaajaaaaa mieeeee shiyaaaaaaaa",
    "Thanks to God for helping us,ki hum logo ko milaya🙏",
    "You're the love of miee jindagi ,",
    "I Love You So much❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  
