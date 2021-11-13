const normalChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const font1 = ["𝔞", "𝔟", "𝔠", "𝔡", "𝔢", "𝔣", "𝔤", "𝔥", "𝔦", "𝔧", "𝔨", "𝔩", "𝔪", "𝔫", "𝔬", "𝔭", "𝔮", "𝔯", "𝔰", "𝔱", "𝔲", "𝔳", "𝔴", "𝔵", "𝔶", "𝔷", "𝔄", "𝔅", "ℭ", "𝔇", "𝔈", "𝔉", "𝔊", "ℌ", "ℑ", "𝔍", "𝔎", "𝔏", "𝔐", "𝔑", "𝔒", "𝔓", "𝔔", "ℜ", "𝔖", "𝔗", "𝔘", "𝔙", "𝔚", "𝔛", "𝔜", "ℨ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const font2 = ["ａ", "𝔟", "ς", "𝖉", "𝔢", "𝕗", "Ğ", "𝐡", "𝐈", "Ｊ", "ķ", "𝐥", "𝕄", "ℕ", "ｏ", "ק", "𝐐", "𝓻", "Ş", "ᵗ", "𝐮", "𝓋", "Ŵ", "Ｘ", "𝓎", "𝔃", "Ⓐ", "乃", "¢", "𝐃", "𝐞", "𝔽", "𝔾", "𝐇", "Ꭵ", "Ĵ", "Ќ", "Ⓛ", "ᵐ", "Ⓝ", "ⓞ", "ρ", "𝕢", "Ⓡ", "𝐬", "𝓉", "𝕦", "ᵛ", "ᗯ", "᙭", "𝕐", "ℤ", "ʘ", "➀", "２", "３", "４", "❺", "➅", "❼", "❽", "➈"];

const font3 = ["𝓪", "𝓫", "𝓬", "∂", "𝓮", "𝓯", "𝓰", "𝓱", "𝓲", "𝓳", "𝓴", "𝓵", "𝓶", "𝓷", "𝓸", "𝓹", "𝓺", "𝓻", "𝓼", "𝓽", "𝓾", "𝓿", "𝔀", "𝔁", "𝔂", "𝔃", "𝓐", "𝓑", "𝓒", "𝓓", "𝓔", "𝓕", "𝓖", "𝓗", "𝓘", "𝓙", "𝓚", "𝓛", "𝓜", "𝓝", "𝓞", "𝓟", "𝓠", "𝓡", "𝓢", "𝓣", "𝓤", "𝓥", "𝓦", "𝓧", "𝓨", "𝓩", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const font4 = ["𝒶", "𝒷", "𝒸", "𝓭", "𝑒", "𝒻", "𝑔", "𝒽", "𝒾", "𝒿", "𝓀", "𝓁", "𝓂", "𝓃", "𝑜", "𝓅", "𝓆", "𝓇", "𝓈", "𝓉", "𝓊", "𝓋", "𝓌", "𝓍", "𝓎", "𝓏", "𝒜", "𝐵", "𝒞", "𝒟", "𝐸", "𝐹", "𝒢", "𝐻", "𝐼", "𝒥", "𝒦", "𝐿", "𝑀", "𝒩", "𝒪", "𝒫", "𝒬", "𝑅", "𝒮", "𝒯", "𝒰", "𝒱", "𝒲", "𝒳", "𝒴", "𝒵", "𝟢", "𝟣", "𝟤", "𝟥", "𝟦", "𝟧", "𝟨", "𝟩", "𝟪", "𝟫"];

const font5 = ["𝕒", "𝕓", "𝕔", "ᴅ", "𝕖", "𝕗", "𝕘", "𝕙", "𝕚", "𝕛", "𝕜", "𝕝", "𝕞", "𝕟", "𝕠", "𝕡", "𝕢", "𝕣", "𝕤", "𝕥", "𝕦", "𝕧", "𝕨", "𝕩", "𝕪", "𝕫", "𝔸", "𝔹", "ℂ", "𝔻", "𝔼", "𝔽", "𝔾", "ℍ", "𝕀", "𝕁", "𝕂", "𝕃", "𝕄", "ℕ", "𝕆", "ℙ", "ℚ", "ℝ", "𝕊", "𝕋", "𝕌", "𝕍", "𝕎", "𝕏", "𝕐", "ℤ", "𝟘", "𝟙", "𝟚", "𝟛", "𝟜", "𝟝", "𝟞", "𝟟", "𝟠", "𝟡"];

const font6 = ["𝒶", "𝒷", "𝒸", "𝒹", "𝑒", "𝒻", "𝑔", "𝒽", "𝒾", "𝒿", "𝓀", "𝓁", "𝓂", "𝓃", "🍪", "𝓅", "𝓆", "𝓇", "𝓈", "𝓉", "𝓊", "𝓋", "𝓌", "𝓍", "𝓎", "𝓏", "𝒜", "𝐵", "𝒞", "𝒟", "𝐸", "𝐹", "𝒢", "𝐻", "𝐼", "𝒥", "𝒦", "𝐿", "𝑀", "𝒩", "☯", "𝒫", "𝒬", "𝑅", "𝒮", "𝒯", "𝒰", "𝒱", "𝒲", "𝒳", "𝒴", "𝒵", "💗", "𝟣", "𝟤", "𝟥", "𝟦", "𝟧", "𝟨", "𝟩", "𝟪", "𝟫"];

const font7 = ["ᴀ", "ʙ", "ᴄ", "ｄ", "ᴇ", "ꜰ", "ɢ", "ʜ", "ɪ", "ᴊ", "ᴋ", "ʟ", "ᴍ", "ɴ", "ᴏ", "ᴘ", "Q", "ʀ", "ꜱ", "ᴛ", "ᴜ", "ᴠ", "ᴡ", "x", "ʏ", "ᴢ", "ᴀ", "ʙ", "ᴄ", "ᴅ", "ᴇ", "ꜰ", "ɢ", "ʜ", "ɪ", "ᴊ", "ᴋ", "ʟ", "ᴍ", "ɴ", "ᴏ", "ᴘ", "Q", "ʀ", "ꜱ", "ᴛ", "ᴜ", "ᴠ", "ᴡ", "x", "ʏ", "ᴢ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const font8 = ["6" ,"8" ,"ㄥ" ,"9" ,"ގ" ,"ㄣ" ,"Ɛ" ,"ᄅ" ,"⇂" ,"0" ,"Z" ,"⅄" ,"X" ,"M" ,"Λ" ,"∩" ,"⊥" ,"S" ,"ᴚ" ,"Ό" ,"Ԁ" ,"O" ,"N" ,"W" ,"˥" ,"⋊" ,"ſ" ,"I" ,"H" ,"⅁" ,"Ⅎ" ,"Ǝ" ,"ᗡ" ,"Ɔ" ,"ᙠ" ,"∀" ,"z" ,"ʎ" ,"x" ,"ʍ" ,"ʌ" ,"n" ,"ʇ" ,"s" ,"ɹ" ,"b" ,"d" ,"o" ,"u" ,"ɯ" ,"l" ,"ʞ" ,"ɾ" ,"ı" ,"ɥ" ,"ɓ" ,"ɟ" ,"ǝ", "p","ɔ" ,"q" ,"ɐ"];

const font9 = ["🄰", "🄱", "🄲", "🄴", "🄴", "🄵", "🄶", "🄷", "🄸", "🄹", "🄺", "🄻", "🄼", "🄽", "🄾", "🄿", "🅀", "🅁", "🅂", "🅃", "🅄", "🅅", "🅆", "🅇", "🅈", "🅉", "🄰", "🄱", "🄲", "🄳", "🄴", "🄵", "🄶", "🄷", "🄸", "🄹", "🄺", "🄻", "🄼", "🄽", "🄾", "🄿", "🅀", "🅁", "🅂", "🅃", "🅄", "🅅", "🅆", "🅇", "🅈", "🅉", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const font10 = ["🅰", "🅱", "🅲", "🅳", "🅴", "🅵", "🅶", "🅷", "🅸", "🅹", "🅺", "🅻", "🅼", "🅽", "🅾", "🅿", "🆀", "🆁", "🆂", "🆃", "🆄", "🆅", "🆆", "🆇", "🆈", "🆉", "🅰", "🅱", "🅲", "🅳", "🅴", "🅵", "🅶", "🅷", "🅸", "🅹", "🅺", "🅻", "🅼", "🅽", "🅾", "🅿", "🆀", "🆁", "🆂", "🆃", "🆄", "🆅", "🆆", "🆇", "🆈", "🆉", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

fonts = [font1, font2, font3, font4, font5, font6, font7, font8, font9, font10];

let currentFont = font10;

const input = document.querySelector('input');

input.addEventListener('input', updateValue);

const formatText = async (text = document.getElementById("inputField").value, font = currentFont) => {
  console.log("NEW FORMAT!", text, font);
  let newText = "";
  for (i in text) {
    let flag = false;
    for (c in normalChars) {
      if (normalChars[c] == text[i]) {
        newText = newText + font[c];
        flag = true;
      }
    }
    if (flag == false) {
      newText = newText + text[i];
    }
  }
  return newText;
}

function updateValue(e) {
  var outputObj = document.getElementById("outputField");
  formatText(document.getElementById("inputField").value).then(newText => outputObj.value = newText)
}

const generateFontTexts = async () => {
  for (font in fonts) {
    var res = "";
    await formatText("Hello World", fonts[font]).then(newText => res = newText)
    var paragraph = document.createElement("button");
    paragraph.class = "dropdown-item";
    paragraph.setAttribute("onClick", "javascript: switchFont(+"+font.toString()+");");
    paragraph.innerText = res;
    document.getElementById("dropdown-menu").append(paragraph)
  }
}

const switchFont = async (font) => {
  var outputObj = document.getElementById("outputField");
  console.log("NEW FONT");
  currentFont = fonts[parseInt(font)];
  await formatText(document.getElementById("inputField").value, currentFont).then(newText => outputObj.value = newText);
}

function copy() {
  var copyText = document.getElementById("outputField");
  copyText.select();
  document.execCommand("copy");
}

generateFontTexts();