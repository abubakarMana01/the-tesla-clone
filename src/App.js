import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
	return (
		<Container>
			<Header />
			<Section
				title="Model S"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-s.jpg"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Model Y"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-y.jpg"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Model 3"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-3.jpg"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Model X"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-x.jpg"
				leftButtonText="Custom Order"
				rightButtonText="Existing Inventory"
			/>
			<Section
				title="Solar Panels"
				description="Lowest Cost Solar Panels in America"
				backgroundImg="solar-panel.jpg"
				leftButtonText="Order Now"
				rightButtonText="Learn More"
			/>
			<Section
				title="Solar Roof"
				description="Produce Clean Energy From Your Roof"
				backgroundImg="solar-roof.jpg"
				leftButtonText="Order Now"
				rightButtonText="Learn More"
			/>
			<Section
				title="Accessories"
				description=""
				backgroundImg="accessories.jpg"
				leftButtonText="Shop now"
			/>
			<Footer />
		</Container>
	);
}

export default App;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #00000060;
	z-index: 10;
`;
