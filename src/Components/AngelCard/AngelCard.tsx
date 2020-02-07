import * as React from 'react';
import Mavatar from '../../Static/Avatar.png'; 
import Favatar from '../../Static/Avatar.png'; 

import "./Styles.css"

export interface IAngelCardProps {
    name: string;
    avatar: string;
    income: number;
    id: number;
    gender: string;
}

const AngelCard: React.FC<IAngelCardProps> = (props: IAngelCardProps) => {
  return (
    <div className="card-container">
        <img src={props.gender==='female'? Favatar: Mavatar} alt="avatar" height={85} width={85}/>
        <h2>income: {props.income}</h2>
        <h3>name: {props.name} </h3>
        <h3>id: {props.id} </h3>
    </div>
  );
}


export default AngelCard