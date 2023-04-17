//convertor

const date = {
    "m": {
        "cm": {
            "value": "100"
        },
        "inch": {
            "value": "39.3701"
        },
        "ft": {
            "value": "3.28084"
        },
        "km": {
            "value": "0.001"
        },
        "yard": {
            "value": "1.09361"
        },
        "mm": {
            "value": "1000"
        },
        "m": {
            "value": "1"
        }
    },
    "cm": {
        "m": {
            "value": "0.01"
        },
        "inch": {
            "value": " 0.393701"
        },
        "ft": {
            "value": "0.328084"
        },
        "km": {
            "value": "0.000010"
        },
        "yard": {
            "value": "0,0109361"
        },
        "mm": {
            "value": "10"
        },
        "cm": {
            "value": "1"
        }
    },
    "inch": {
        "cm": {
            "value": "2.54"
        },
        "m": {
            "value": "0.254"
        },
        "ft": {
            "value": "0.833333"
        },
        "km": {
            "value": " 0.0000254 "
        },
        "yard": {
            "value": "0.0277778"
        },
        "mm": {
            "value": "25.4"
        },
        "inch": {
            "value": "1"
        }
    },
    "ft": {
        "cm": {
            "value": "30.48"
        },
        "m": {
            "value": "0.3048"
        },
        "inch": {
            "value": "12"
        },
        "km": {
            "value": "0.0003048"
        },
        "yard": {
            "value": "0.333333"
        },
        "mm": {
            "value": "304.8"
        },
        "ft": {
            "value": "1"
        }
    },
    "mm": {
        "cm": {
            "value": "0.1"
        },
        "m": {
            "value": "0.001"
        },
        "inch": {
            "value": "25.4"
        },
        "km": {
            "value": "0.000001"
        },
        "yard": {
            "value": "0.00109361"
        },
        "mm": {
            "value": "1"
        }
    },
    "km": {
        "cm": {
            "value": "100000"
        },
        "m": {
            "value": "1000"
        },
        "inch": {
            "value": "39370.1"
        },
        "ft": {
            "value": "0.000304"
        },
        "yard": {
            "value": "1093.61"
        },
        "mm": {
            "value": "1000000"
        },
        "km": {
            "value": "1"
        }
    },
    "yard": {
        "cm": {
            "value": "91.44"
        },
        "m": {
            "value": "0.3048"
        },
        "inch": {
            "value": "36"
        },
        "ft": {
            "value": "3"
        },
        "mm": {
            "value": "914.4"
        },
        "km": {
            "value": "0.0009144"
        },
        "yard": {
            "value": "1"
        }
    }
}


const input = document.querySelector('.calc__value');
const select1 = document.querySelector('.calc__select1');
const select2 = document.querySelector('.calc__select2');
const button = document.querySelector('.calc__button');
const answer = document.querySelector('.calc__answer');

const inputDate = {
    "distance": { "unit": "meter", "value": "" },
    "convert_to": 'meter'
}

console.log(inputDate)

const outputDate = { "unit": "", "value": "" };

input.oninput = getDate;
select1.onchange = getDate;
select2.onchange = getDate;
const a = button.addEventListener('click', convert);


function getDate() {
    inputDate.distance.value = input.value;
    inputDate.distance.unit = select1.value;
    inputDate.convert_to = select2.value;
    console.log(inputDate)
}






function convert() {
    try {
        const unit = inputDate.distance.unit;
        const inputUnit = inputDate.convert_to;
        const inputValue = inputDate.distance.value;
      
        if (+inputValue && date[unit] && date[unit][inputUnit] && date[unit][inputUnit]["value"]) {
            console.log(+inputValue)
            console.log(date[unit][inputUnit]["value"])
            let result = (+inputValue * +date[unit][inputUnit]["value"]).toFixed(2);
            outputDate.unit = inputUnit;
            outputDate.value = result;
            answer.innerHTML = `Result ${outputDate.value} ${outputDate.unit}`
            console.log(result)
        } else {
            throw Error('Error')
        }

    } catch (e) {
        answer.innerHTML = e.message;
    }
}


