import Chart from "../../components/chart/Chart" 
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css";
import { userData } from "../../dummyData"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/WidgetLg"


function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home
