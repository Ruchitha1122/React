import RestuarentCard from "./RestuarentCard";
import { resList } from "../utils/mockData";

const Body = () => {
    return (
        <div className="body" >
            <div className="Search"> Search</div>
            <div className="res-container">
            
                {resList.map((restaurant) => (
                    <RestuarentCard resData={ restaurant} />
               ))}
               
            </div>
      </div>
  )
}
export default Body;