import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClockFour} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

export function Card({item}){
	const {_id,title,views,chips,thumbnail,src,category,creator}=item;
	return <div className="category_card">
		<button><FontAwesomeIcon icon={faClockFour} /></button>
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