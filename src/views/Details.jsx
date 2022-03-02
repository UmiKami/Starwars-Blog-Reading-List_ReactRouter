import { useContext } from "react";
import { Context } from "../store/appContext";

const Details = () => {
    const { actions, store } = useContext(Context);


    return <>
        <div>hello</div>
    </>
}

export default Details