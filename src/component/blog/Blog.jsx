
const Blog = ({ blog, handleAddToBookMarks, handleMarkAsRead }) => {
    const { author, author_img, cover, hashtags, posted_data, reading_time, title,} = blog;
    return (
        <div className="mb-20">
            <img className="h-[450px] w-full rounded-md" src={cover} alt="" />
            <div>
                <div className="flex justify-between items-center mb-3 mt-9">
                    <div className="flex items-center gap-6">
                        <img className="w-16 h-16 rounded-full" src={author_img} alt="" />
                        <div>
                            <h4 className="2xl font-bold text-[#111111]">{author}</h4>
                            <small className="font-semibold text-[#858282]">{posted_data}</small>
                        </div>
                    </div>
                    <div>
                        <small className="text-sm text-[#858282]">0{reading_time} min read <button onClick={()=>handleAddToBookMarks(blog)}>
                            <img className="inline w-6 h-6" src="https://img.icons8.com/?size=24&id=82461&format=png" alt="" />
                        </button></small>
                    </div>
                </div>
                <div className="mb-8">
                    <h3 className="text-4xl font-bold mb-2">{title}</h3>
                    {/* <small className="font-semibold text-[#858282]">{hashtags}</small> */}
                    {
                        hashtags.map((hash, idx) => <small key={idx} className="font-semibold text-[#858282]"> {hash} </small>)
                    }
                </div>
                <a onClick={()=> handleMarkAsRead(reading_time)} className="text-lg font-semibold text-[#6047EC]" href="#">Mark as read</a> 
            </div>
        </div>
    );
};

export default Blog;

// author
// :
// "John Doe"
// author_img
// :
// "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
// cover
// :
// "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg"
// hashtags
// :
// (3) ['#React', '#Hooks', '#JavaScript']
// id
// :
// 1
// posted_data
// :
// "2024-10-01"
// reading_time
// :
// "5"
// title
// :
// "Understanding React Hooks"