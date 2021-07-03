import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

import model3 from "./images/model-3.jpg";
import modelX from "./images/model-x.jpg";
import modelY from "./images/model-y.jpg";
import modelS from "./images/model-s.jpg";
import solarPanel from "./images/solar-panel.jpg";
import solarRoof from "./images/solar-roof.jpg";
import accessories from "./images/accessories.jpg";

function App() {
	return (
		<Container>
			<Header />
			<Section
				title="Model S"
				description="Order Online for Touchless Delivery"
				backgroundImg={modelS}
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Model Y"
				description="Order Online for Touchless Delivery"
				backgroundImg={modelY}
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Model 3"
				description="Order Online for Touchless Delivery"
				backgroundImg={model3}
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Model X"
				description="Order Online for Touchless Delivery"
				backgroundImg={modelX}
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Solar Panels"
				description="Lowest Cost Solar Panels in America"
				backgroundImg={solarPanel}
				leftButtonText="Order Now"
				rightButtonText="Learn More"
			/>
			<Section
				title="Solar Roof"
				description="Produce Clean Energy From Your Roof"
				backgroundImg={solarRoof}
				leftButtonText="Order Now"
				rightButtonText="Learn More"
			/>
			<Section
				title="Accessories"
				description=""
				backgroundImg={accessories}
				leftButtonText="Shop now"
			/>
			<Footer />
		</Container>
	);
}

export default App;

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	// background-color: #00000060;
	z-index: 10;
`;
