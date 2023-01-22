import "./Calculator.css";
import Instruction from "./aux_components/instruction";

const Calculator = () => {
  return (
    <div className="calc-wrapper">
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
