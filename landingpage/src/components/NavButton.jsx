export default function NavButton(props){

  return  <a href={props.href} className=" hover:text-violet-300 text-[20px]" >
            {props.title}
          </a>
}


//the href here is for testing purposes. you can insert values via navbar.jsx