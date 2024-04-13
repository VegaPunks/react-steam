export const GameGallery = ({images = []}) => {
    let gallery = images.map((image, index) => <img key={index} src={image} alt="preview" />)
    return (
        <div className="game-gallery">{gallery}</div>
    )
}