import React from 'react'
import '../App.css'

export default function LeftApp() {
  return (
    <>
    
    <div className="subContent leftApp"><br/>
            <div className="headerContainer">
                <span className="headerText">Latest Feed</span><br/>
            </div>
            <div className="postsContainer">
                <div className="post">
                    <div className="userInfo">
                        <div className="avatarBox">
                            <img src="https://images.unsplash.com/photo-1680696981324-bac5babc9fdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80" alt="Avatar" className="avatar"/>
                        </div>
                        <div className="userCreds">
                            <span className="userName">Ansh Deshraj</span>
                            <span className="username">@anshdeshraj</span>
                        </div>
                    </div>
                    <div className="postTitle">
                        <span className="title">Beautiful Scenic Wallpaper</span>
                    </div>
                    <div className="postImageContainer">
                        <div className="postImage">
                            <img src="https://images.unsplash.com/photo-1676085272653-5e77875eed3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="" className="postTopImage"/>
                        </div>
                    </div>
                    <div className="postButtons">
                        <a href="" className="postLinks">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Interface / Heart_01">
                                <path id="Vector" d="M12 7.69431C10 2.99988 3 3.49988 3 9.49991C3 15.4999 12 20.5001 12 20.5001C12 20.5001 21 15.4999 21 9.49991C21 3.49988 14 2.99988 12 7.69431Z" stroke="rgba(255, 255, 255, 0.816)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                </svg>
                        </a>
                        <a href="" className="postLinks">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_429_11233)">
                                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4876 3.36093 14.891 4 16.1272L3 21L7.8728 20C9.10904 20.6391 10.5124 21 12 21Z" stroke="rgba(255, 255, 255, 0.816)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_429_11233">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                        </a>
                        <a href="" className="postLinks">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.61109 12.4L10.8183 18.5355C11.0462 19.6939 12.6026 19.9244 13.1565 18.8818L19.0211 7.84263C19.248 7.41555 19.2006 6.94354 18.9737 6.58417M9.61109 12.4L5.22642 8.15534C4.41653 7.37131 4.97155 6 6.09877 6H17.9135C18.3758 6 18.7568 6.24061 18.9737 6.58417M9.61109 12.4L18.9737 6.58417M19.0555 6.53333L18.9737 6.58417" stroke="rgba(255, 255, 255, 0.816)" stroke-width="1.5"/>
                                </svg>
                        </a>
                    </div>
                    <div className="comments">
                        <input placeholder="Type your comment..." type="text" className="commentInput"/>
                    </div>
                </div>
            </div>
            </div>

    </>
  )
}
