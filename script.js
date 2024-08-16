document.addEventListener("DOMContentLoaded", function () {
    let day = document.querySelector(".day label");
    let month = document.querySelector(".month label");
    let year = document.querySelector(".year label");
    let dayInput = document.querySelector(".day input");
    let monthInput = document.querySelector(".month input");
    let yearInput = document.querySelector(".year input");
    let calculateButton = document.querySelector("button");

   

    let dayError = document.querySelector(".day .error-message");
    let monthError = document.querySelector(".month .error-message");
    let yearError = document.querySelector(".year .error-message");



    function validateInput() {
        let isValid = true;

        // Validate day
        if (isNaN(dayInput.value) || dayInput.value < 1 || dayInput.value > 31) {
            dayError.textContent = "Please enter a valid day.";
            dayError.style.display = "block";
            day.style.color = "red";
            isValid = false;
        } else {
            dayError.style.display = "none";
            day.style.color = "";

        }

        
        if (isNaN(monthInput.value) || monthInput.value < 1 || monthInput.value > 12) {
            monthError.textContent = "Please enter a valid month.";
            monthError.style.display = "block";
            month.style.color = "red";
            isValid = false;
        } else {
            monthError.style.display = "none";
            day.style.color = "";
        }

        
        let currentYear = new Date().getFullYear();
        if (isNaN(yearInput.value) || yearInput.value > currentYear || yearInput.value.length !== 4) {
            yearError.textContent = "Please enter a valid year.";
            yearError.style.display = "block";
            year.style.color = "red";
            isValid = false;
        } else {
            yearError.style.display = "none";
            day.style.color = "";
        }

        return isValid;
    }

    function calculateAge() {
        if (!validateInput()) {
            return; 
        }

        let day = parseInt(dayInput.value);
        let month = parseInt(monthInput.value);
        let year = parseInt(yearInput.value);

        let today = new Date();
        let currentDay = today.getDate();
        let currentMonth = today.getMonth() + 1;
        let currentYear = today.getFullYear();

        let ageYears = currentYear - year;
        let ageMonths = currentMonth - month;
        let ageDays = currentDay - day;

        if (ageDays < 0) {
            ageMonths -= 1;
            ageDays += new Date(currentYear, currentMonth - 1, 0).getDate();
        }

        if (ageMonths < 0) {
            ageYears -= 1;
            ageMonths += 12;
        }

        document.querySelector(".display h1:nth-child(1) span").textContent = `${ageYears} `;
        document.querySelector(".display h1:nth-child(2) span").textContent = `${ageMonths} `;
        document.querySelector(".display h1:nth-child(3) span").textContent = `${ageDays} `;
    }

    calculateButton.addEventListener("click", calculateAge);
});
