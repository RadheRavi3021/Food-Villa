const Title= () => (
    <a href="/">
    <img
        className="logo"
        alt="logo"
        // src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"
        //     src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/63bec2840aae54534596e928_Screen%20Shot%202023-01-11%20at%208.20.24%20PM.png"
        //     src="https://img.freepik.com/premium-vector/catering-quality-food-design-logo_187482-593.jpg"
        src="https://marketplace.canva.com/EAFXIvlL2Ns/2/0/1600w/canva-brown-and-black-vintage-food-restaurant-logo-YASJJho2Kzw.jpg"
    />
</a>
);

const Header = () => {
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;