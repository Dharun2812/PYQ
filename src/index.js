import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import './responsive.css'
import UL from './department'
//setup varss
function MainContainer() {
	return (
		<div>
			<header>
				<SubH />
				<Dept />
			</header>
		</div>
	)
}

const SubH = () => {
	return (
		<div className="subH">
			<img
				src="https://upload.wikimedia.org/wikipedia/en/c/ca/NIT_Puducherry_Official_logo.png"
				alt="NIT PUDUCHERRY"
			/>
			<h1 id="name">NIT PUDUCHERRY</h1>
		</div>
	)
}

const Dept = () => {
	return (
		<div className="dept">
			<h1 className="bol">Departments</h1>
			<UL />
		</div>
	)
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<MainContainer />)
// ReactDOM.render(<MainContainer />, document.getElementById('root'))
