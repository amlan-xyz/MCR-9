import './style.css'

export function Card({image,title}){
	return(
		<div className="card">
			<div className="card_header">
				<img className="card_img" src={image} alt="profile">
				</img>
			</div>
			<div className="card_body">
				<h3 className="card_title">{title}</h3>
			</div>
		</div>
	)
}