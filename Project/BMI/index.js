const btnEl = document.getElementById('btn');
const bmiInputEl= document.getElementById('bmi-result');
const weightConditionEl= document.getElementById('weight-condition');

function calculateBMI(){
    const heightValue= document.getElementById('height').value/100;
    const weightValue= document.getElementById('weight').value;
    const bmiValue= weightValue/(heightValue*heightValue);
    const bmiValueRounded= bmiValue.toFixed(7);

    bmiInputEl.value= bmiValueRounded;

    if(bmiValueRounded<18.5){
        weightConditionEl.innerText= 'Underweight';

    }
    else if(bmiValueRounded>=18.5 && bmiValueRounded<=24.9){
        weightConditionEl.innerText= 'Normal';
        
    }
    else if(bmiValueRounded>=25 && bmiValueRounded<=29.9){
        weightConditionEl.innerText= 'Overweight';
        alert('You are at risk of developing heart disease, high blood pressure, diabetes, gallstones, breathing problems, and certain cancers. You should lose weight immediately.');
    }
    else if(bmiValueRounded>=30 && bmiValueRounded<=34.9){
        weightConditionEl.innerText= 'Obese';
        alert('You are at risk of developing heart disease, high blood pressure, diabetes, gallstones, breathing problems, and certain cancers. You should lose weight immediately.');
    }
    else if(bmiValueRounded>=35 && bmiValueRounded<=39.9){
        weightConditionEl.innerText= 'Severely Obese';
        alert('You are at risk of developing heart disease, high blood pressure, diabetes, gallstones, breathing problems, and certain cancers. You should lose weight immediately.');
    }
    else if(bmiValueRounded>=40){
        weightConditionEl.innerText= 'Morbidly Obese';
        alert('You are at risk of developing heart disease, high blood pressure, diabetes, gallstones, breathing problems, and certain cancers. You should lose weight immediately.');
    }
    else{

    }
}


btnEl.addEventListener('click', calculateBMI);