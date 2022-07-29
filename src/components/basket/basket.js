import './basket.css'

export default function Basket ({onCloseBasket}) {

    return (
        <div className="basket">
            <div className="basket__top">
                <h3>Basket</h3>
                <div className="hamburger">
                    <div onClick={onCloseBasket} className='hamburger__cross'>
                        <span className='first'></span>
                        <span className='second'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
