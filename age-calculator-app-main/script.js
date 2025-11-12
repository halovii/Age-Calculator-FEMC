// @ts-nocheck
// get input values from html inputs //
// update spans: years-h1, months-h1 and days-h1

// dom input vals
const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');

// spans dom
const daysH1 = document.getElementById('days-h1');
const monthsH1 = document.getElementById('months-h1');
const yearsH1 = document.getElementById('years-h1');

// titles
const daysTitle = document.getElementById('days-title');
const monthsTitle = document.getElementById('months-title');
const yearsTitle = document.getElementById('years-title');

function convertToAge() {
    let dayvalid = true;
    let monthvalid = true;
    let yearvalid = true;
    dayVal = dayInput.value;
    monthVal = monthInput.value;
    yearVal = yearInput.value;

    // conditionals to ensure valid input
    if (dayVal <= 0 || dayVal > 31) {
        dayInput.style.borderColor = "#b93131";
        daysH1.textContent = "--"
        dayvalid = false;
    }
    if (monthVal <= 0 || monthVal > 12) {
        monthInput.style.borderColor = "#b93131";
        monthsH1.textContent = "--"
        monthvalid = false;
    }
    if (yearVal <= 1900 || yearVal > 2025) {
        yearInput.style.borderColor = "#b93131";
        yearsH1.textContent = "--"
        yearvalid = false;
    };

    if (!dayvalid || !monthvalid || !yearvalid) {
        return;
    };

    // day.js
    let concatbday = yearVal + "-" + monthVal + "-" + dayVal;
    const inputbday = dayjs(concatbday);
    const todaydate = dayjs()
    const years = todaydate.diff(inputbday, "year");
    const months = todaydate.diff(inputbday.add(years, "year"), "month");
    const days = todaydate.diff(inputbday.add(years, "year").add(months, "month"), "day");

    if (years === 1) {
        yearsTitle.childNodes[1].textContent = "year";
    }
    if (months === 1) {
        monthsTitle.childNodes[1].textContent = "month";
    }
    if (days === 1) {
        daysTitle.childNodes[1].textContent = "day";
    }

    // update dd/mm/yyyy
    daysH1.textContent = days;
    monthsH1.textContent = months;
    yearsH1.textContent = years;
};

// event listeners & animation
yearInput.addEventListener('change', () => {
    convertToAge();
    yearsH1.style.transform = "rotateX(55deg)";
        setTimeout(() => {
        yearsH1.style.transform = "rotateX(0deg)";
    }, 100);
});
monthInput.addEventListener('change', () => {
    convertToAge();
    monthsH1.style.transform = "rotateX(55deg)";
        setTimeout(() => {
        monthsH1.style.transform = "rotateX(0deg)";
    }, 100);
});
dayInput.addEventListener('change', () => {
    convertToAge();
        daysH1.style.transform = "rotateX(55deg)";
        setTimeout(() => {
        daysH1.style.transform = "rotateX(0deg)";
    }, 100);
});