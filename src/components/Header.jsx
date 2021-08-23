import React, {useState} from 'react'

import logo from '../assets/images/logo512.png'
import userIcon from '../assets/images/user-icon.png'


const Header = (props) => {

    const [showUser, setShowUser] = useState(false)

    const toggle = () => {
        props.toggle(true)
    }
    
    const showMenuUser = () => {
        console.log(showUser)
        return setShowUser(!showUser)
    }

    return (
        <div>
            <div className="header">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>
                <div className="header__search">
                    <form action="">
                        <input type="text" placeholder="Tìm kiếm" />
                        <button className="header__search__key">
                            <i className='bx bx-search'></i>
                        </button>
                        <button className="header__search__mic">
                            <i className='bx bxs-microphone'></i>
                        </button>
                    </form>
                </div>
                <div className="header__icon">
                    <i className='bx bx-video-plus'></i>
                    <i className='bx bx-bell'></i>
                    <i className='bx bxs-brightness-half' onClick={toggle}></i>
                    <i className='bx bxs-user-rectangle' onClick={showMenuUser}></i> 

                    <div className={showUser ? "hide__user__menu" : "user__menu"    }>
                        <div className="user__menu__img">
                            <img src={userIcon} alt="" />
                            <div className="user__menu__img__info">
                                <h3>Bùi Nghiêm Trang</h3>
                                <h5>Quản lý tài khoản Google của bạn</h5>
                            </div>
                        </div>
                        <hr />
                        <div className="user__menu__section">
                            <ul className="user__menu__section__icon">
                                <li><i className="bx bx-user-circle"></i></li>
                                <li><i className="bx bx-dollar-circle"></i></li>
                                <li><i className="bx bxs-user-account"></i></li>
                                <li><i className="bx bx-exit"></i></li>
                            </ul>
                            <ul className="user__menu__section__title">
                                <li><p>Kênh của bạn</p></li>
                                <li><p>Giao dịch và gói hội viên</p></li>
                                <li><p>Chuyển đổi tài khoản</p></li>
                                <li><p>Đăng xuất</p></li>
                            </ul>
                        </div>
                        <hr />
                        <div className="user__menu__section">
                            <ul className="user__menu__section__icon">
                                <li><i className="bx bxs-moon"></i></li>
                                <li><i className="bx bx-code-alt"></i></li>
                                <li><i className="bx bx-world"></i></li>
                                <li><i className="bx bxl-redux"></i></li>
                            </ul>
                            <ul className="user__menu__section__title">
                                <li><p>Giao diện</p></li>
                                <li><p>Ngôn ngữ</p></li>
                                <li><p>Địa điểm</p></li>
                                <li><p>Cài đặt</p></li>
                            </ul>
                        </div>
                        <hr />
                        <ul className="user__menu__bot">
                            <li><p>Chế độ hạn chế: Đã tắt</p></li>
                            <li><i className="bx bx-chevron-right"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
