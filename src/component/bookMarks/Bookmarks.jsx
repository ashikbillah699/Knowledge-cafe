import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({ bookMarks, markAsRead }) => {
    return (
        <section className="w-1/3 bg-[#96949411] p-4 rounded-md">
            <div className=" p-4 rounded-md">
                <h3 className="text-2xl font-bold">Spent time on read : {markAsRead} min</h3>
            </div>
            <div className="p-4 rounded-md">
                <h1 className="text-2xl font-bold">Bookmarked Blogs : {bookMarks.length}</h1>
                <div>
                    {
                        bookMarks.map(bookMark => <Bookmark key={bookMark.id} bookMark={bookMark}></Bookmark>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Bookmarks;