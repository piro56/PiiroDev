
interface LogoInterface {
    className: string;
}

export default function Logo(props: LogoInterface) {

    // Converts bw img to orange
    const orangeify = {
        filter: 'invert(55%) sepia(39%) saturate(6011%) hue-rotate(2deg) brightness(107%) contrast(103%)'
    }

    return (
        <img className={props.className} style={orangeify} src="/src/assets/logo.png"></img>
    )

}