import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = props?.resData;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-200" /*style={{ backgroundColor: "#f0f0f0" }}*/>
      <img
        className="rounded-xl"
        alt="resLogo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="font-bold">{avgRating}⭐</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {

  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }


}

export default RestaurantCard;
