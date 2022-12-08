import classes from './Card.module.css';

const Card = (props : any) => {
    return <div className="bg-white rounded shadow-2xl">{props.children}</div>;
}

export default Card