function redirectTo(url){
    window.location.href = url;
}

// Camera
document.querySelector(".bt-1").addEventListener("click", function(){
    redirectTo("http://192.168.123.5");
});

// Camera
document.querySelector(".bt-cam").addEventListener("click", function(){
    redirectTo("/login");
});


// Temp plot
document.querySelector(".bt-2").addEventListener("click", function(){
    redirectTo("/plot_aht21");
});

// Calling
document.querySelector(".bt-3").addEventListener("click", function(){
    redirectTo("");
});

// Gas plot
document.querySelector(".bt-4").addEventListener("click", function(){
    redirectTo("/plot_mq6");
});

// Temperature Data
document.querySelector(".bt-5").addEventListener("click", function(){
    redirectTo("/aht21");
});

// MQ6 plot 
document.querySelector(".bt-6").addEventListener("click", function(){
    redirectTo("/mq6");
});
// Overall Plot 
document.querySelector(".bt-overall").addEventListener("click", function(){
    redirectTo("/overall");
});


// ESP online check
function checkStatus() {
    fetch('/esp32_status')
        .then(response => response.json())
        .then(data => {
            const esp32_1_status = document.getElementById('esp32_1_status_text');
            const esp32_1_indicator = document.getElementById('esp32_1_indicator');
            const esp32_2_status = document.getElementById('esp32_2_status_text');
            const esp32_2_indicator = document.getElementById('esp32_2_indicator');

            if (data.esp32_1) {
                esp32_1_status.textContent = 'Online';
                esp32_1_indicator.className = 'indicator online';
            } else {
                esp32_1_status.textContent = 'Offline';
                esp32_1_indicator.className = 'indicator offline';
            }

            if (data.esp32_2) {
                esp32_2_status.textContent = 'Online';
                esp32_2_indicator.className = 'indicator online';
            } else {
                esp32_2_status.textContent = 'Offline';
                esp32_2_indicator.className = 'indicator offline';
            }
        })
        .catch(error => console.error('Error fetching status:', error));
}

setInterval(checkStatus, 5000);
// Initial update
updateStatus();