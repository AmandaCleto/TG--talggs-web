import styled from 'styled-components'


export const PositionStyle = styled.div`
	height: 89vh;
    display: flex;
	flex-direction: column;
	align-items:center;
`

export const ButtonsTopStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: flex-start;
	width: 100vw;
	height: 11vh;
  
	button {
		background-color: transparent;
		border: none;
		margin: 15px;
		font-size: 1.8em;
		color: #F2A950;
		cursor: pointer;
		transition: all 0.2s ease-out;	

		:hover {
			opacity: 0.6;
			border-bottom: 3px solid #F2A950;
		}

		:focus, :active {
			outline: 0;
			border-bottom: 3px solid #F2A950;
		}
	} 

	@media only screen and (max-width: 1200px) {
		button {
			width: auto;
		}
	}
	
`

export const GraphicsStyle = styled.div`
	display: flex;
	align-items: center;
	height: 52vh;
	width: 56vw;
	border: 1px solid #CCC;
	border-radius: 15px;
	font-size: .8em;
	
	@media only screen and (max-width: 1200px) {
		width: 75vw;
		border: 2px solid #CCC;
	}

	@media only screen and (max-width: 850px) {
		width: 88vw;
	}

`
export const BottomPositionStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30vw;
	height: 20vh;

	button:focus {
		outline: 0;
	}
`
export const CheckBoxStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	padding: 5px;
	width: 100%;
	border: 1px solid #ccc;
	border-radius: 10px;
	position: relative;
	color: #2D4F6C;

	legend {
		font-weight: bold;
	}

	@media only screen and (max-width: 1200px) {
		font-size: 1.8em;
	}

	@media only screen and (max-width: 850px) {
		font-size: 1.5em;
	}

`

export const BoxPositionStyle = styled.div`
	display: flex;
	flex-wrap: inherit;
	flex-direction: row;
	width: 100%;
	padding: 5px;

	label {
		margin-left:5px;
		color: #2D4F6C;
	}
	
	input {
		width: 50px;		
		height: 30px;
		cursor: pointer;
	}

	@media only screen and (max-width: 850px) {
		input {
			width: 22px;		
		}
	}

`