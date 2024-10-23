import Profile_img from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div>
            <div className="flex justify-between items-center border-b-2 py-8 mb-8">
                <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
                <img src={Profile_img} alt="" />
            </div>
        </div>
    );
};

export default Header;