import './styles.css'


//ASSIM

/*export function Card(props){
    return(
        <div className="card">
          <strong>{props.name}</strong>  
          <small>{props.time}</small>
        </div>
    )
}*/

//OU ASSIM

export function Card({name, time}){
    return(
        <div className="card">
          <strong>{name}</strong>  
          <small>{time}</small>
        </div>
    )
}