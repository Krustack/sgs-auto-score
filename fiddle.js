// refactored by Wisanu (use vanilla js)
// version 3 
function copyScore() {
  const init = document.getElementById("init").value || "1";
  const textInput = document.getElementById("text").value.trim().split("\n");

  const score = textInput.map((line) => line.split(/\s/));

  const result = `var eScore = JSON.parse('${JSON.stringify(score)}');
     var init = ${init - 1};
     const lists = document.querySelectorAll(".ticnb");
     eScore.forEach((scoreRow, i) => {
        let row = lists[i].parentElement.querySelectorAll("input");
        scoreRow.forEach((score, j) => {
          row[j + init].value = score;
        });
      });`;
  const copyElement = document.getElementById("copy");
  copyElement.value = result;
  copyElement.select();
  navigator.clipboard
    .writeText(result)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((error) => {
      console.error("Failed to copy text:", error);
    });
}


document.getElementById("run").addEventListener("click", copyScore);

// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("run").addEventListener("click", copyScore);
// });

//this code developed by nong night (use jquery)
// version: 2
// $(document).ready(function() {
// $("#run").click(function(){
// 	var init = $("#init").val() || "1";
//   var textInput = document.getElementById("text").value.replace(/\s+$/, '').split("\n");
//   var result = "";
//   var score = [];
//   for(let i=0; i<textInput.length; i++){
//   	score[i] = textInput[i].split(/\s/);
//   }

//   result += "var eScore = JSON.parse('" + JSON.stringify(score) + "'); "
//   result += "var init = " + (init-1) + "; ";
//   result += 'var tt = $(".ticnb");';
//   result += 'for(let i=0; i<eScore.length; i++){';
//   result += 'let row = $(tt[i]).parent().find("input");';
//   result += 'for(let j=0; j<eScore[i].length; j++){';
//   result += 'row[j + init].value = eScore[i][j];';
//   result += '} }';
//   $("#result")[0].innerHTML = result;
//   $("#copy")[0].value = result;
//   $("#copy")[0].select();
//   document.execCommand("Copy");
// });

// });
/*		// old version
$("#run").click(function(){
	var vName = "score";
  var result = $("#text")[0].value.replace(/\n/g, ",");
  result = result.slice(0,result.length - 1);
  result = vName + "= [" + result + "];";
  $("#result")[0].innerHTML = result;
  $("#copy")[0].value = result;
  $("#copy")[0].select();
  document.execCommand("Copy");
});
*/
