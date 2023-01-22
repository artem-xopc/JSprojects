import { Accordion } from "react-bootstrap";

const Instruction = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Инструкция по эксплуатации</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>
              Красным отмечены кнопки, функции которых на данный момент не
              доступны;
            </li>
            <li>
              проценты считаются следующим образом: сначала вы вводите первое
              число (над которым необходимо совершить операцию), а затем
              нажимаете на кнопку процента и далее вводите необходимый процент;
            </li>
            <li>
              факториал считается следующим образом: сначала вы вводите первое
              число (над которым необходимо совершить операцию), а затем
              нажимаете на кнопку <strong>x!</strong> и далее нажимаете на{" "}
              <strong>=</strong>;
            </li>
            <li>
              чтобы извлечь из под корня <strong>(√x)</strong> число, необходимо
              провести те же действия, что и для факториала;
            </li>
            <li>
              возведение в квадрат происходит аналогично извлечению из под
              корня;
            </li>
            <li>
              чтобы возвести число в произвольную степень необходимо выполнить
              следующие действия: набрать исходную переменную, затем нажать на
              кнопку <strong>x^</strong> и ввести степень, затем нажать на{" "}
              <strong>=</strong>;
            </li>
            <li>
              <strong>sin - ctg</strong> считаются аналогично извлечению из под
              корня.
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>В разработке и ссылка на репозиторий</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>удаление одного символа из строки ввода;</li>
            <li>заключение выражения в скобки;</li>
            <li>смена радиан на градусы.</li>
          </ul>
          <p>Найти исходный код моего калькулятора вы сможете на <a href="https://github.com/artem-xopc/JScalculator" target="_blank">GitHub</a>.</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Instruction;
