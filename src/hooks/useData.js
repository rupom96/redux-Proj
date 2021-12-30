import { useEffect, useState } from 'react';

const useData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {

        fetch('https://immense-thicket-22974.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setData(data))


    }, [])


    return [data];
};

export default useData;
