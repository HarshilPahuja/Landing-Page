import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';


export default function Section6Card(props){
    const Icon = props.icon;
    return(

    <div className="max-w-xs p-6 text-left">
      
      <div className="mb-6">
        <Icon fontSize="large" className="w-18 h-18 text-blue-600" strokeWidth={2.5} />
      </div>
      <h3 className="text-3xl font-medium text-black mb-3">
        {props.title}
      </h3>
      {/* Description */}
      <p className="text-black text-[18px] font-normal text-base">
        {props.content}
      </p>
      
    </div>
  

    );
}