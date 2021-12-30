import { useEffect, useState } from 'react';

const useOrder = () => {
    const [order, setOrder] = useState([]);


    useEffect(() => {
        fetch('https://immense-thicket-22974.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrder(data))


    }, [])

    return [order, setOrder];

};

export default useOrder;
