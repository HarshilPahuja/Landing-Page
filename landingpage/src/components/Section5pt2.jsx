

export default function Section5Pt2(props){

    return(

        
    <div className="bg-black text-white pt-20 rounded-xl max-w-xl">
      <h2 className="text-purple-300 text-2xl sm:text-3xl font-n flex items-center gap-2">
        <span className="text-purple-300 font-light mr-1.5">{props.number}</span>
        <span>{props.title}</span>
      </h2>

      <ul className="font-light list-disc pl-5 mt-4 ml-4 text-lg sm:text-2xl text-gray-100 leading-relaxed">
        <li className="max-w-md sm:max-w-sm">
          {props.content}
        </li>
      </ul>
    </div>
        

    );

}