

const Bookmark = ({bookMark}) => {
    return (
        <div className="p-4 bg-[#fff] rounded-md mt-5">
            <h2 className="font-semibold ">{bookMark.title}</h2>
        </div>
    );
};

export default Bookmark;