import { useContext } from 'react'

// Context
import DetailContext from "../../context/DetailContext";

const Card = () => {
  const { detailResult } = useContext(DetailContext);
  console.log(detailResult)
  return (
    <div>Card</div>
  )
}

export default Card;