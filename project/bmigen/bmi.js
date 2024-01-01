const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');
    const bmi1=(weight/((height*height)/10000)).toFixed(2);


    if(height===''||height<0||isNaN(height)){
        results.innerHTML=`Please give valid height ${height}`

    } else if(weight===''||weight<0||isNaN(weight)){
        results.innerHTML=`please give a valid weight ${weight}`

    

    } else if(bmi1>=24.9){

        results.innerHTML=`your BMI is ${bmi1}, You are overweight`
    }else if(bmi1<=18.6){
        results.innerHTML=`your BMI is ${bmi1}, you are Under weight`
    }else{
        results.innerHTML=`your BMI is ${bmi1},you are normal`
    }





})
