import React, { useEffect, useState } from "react";
import { getAngelList } from "../Api/visitor-service";
import AngelCard from "../Components/AngelCard/AngelCard";
import "./Styles.css";

interface IVisitorProps {}

const Visitor: React.FC<IVisitorProps> = (props: IVisitorProps) => {
  const treshold = 10000;
  const maxDisplayInList = 3;
  

  const [angeList, setAngelList] = useState([]);
  const [filteredAngels, setfilteredAngels] = useState([]);
  const [incomeValue, setIncomeValue] = useState("0");
  const [warning, setWarning] = useState("");
  const [showMoreTimesClicked, setShowMoreTimesClicked] = useState(1);
  const [matched, setMatched] = useState(false);
  
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
    setShowMoreTimesClicked(1);
    setMatched(true);
    console.log("filter folks", filteredList);
  };

  const onShowMoreClick = () => {
    setShowMoreTimesClicked(showMoreTimesClicked + 1);
    console.log(`showing ${showMoreTimesClicked * maxDisplayInList} Items`);
  };

  const filterBy = (ev: any) => {
    let selectedValue = ev.target.value;
    console.log("select", selectedValue);
    let copy = [...filteredAngels];
    copy.sort((a, b) => {
      if (a[selectedValue] > b[selectedValue]) {
        return -1;
      }
      if (b[selectedValue] > a[selectedValue]) {
        return 1;
      }
      return 0;
    });
    setfilteredAngels(copy);
  };

  const matchSection = () => {
    return (
      <div className="match-section">
        <div>
          <span>Type income </span>
          <input
            placeholder="type income"
            onChange={input => {
              console.log("changed", input.target.value);
              if (input.target.value.length <= 5) {
                setIncomeValue(input.target.value);
                setWarning("");
              } else {
                setWarning("you cant type more numbers");
              }
              setMatched(false);
            }}
            value={incomeValue}
            type={"number"}
          ></input>
        </div>
        {warning.length > 0 && <h5>{warning}</h5>}
        <button onClick={runFilterAlgorithm}>Match</button>
        {filteredAngels.length > 0 && (
          <div>
            <span>Sort By </span>
            <select onChange={filterBy}>
              {Object.keys(filteredAngels[0]).map(key => {
                return <option value={key}>{key}</option>;
              })}
            </select>
          </div>
        )}
      </div>
    );
  };

  const cardSection = () => {
    return (
      <div>
        <div className="card-row-flex">
          {filteredAngels.length > 0 &&
            filteredAngels.map((item: any, index: number) => {
              if (index < maxDisplayInList * showMoreTimesClicked) {
                return <AngelCard key={item.id} {...item}></AngelCard>;
              }
            })}
        </div>
        {filteredAngels.length > 0 &&
          maxDisplayInList * showMoreTimesClicked < filteredAngels.length && (
            <button onClick={onShowMoreClick}>
              <h3>Show More</h3>
            </button>
          )}
      </div>
    );
  };

  return (
    <div>
      {matchSection()}
      {
    matched &&
      incomeValue !== "" &&
      incomeValue !== "0" &&
      filteredAngels.length  < 1 ? 
        <p>Please try a different income value</p>
       : (
        cardSection()
      )}
    </div>
  );
};

export default Visitor;
