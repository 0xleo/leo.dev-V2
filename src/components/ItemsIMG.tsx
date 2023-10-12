interface Props{
    src: string;
    className: string;
    alt: string;
}

export const ItemsIMG = ({src, className, alt}: Props) => {
    return <img src={src} className={className} alt={alt} />;
};