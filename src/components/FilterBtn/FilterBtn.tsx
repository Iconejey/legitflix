import * as React from 'react';
import './FilterBtn.css';

interface FilterBtnProps {
	id: string;
	text: string;
	onClick: () => void;
}

function FilerBtn(props: FilterBtnProps) {
	return (
		<span id={props.id} className="filter">
			{props.text}
		</span>
	);
}

export default FilerBtn;
