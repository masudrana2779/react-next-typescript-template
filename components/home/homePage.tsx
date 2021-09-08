import React from "react";
import LeftSiteBar from "../leftSiteBar/leftSiteBar";
import ProductWrap from "../productWrap/productWrap";
const HomePage = () => {
    return (
        <div className='mainBodyContent'>
            <LeftSiteBar />
            <ProductWrap />
        </div>
    )
}
export default HomePage;