import { SocialIcon } from 'react-social-icons'

export default function Icons(){

    return(
        <div className='flex gap-5'>
            <SocialIcon url="https://www.instagram.com/fyntrest/" style={{ height: 55, width: 55 }}/>
            <SocialIcon url="https://www.facebook.com/fyntrest?mibextid=wwXIfr&rdid=j8viNz59vWDGLCQR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15i8pV7Ppr%2F%3Fmibextid%3DwwXIfr#"  style={{ height: 55, width: 55 }}/>
            <SocialIcon url="https://x.com/fyntrest" style={{ height: 55, width: 55 }}/>
            <SocialIcon url="https://www.linkedin.com/harshil-pahuja" style={{ height: 55, width: 55 }}/>



        </div>
    );
}