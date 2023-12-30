const newYears = new Date("29 March 2024");
    
    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = newYears - currentDate;
    
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("mins").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }
    
    function countdown() {
        updateCountdown();
        setInterval(updateCountdown, 1000); // Update every second
    }
    
    countdown();