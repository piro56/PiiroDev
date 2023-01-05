import { TypeAnimation } from 'react-type-animation';
export default function TypingAnim() {
    var currentTime = new Date();
    var month = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(currentTime);
    var day = currentTime.getDay().toString();
    var year = currentTime.getFullYear().toString()
    var str = `Today is ${month} ${day}, ${year}`;
    str = "Content coming soon!"

    return (
        <div className="App-TypingAnim">
            <TypeAnimation 
                sequence={[
                'Welcome!', // Types 'One'
                2000, // Waits 1s
                str,
                2000,
                () => {
                    // CALLBACK
                }
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2em' }}
            />
        </div>
        );
}