const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const input5 = document.getElementById("input5");
const input6 = document.getElementById("input6");

let basic = document.querySelector(".basicSalary");
const nigth30 = document.querySelector(".nigth30");
const extraText = document.querySelector(".extraText");
const holidaysText = document.querySelector(".holidaysText");
const vacationText = document.querySelector(".vacationText");
const btnresult = document.getElementById("btnresult");
const resultShow = document.getElementById("resultShow");
const netto = document.querySelector(".netto");
const brutto = document.querySelector(".brutto");

btnresult.onclick = function () {
  let perHour = Number(input1.value) || 0;
  let days = Number(input2.value) || 0;
  let night = Number(input3.value) || 0;
  let vacations = Number(input4.value) || 0;
  let holidays = Number(input5.value) || 0;
  let extra = Number(input6.value) || 0;

  let basicSum = (days + night) * 8 * perHour;
  basic.textContent = basicSum;

  let nightSum = night * 8 * perHour * 0.3;
  nigth30.textContent = Math.round(nightSum);

  let extraSum = extra * 8 * perHour * 2;
  extraText.textContent = Math.round(extraSum);

  const vacationSum = vacations * 8 * perHour * 1.1;
  vacationText.textContent = Math.round(vacationSum);

  let holidaySum = holidays * 8 * perHour * 1.1;
  holidaysText.textContent = Math.round(holidaySum);

  const sum =
    basicSum + 35000 + 60263 + nightSum + extraSum + vacationSum + holidaySum;
  resultShow.textContent = Math.round(sum);

  netto.textContent = Math.round(sum * 0.335);
  brutto.textContent = Math.round(sum * 0.665);
};
