import "./Calculator.css";
import Instruction from "./aux_components/instruction";

const Calculator = () => {
  let firstNum = "";
  let secondNum = "";
  let thirdNum = "";
  let result = "";
  let sign = "";
  let finish = false;

  const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  const operator = [
    "+",
    "-",
    "/",
    "*",
    "%",
    "x!",
    "(",
    ")",
    "x^",
    "lg",
    "x^2",
    "ln",
    "sin",
    "cos",
    "tan",
    "ctg",
    "+/-",
    "√x",
  ];

  // выводим экран калькулятора
  const output = document.getElementsByClassName(".input p");
  // const history_out = document.querySelector(".history");

  // функция очищения экрана
  const clearAll = () => {
    firstNum = "";
    secondNum = "";
    sign = "";
    finish = false;
    output.textContent = 0;
    // history_out.textContent = 0;
  };

  // Функция удаления одного символа из поля output (не работает)
  // const backSpace = () => {
  //   let exp = output.textContent;
  //   output.textContent = epx.substring(0, exp.length - 1);
  // };

  document.getElementsByClassName(".btn_all").onClick = (event) => {
    if (!event.target.classList.contains("btn")) return; // если нажата не кнопка, то мы обрываем выполнение
    if (event.target.classList.contains("clear")) clearAll(); // если нажата кнопка "С", то мы вызываем функцию clearAll

    output.textContent = "0";
    // history_out.textContent = "-"; // Криво работающая история

    const piNum = () => {
      if (firstNum === "" && secondNum === "") {
        firstNum = Math.PI.toFixed(6);
        output.textContent = firstNum;
      } else if (firstNum !== "") {
        secondNum = Math.PI.toFixed(6);
        output.textContent = secondNum;
      }
    };

    const reversSign = () => {
      firstNum = firstNum * -1;
      output.textContent = firstNum;
    };

    if (event.target.classList.contains("pi")) piNum(); // если нажата кнопка "∏", то мы вызываем функцию piNum
    if (event.target.classList.contains("reverse")) reversSign(); // если нажата кнопка "+/-", то мы вызываем функцию reversSign

    const key = event.target.textContent; // Получение значения из массива digit

    // В этом "разделе" описывается логика поведения переменных
    if (digit.includes(key)) {
      if (secondNum === "" && sign === "") {
        if (key === "." && firstNum.includes(".")) {
          // Проверка на присутствие точки. Сделана для того, чтобы невозможно было два и более раз ввести символ "."
          firstNum += "";
          output.textContent = firstNum;
        } else {
          firstNum += key;
          output.textContent = firstNum;
        }
      } else if (firstNum !== "" && secondNum !== "" && finish) {
        secondNum = key;
        finish = false;
        output.textContent = secondNum;
      } else if (key === "." && secondNum.includes(".")) {
        secondNum += "";
        output.textContent = secondNum;
      } else {
        secondNum += key;
        output.textContent = secondNum;
      }
      // if (firstNum !== "" || secondNum !== "") {
      //    history_out.textContent = `${firstNum} ` + `${sign} ` + `${secondNum}`;
      // }
      if (firstNum === "" && secondNum !== "") {
        firstNum = secondNum;
        firstNum += key;
        output.textContent = firstNum;
      }
      console.log(firstNum, secondNum, sign);
      return;
    }

    if (operator.includes(key)) {
      sign = key;
      output.textContent = `${firstNum} ` + `${sign} `;
      console.log(sign);
    }

    const ln = () => {
      if (firstNum <= 0) {
        output.textContent = "Ошибка";
        firstNum = "";
        secondNum = "";
        sign = "";
        return;
      }
      firstNum = Math.log(firstNum).toFixed(2);
      output.textContent = firstNum;
    };

    // В этом "разделе" описывается логика операторов
    if (key === "=") {
      if (secondNum === "") secondNum = firstNum;
      switch (sign) {
        case "+":
          firstNum = +firstNum + +secondNum;
          output.textContent = firstNum;
          break;
        case "-":
          firstNum = firstNum - secondNum;
          output.textContent = firstNum;
          break;
        case "*":
          firstNum = firstNum * secondNum;
          output.textContent = firstNum;
          break;
        case "/":
          if (secondNum === "0") {
            output.textContent = "Ошибка";
            firstNum = "";
            secondNum = "";
            sign = "";
            return;
          }
          firstNum = firstNum / secondNum;
          output.textContent = firstNum;
          break;
        case "%":
          firstNum = (firstNum * secondNum) / 100;
          output.textContent = firstNum;
          break;
        case "x!":
          for (let i = 1; firstNum > 1; firstNum--) {
            i = firstNum * i;
            console.log(i);
            output.textContent = i;
          }
          // output.textContent = i;
          break;
        case "x^":
          firstNum = firstNum ** secondNum;
          output.textContent = firstNum;
          break;
        case "x^2":
          firstNum = Math.pow(firstNum, 2);
          output.textContent = firstNum;
          break;
        case "ln":
          if (firstNum <= 0) {
            output.textContent = "Ошибка";
            firstNum = "";
            secondNum = "";
            sign = "";
            return;
          }
          firstNum = Math.log(firstNum).toFixed(2);
          output.textContent = firstNum;
          break;
        case "lg":
          if (firstNum <= 0) {
            output.textContent = "Ошибка";
            firstNum = "";
            secondNum = "";
            sign = "";
            return;
          }
          firstNum = Math.log(firstNum) / Math.log(secondNum);
          firstNum = firstNum.toFixed(2);
          output.textContent = firstNum;
          break;
        case "sin":
          firstNum = Math.sin(firstNum);
          output.textContent = firstNum;
          break;
        case "cos":
          firstNum = Math.cos(firstNum);
          output.textContent = firstNum;
          break;
        case "tan":
          firstNum = Math.tan(firstNum);
          output.textContent = firstNum;
          break;
        case "ctg":
          firstNum = 1 / Math.tan(firstNum);
          output.textContent = firstNum;
          break;
        case "√x":
          firstNum = Math.sqrt(firstNum).toFixed(3);
          output.textContent = firstNum;
          break;
      }
      finish = true;
      // history_out.textContent = `${firstNum} ` + `${sign} ` + `${secondNum}`;
    }
  };
  return (
    <div>
      <div id="calc">
        {/* <div class="history">
        <p>-</p>
      </div> */}
        <div class="input">
          <p>0</p>
        </div>
        <div class="btn_all">
          <div className="buttn rad" id="tech">
            rad
          </div>
          <div className="buttn sin" id="black">
            sin
          </div>
          <div className="buttn cos" id="black">
            cos
          </div>
          <div className="buttn tan" id="black">
            tan
          </div>
          <div className="buttn ctg" id="black">
            ctg
          </div>

          <div className="buttn clear" id="tech" onClick={clearAll}>
            C
          </div>
          <div className="buttn back" id="err">
            CE
          </div>
          <div className="buttn fact">x!</div>
          <div className="buttn ln">ln</div>
          <div className="buttn log">lg</div>

          <div className="buttn pi" id="orange">
            ∏
          </div>
          <div className="buttn per" id="orange">
            %
          </div>
          <div className="buttn open" id="err">
            (
          </div>
          <div className="buttn close" id="err">
            )
          </div>
          <div className="buttn divide" id="orange">
            /
          </div>

          <div className="buttn sqrt" id="orange">
            √x
          </div>
          <div className="buttn seven">7</div>
          <div className="buttn eight">8</div>
          <div className="buttn nine">9</div>
          <div className="buttn multi" id="orange">
            *
          </div>

          <div className="buttn reverse" id="orange">
            +/-
          </div>
          <div className="buttn four">4</div>
          <div className="buttn five">5</div>
          <div className="buttn six">6</div>
          <div className="buttn plus" id="orange">
            +
          </div>

          <div className="buttn degree" id="orange">
            x^
          </div>
          <div className="buttn one">1</div>
          <div className="buttn two">2</div>
          <div className="buttn three">3</div>
          <div className="buttn minus" id="orange">
            -
          </div>

          <div className="buttn square" id="orange">
            x^2
          </div>
          <div className="buttn" id="zero">
            0
          </div>
          <div className="buttn dot">.</div>
          <div className="buttn equal" id="orange">
            =
          </div>
        </div>
      </div>
      <Instruction />
    </div>
  );
};

export default Calculator;
