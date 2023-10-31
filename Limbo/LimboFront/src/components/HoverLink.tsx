
interface HoverLinkInterface {
        children?: string;
        href?: string; 
        className?: string;
}

export default function HoverLink(props: HoverLinkInterface) {
    
    let className = (props.className == undefined) ? '' : props.className;
    className = className + " text-lg text-txtcol ease-in duration-150 hover:text-secondary hover:underline";
    const href = (props.href == undefined) ? '/' : props.href;
    return (
        <h1 className={className}>
            <a href={href}>{props.children}</a>
        </h1>
    )

}