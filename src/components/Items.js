import Item from './Item';

const Items = ({ items }) => {

    return (
        <div className="grid grid-cols-3 gap-4">
            {items.map(item => {
                return <Item key={item.id} item={item} />
            })}
        </div>
    )
}

export default Items
