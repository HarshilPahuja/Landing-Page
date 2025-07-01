const d = new Date();
let year = d.getFullYear();

export default function FooterDate(){

    return <footer>
       <p> © {year} by Fyntrest Education Pvt Ltd</p>
        
    </footer>
}