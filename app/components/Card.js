const Card = ({header, text, add}) => {
    return (
        <div className="py-8 border rounded bg-gray-200 text-center w-1/4">
            <h3 className="font-bold text-3xl">{header}</h3>
            <h5 className="mt-3 font-semibold text-xl">{text}</h5>
            <p className="mt-5 font-bold text-sm text-gray-500">{add}</p>
        </div>
    )
}

export default Card;