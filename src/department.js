import React from 'react'
const UL = () => {
	return (
		<ul className="UL">
			<li>
				<h2 type="button" onClick={CSE} className="btn" id="cse">
					CSE
				</h2>
			</li>
			<li>
				<h2 className="btn" id="ece">
					ECE
				</h2>
			</li>
			<li>
				<h2 className="btn" id="eee">
					EEE
				</h2>
			</li>
			<li>
				<h2 className="btn" id="ce">
					CE
				</h2>
			</li>
			<li>
				<h2 className="btn" id="me">
					ME
				</h2>
			</li>
		</ul>
	)
}
const CSE = () => {
	window.open('./CSE.html', '_self')
}
export default UL
