import { useSelector } from "react-redux"
import { apiImage } from "../api/toDoApi";
import type { IImg } from "../reducers/toDoRedux";

const Info = () => {
  const { info } = useSelector((state: any) => state.counter)
  console.log(info);
  return (
    <div>
      {
        info?.images.map((img: IImg) => {
          return <div>
            <img src={`${apiImage}/${img.imageName}`} alt="" />
          </div>
        })
      }
      <h2>{info?.name}</h2>
      <p>{info?.description}</p>
    </div>
  )
}

export default Info