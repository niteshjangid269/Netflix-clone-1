import './Header.css'
function header() {
    return ( <header>

        <div className='header_inner_shadow'> </div>
        <div className="header_content">
        <div className="header_billboard">
            <img 
            src='https://occ-0-1432-395.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSG41musaqlbUnJhHurYgOS9PT-nTbW_9A6gcIaBBq7qIkRMAs6eULuMY0Ig3gcr3kn1R5JzfV76NnXNWD-QJ6YaJ2y9mqnP44RcweQFzVI6.png?r=60f'
            alt='billboard'>
            </img>
        </div>
        <h4 class="header_desc">
        "This Movie is Based on the Life of Hero named BahuBully.. 
        who is the son of Shivgami.. He was the Brother of BhallalDevvah..
        He is Superiour in Everything.. He Fought to Save His Mama's Life..
        Baaki Ye Netflix CLone Hai.. Yha Nhi chlegi..
        Subscription Leke Dekh le ."
        </h4>
        
        <div className="header_buttons">
            
        <button className="header_button play_button">
            
        
            
            Play</button>   
         <button className="header_button more_info_button">
         
         
         More Info</button>
         
        
        </div>
         </div>
    </header> );
}

export default header;