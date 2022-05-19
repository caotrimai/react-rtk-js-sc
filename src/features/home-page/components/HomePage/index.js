import Divider from "~/components/Divider";
import StyleHomePage from '~/features/home-page/components/HomePage/SC.HomePage'
import FraudActivity from "../FraudActivity";
import FraudUserRiskHour from "../FraudUserRiskHour";
import ReportTable from "~/features/home-page/components/ReportTable";

export default function HomePage() {

  return (
    <StyleHomePage className='HomePage'>
      <div className='TopChart'>
        <FraudActivity/>
        <FraudUserRiskHour/>
      </div>
      <Divider/>
      <div className='ReportTable'>
        <ReportTable/>
      </div>
    </StyleHomePage>
  )
}