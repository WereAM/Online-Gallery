const UserAlbums = (props) => {
    return (
        <div>
            <p><b>ALBUM ID : </b>{(props.item.id)}</p>
            <p><b>ALBUM TITLE : </b>{(props.item.title)}</p>
        </div>
    )
}

export default UserAlbums;