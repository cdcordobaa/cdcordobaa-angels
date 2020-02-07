import React, { useEffect, useState } from "react";
import { getAngelList } from "../Api/visitor-service";
import AngelCard from "../Components/AngelCard/AngelCard";
import "./Styles.css";

interface IVisitorProps {}

const Visitor: React.FC<IVisitorProps> = (props: IVisitorProps) => {
  const [angeList, setAngelList] = useState([]);
  const [filteredAngels, setfilteredAngels] = useState([]);
  const [incomeValue, setIncomeValue] = useState("0");
  const [warning, setWarning] = useState("");

  const treshold = 10000;

  const callForData = async () => {
    const list = await getAngelList();
    console.log("api list", list);
    setAngelList(list);
  };

  useEffect(() => {
    callForData();
  }, []);

  const runFilterAlgorithm = () => {
    const filteredList = angeList.filter((elem: any) => {
      return Math.abs(elem.income - parseInt(incomeValue)) < treshold;
    });
    setfilteredAngels(filteredList);
    console.log("filter folks", filteredList);
  };

  const matchSection = () => {
    return (
      <div className="match-section">
        <input
          placeholder="type income"
          onChange={input => {
            console.log("changed", input.target.value);
            if (input.target.value.length < 5) {
              setIncomeValue(input.target.value);
              setWarning("");
            } else {
              setWarning("you cant type more numbers");
            }
          }}
          value={incomeValue}
          type={"number"}
        ></input>
        {warning.length > 0 && <h5>{warning}</h5>}
        <button onClick={runFilterAlgorithm}>Match</button>
      </div>
    );
  };

  const cardSection = () => {
    return (
      <div className="card-row-flex">
        {filteredAngels.length > 0 &&
          filteredAngels.map((item: any) => {
            return <AngelCard key={item.id} {...item}></AngelCard>;
          })}
      </div>
    );
  };

  return (
    <div>
      {matchSection()}
      {(incomeValue !== '' && incomeValue !== "0") && filteredAngels.length < 1 ? 
      <p>Please try a different income value</p> :
      cardSection()
      }
    </div>
  );
};

export default Visitor;
