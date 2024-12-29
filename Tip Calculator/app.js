window.addEventListener('DOMContentLoaded' , ()=>{

    let tipAmount = document.getElementById('tipamount');
    let totalAmount = document.getElementById('totalAmount');
    let billamountinput = document.getElementById('billamount');
    let tippercentageinput = document.getElementById('tippercentage');
    let submitBtn = document.getElementById('submit');

    submitBtn.addEventListener('click' , ()=>{

        let billValue = billamountinput.value;
        let billPercentage = (tippercentageinput.value)/100;

        let calculate = billValue * billPercentage;
        
        tipAmount.value = calculate;

        totalAmount.value = parseFloat(billamountinput.value) + calculate;
    })


})