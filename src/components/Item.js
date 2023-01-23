

const Item = ({ item }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={item.webformatURL} alt="" className="w-full" />
        </div>
    )
}

export default Item
