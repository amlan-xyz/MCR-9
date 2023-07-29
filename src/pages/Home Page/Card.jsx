import './style.css'

export function Card({item}){
	const {_id,thumbnail,src,category}=item;
	return(
		<div className="card">
		<img className="card_img" src={thumbnail} alt="food_item" />
		<div className="card_body">
		  <h4 className="card_heading">{category}</h4>
		</div>
	  </div>	
	)
}