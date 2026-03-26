import { useSelector } from "react-redux"
import type { IImg } from "../reducers/toDoRedux";
import { apiImage } from "@/api/ToDoApi";

const Info = () => {
    const { info } = useSelector((state: any) => state.counter)
    console.log(info);
    return (
        <div>
            {
                info?.images.map((img: IImg) => {
                    return <div>
                        <img className="w-[50%] h-150 m-auto my-5" src={`${apiImage}/${img.imageName}`} alt="" />
                    </div>
                })
            }
            <h2 className="font-bold text-center mb-5"> Name: {info?.name}</h2>
            <p className="font-semibold text-center">Description: {info?.description}</p>
        </div>
    )
}

export default Info