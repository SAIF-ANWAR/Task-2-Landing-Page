import { useEffect, useState } from "react"

const useProduct = () => {
    const [mobiles, setMobiles] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setMobiles(data))
    }, [])
    return [mobiles]
}
export default useProduct