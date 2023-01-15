import "./Card.css"
const Card = (props) => {

    const classes= 'card ' + props.className; // for adding extra classes to card.
  return <div className={classes}>{props.children}</div>
}

export default Card;

//props.childern is the default props gives us the facality of warping component
//by which inside the opening and closing tag we can put more component.