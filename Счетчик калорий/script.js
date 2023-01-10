let count = document.querySelector('.calculate_2');
let physAct;
age.value = 0;
height.value = 0;
weight.value = 0;
count.setAttribute('disabled', true);
let brush = document.querySelector('.calculate_3');
brush.setAttribute('disabled', true);
age.oninput = function () {
  if (age.value != 0 && height.value != 0 && weight.value != 0) {
    count.removeAttribute('disabled');
  }
  else {
    count.setAttribute('disabled', true);
  }
  if (age.value != 0 || height.value != 0 || weight.value != 0) {
    brush.removeAttribute('disabled');
  }
  else {
    brush.setAttribute('disabled', true);
  }
}
weight.oninput = function () {
  if (age.value != 0 && height.value != 0 && weight.value != 0) {
    count.removeAttribute('disabled');
  }
  else {
   count.setAttribute('disabled', true);
  }
  if (age.value != 0 || height.value != 0 || weight.value != 0) {
    brush.removeAttribute('disabled');
  }
  else {
    brush.setAttribute('disabled', true);
  }

}
height.oninput = function () {
  if (age.value != 0 && height.value != 0 && weight.value != 0) {
    count.removeAttribute('disabled');
  }
  else {
    count.setAttribute('disabled', true);
  }
  if (age.value != 0 || height.value != 0 || weight.value != 0) {
    brush.removeAttribute('disabled');
  }
  else {
      brush.setAttribute('disabled', true);
  }
}
  brush.onclick = function () {
  brush.setAttribute('disabled', true);
  age.value = 0;
  height.value = 0; 
  weight.value = 0;
  document.querySelector('.footer').classList.add('hidden_container');
}
  count.onclick = function () {
  document.querySelector('.footer').classList.remove('hidden_container');
  count.setAttribute('disabled', true);
  let a = document.getElementsByName('activity');
  for (let i = 0; i<a.length; i++) {
  if (a[i].checked) {
    physAct = a[i].value;
  }
}
let calories2;
let calories3;
let calories1;
let ratioAct = 1.2;
if (physAct == 'mi') {
  ratioAct = 1.2;
}
else if (physAct == 's') {
  ratioAct = 1.375;
}
else if (physAct == 'me') {
  ratioAct = 1.55;
}
else if (physAct == 'h') {
  ratioAct = 1.725;
}
else if (physAct == 'vh') {
  ratioAct = 1.9;
}
if ('gender' == 'male') {
calories1 = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) + 5;
calories1 *= ratioAct;
}
else {
calories1 = (10 * weight.value) + (6.25 * height.value) - (5* age.value) - 161;
}
calories2 = calories1 - (calories1 / 100 * 15);
calories3 =  calories1 + (calories1/ 100 * 15);
document.querySelector('.calories1').innerHTML = Math.round(calories1) + ' ккал';
document.querySelector('.calories2').innerHTML = Math.round(calories2) + ' ккал';
document.querySelector('.calories3').innerHTML = Math.round(calories3) + ' ккал';
}

  