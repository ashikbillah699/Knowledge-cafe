

const Bookmarks = ({bookMarks}) => {
    console.log(bookMarks)
    return (
        <section className="w-1/3">
            <h1 className="text-2xl font-bold">Bookmarked Blogs : {bookMarks.length}</h1>
        </section>
    );
};

export default Bookmarks;