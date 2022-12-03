function Card(props){
    const classes = 'card ' + props.ClassName
    return <div className={classes}>{props.childen}</div>
}

export default Card;