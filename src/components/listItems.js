const ListItem = (props) =>{
    return (
        <div>
            <div><b>NAME : </b>{(props.item.name)}</div> 
            <div><b>USERNAME : </b>{(props.item.username) }</div>
        </div>
    )
}
export default ListItem;