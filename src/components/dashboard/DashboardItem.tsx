import { RootObject } from "../../store/getcoins/coins.types";
import '../../styles/dashboard_item.css'

export const DashboardItem = ({ props }: { props: RootObject }) => {
    const convert = (num: number) => {
        const dotIndex = num.toString().split('').findIndex(item => item === '.');
        return num.toString().slice(0, dotIndex + 3)
    }
    const changeProps = props.price_change_percentage_24h < 0? 
    { background: '#FF44441A', color: '#FF4D4D' }: { background: 'rgba(8, 209, 88, 0.1) ', color: '#6CCF59' };
    return (
        <div className="dashboard_item">
          <div className="dash">
            <div className="dashboard_photo">
              <img src={props.image} alt={props.name}  />
            </div>
            <div className="dashboard_name">
              <h2 className="dashboard_title">{ props.name }</h2>
              <h2 className="dashboard_symbol">{ props.symbol.toUpperCase() }</h2>
            </div>
          </div>
          <div className="change_cont">
            <div className="change" style={{ ...changeProps }}>
              <h2 style={{ color: changeProps.color }}>{convert(props.price_change_percentage_24h)} % </h2>
            </div>
          </div>
          <div className='price'>
            <h2>{props.current_price} $</h2>
          </div>
          <div className='volume'>
            <h2>{ props.total_volume } $</h2>
          </div>
        </div>
    )
}