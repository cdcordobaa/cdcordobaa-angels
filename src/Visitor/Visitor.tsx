import React, {useEffect, useState} from 'react';
import {getAngelList} from '../Api/visitor-service';

interface IVisitorProps{

};

const Visitor: React.FC<IVisitorProps> = (props: IVisitorProps) => {

    const [angeList, setAngelList] = useState({});
    const [incomeValue, setIncomeValue] = useState({});
    
    useEffect(() => {
        const list = getAngelList();
        console.log('api list',list );
    })

    return(<h1>
        hey
    </h1>)
}

export default Visitor;