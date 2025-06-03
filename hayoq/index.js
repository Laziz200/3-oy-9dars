function checkConditions() {
    const temp = parseInt(document.getElementById("temperature").value);
    const rain = document.getElementById("rain").checked;
    const gym = document.getElementById("gym").checked;
    let result=document.getElementById("result");
    
    if (temp===undefined || isNaN(temp)) {
        result.textContent="HA / YOQ";
        result.className="result";
        return;
    }
    if (temp>=5 && temp<=30 && !rain) {
        result.textContent="HA";
        result.className="result yes";
    }else if(rain && gym){
        result.textContent="HA";
        result.className="result yes";
    }else if(temp<5){
        result.textContent="YOQ";
        result.className="result no";
    }else{
        result.textContent="YOQ";
        result.className="result no";
    }
}
