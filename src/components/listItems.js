const ListItem = (props) =>{
    return (
        <div>
            <p><b>USER ID : </b>{(props.item.id)}</p> 
            <p><b>NAME : </b>{(props.item.name)}</p> 
            <p><b>USERNAME : </b>{(props.item.username) }</p>
        </div>
    )
}
export default ListItem;