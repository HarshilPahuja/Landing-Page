
export default function Section2Card(props){
    return(
        <div className={`${props.color}  text-white rounded-3xl p-7 w-full max-w-md transform transition-transform duration-300 hover:scale-105 ${props.color}`}> 
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                {props.title}
            </h3>

            <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed">
                {props.content}
            </ul>
        </div>
    );


}


