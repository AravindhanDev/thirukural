import React from 'react';

const Kural = ({ kuralData }) => {
	return (
		<div className="kural">
			<div className="details">
				<p>
					<strong>குறள் எண்:</strong> {kuralData.number}
				</p>
				<p>
					<strong>பால்:</strong> {kuralData.sect_tam}
				</p>
				<p>
					<strong>அத்தியாயம்:</strong> {kuralData.chap_tam}
				</p>
			</div>
			<div className="lines">
				<h3>{kuralData.line1}</h3>
				<h3>{kuralData.line2}</h3>
			</div>
			<p className="expn">
				<strong>விளக்கம்:</strong> {kuralData.tam_exp}
			</p>
		</div>
	);
};

export default Kural;
