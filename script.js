var primaryList = [
  "#0D6667",
  "#13989B",
  "#0697C9",
  "#034C63",
  "#023341",
];

var secondaryList = [
  "#758E32",
  "#7D77BC",
  "#EFA130",
  "#C68F5D",
  "#937B6D",
  "#CC2E2E",
];

var purpleList=[
  "#292740",
  "#3E3B5F",
  "#534F73",
  "#7D77BC",
  "#A9A5D2",
  "#BFBCDD",
  "#D5D3E8",
]

var blackList=[
  "#232323",
  "#353535",
  "#474747",
  "#6B6B6B",
  "#9D9D9D",
  "#B6B6B6",
  "#CFCFCF",
]

var blueList=[
  "#023341",
  "#034c63",
  "#046585",
  "#0697C6",
  "#5AB9DB",
  "#84CAE4",
  "#AEDBED",
]

var darkgreenList=[
  "#073433",
  "#0A4D4D",
  "#0D6667",
  "#13989B",
  "#61BABD",
  "#88CBCE",
  "#AFDCDF",
]

var greenList=[
  "#252E12",
  "#39461A",
  "#4D5E22",
  "#758E32",
  "#A3B476",
  "#BAC798",
  "#D1DABA",
]

var orangeList=[
  "#4F3510",
  "#775018",
  "#9F6B10",
  "#EFA130",
  "#F5C176",
  "#F8D199",
  "#FBE1BC",
]
var brownList=[
  "#422F1D",
  "#63472D",
  "#84573D",
  "#C68F5D",
  "#DAB593",
  "#E4C8AE",
  "#EEDBC9",
]
var darkbrownList=[
  "#2F2725",
  "#483C37",
  "#615149",
  "#937B6D",
  "#B7A79D",
  "#C9BDB5",
  "#DBD3CD",
]
var redList=[
  "#440E0E",
  "#661616",
  "#881E1E",
  "#CC2E2E",
  "#DE7474",
  "#E79797",
  "#F0BABA",
]


function colorpallet(colorName,strColorName){
  console.log(strColorName);
  console.log(colorName)
  var ulcolorName = document.getElementsByClassName(strColorName)[0];
  for (let i=0;i<colorName.length;i++){
    var lineNode = document.createElement('li');
    ulcolorName.append(lineNode);
    lineNode.innerHTML =colorName[i];
    lineNode.style.backgroundColor=colorName[i];
  }
}


var strColorName = 'purpleList'
colorpallet(purpleList,strColorName);

var strColorName = 'primaryList'
colorpallet(primaryList,strColorName);

var strColorName = 'secondaryList'
colorpallet(secondaryList,strColorName);

var strColorName = 'blackList'
colorpallet(blackList,strColorName);

var strColorName = 'blueList'
colorpallet(blueList,strColorName);

var strColorName = 'darkgreenList'
colorpallet(darkgreenList,strColorName);

var strColorName = 'greenList'
colorpallet(greenList,strColorName);

var strColorName = 'orangeList'
colorpallet(orangeList,strColorName);

var strColorName = 'brownList'
colorpallet(brownList,strColorName);

var strColorName = 'darkbrownList'
colorpallet(brownList,strColorName);

var strColorName = 'redList'
colorpallet(brownList,strColorName);