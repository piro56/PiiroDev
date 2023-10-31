
interface LogoInterface {
    className?: string;
}

export default function Logo(props: LogoInterface) {

    // Converts bw img to orange
    const orangeify = {
        filter: 'invert(55%) sepia(39%) saturate(6011%) hue-rotate(2deg) brightness(107%) contrast(103%)'
    }

    return (
        <a className = "flex items-center group" href="/">
            <img className="h-8 mr-2 group-hover:text-secondary ease-in duration-150" style={orangeify} src="/src/assets/logo.png"></img>
            <h1 className="text-lg text-txtcol group-hover:text-secondary ease-in duration-150">Limbo</h1>
        </a>
    )

}