import React, {useEffect, useState} from 'react';
import {getAngelList} from '../Api/visitor-service';

interface IVisitorProps{

};

const Visitor: React.FC<IVisitorProps> = (props: IVisitorProps) => {

    const [angeList, setAngelList] = useState([]);
    const [filteredAngels, setfilteredAngels] = useState([]);
    const [incomeValue, setIncomeValue] = useState('0');
    const [warning, setWarning] = useState('');

    const treshold = 10000;

    const callForData = async () =>{
        const list = await getAngelList();
        console.log('api list',list);
        setAngelList(list);
    }
    
    useEffect(() => {
        callForData();
    },[])

    const runFilterAlgorithm = () => {
        const filteredList = angeList.filter((elem: any) =>{
            return Math.abs( elem.income - parseInt(incomeValue) ) < treshold;
        })
        setfilteredAngels(filteredList);
        console.log("filter folks", filteredList);
    }

    return(
        <div>
        <input 
            placeholder="type income" 
            onChange={(input)=>{
                console.log("changed", input.target.value);
                if(input.target.value.length < 5){
                    setIncomeValue(input.target.value);
                    setWarning('');
                }
                else{
                    setWarning('you cant type more numbers');
                }
            }}
            value={incomeValue}
            type={"number"}
        ></input> 
        {warning.length > 0 && <h3>{warning}</h3>}
        <button 
            onClick={runFilterAlgorithm}
        >
            Match
        </button>

        <div>
            {filteredAngels.length > 0 && 
                filteredAngels.map((item: any) => {
                    return(
                        <h1 key={item.id}>{item.name}</h1>
                    )
                })
            }
        </div>

       {/* {angeList.map((item: any, index) => {
           return(
               <h1>{item.name}</h1>
           )
       })} */}
       </div>
    )
}

export default Visitor;