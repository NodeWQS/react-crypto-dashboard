import { DashboardItem } from "./DashboardItem";
import '../../styles/dashboard.css';
import { useGetCoinsQuery } from "../../store/getcoins/coins.api";

export const Dashboard = () => {
    const {isLoading, isError, data } = useGetCoinsQuery(null, {
        refetchOnFocus: true
    });
    return (
        <div className="container" id="cont" style={{ border: '1px solid #1A1A1A', borderRadius: '12px' }}>
            { 
            isError? <h3 style={{ color: 'white' }}>OOPS but i have problem.</h3>: 
            isLoading? <h3 style={{ color: 'white' }}>loading</h3>: (
            <>
              <div className="dashboard_fields">
                <div className="first">
                    <h2>Name</h2>
                </div>
                <div className="first">
                    <h2>Change(24h)</h2>
                </div>
                <div className="first">
                    <h2>Price</h2>
                </div>
                <div className="first">
                    <h2>Volume(24h)</h2>
                </div>
                
              </div>
              {data?.map(item => <DashboardItem props={item} key={item.id} />)}
            </>
            )}
        </div>
    )   
}