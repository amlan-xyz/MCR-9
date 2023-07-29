import './style.css'

export function Card({item}){
	const {_id,title,views,chips,thumbnail,src,category,creator}=item;
	return <div className="category_card">
		<button>Watch later</button>
		<img src={thumbnail} alt="" />
		<div className="category_card_body">
			{/* <img src='' alt="" /> */}
			<p>
				{title} <br />
				{views} views | {creator}
			</p>
		</div>
	</div>
}