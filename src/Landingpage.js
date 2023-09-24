import { useState } from 'react';

const LandingPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='container'>
            <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
                <div className="logo"><img src='img/LOgo.png' alt='logo' className="logo-img" /></div>
                <button className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#privacy">Demos</a></li>
                        <li><a href="#privacy">About</a></li>
                        <li><a href="#privacy">Blog</a></li>
                        <li><a href="#privacy">Pages</a></li>
                        <li><a href="#privacy">Contact</a></li>
                    </ul>
                </nav>
                <div className="user">
                    <a href="#privacy" className="login-link">Login</a>
                    <button className="cta-button">Get Started Free</button>
                </div>
            </header>
            <section className="hero">
                <div className="hero-content">
                    <div>
                        <h1>Start chatting with customers, anytime, anywhere with Apex</h1>
                        <p className='details'>Great software that allows you to chat from any place at any time without any interruption.</p>
                        <button className="cta-button">
                            Start chatting Now
                            <span className="arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <mask id="mask0_2_1243" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                                        <rect width="18" height="18" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_2_1243)">
                                        <path d="M11.2071 3.04289L10.5 3.75L10.5 3.75L11.2071 3.04289ZM9.79289 3.04289L9.08579 2.33579V2.33579L9.79289 3.04289ZM16.4571 8.29289L15.75 9V9L16.4571 8.29289ZM16.4571 9.70711L15.75 9L15.75 9L16.4571 9.70711ZM15.0429 9.70711L15.75 9L15.75 9L15.0429 9.70711ZM9.79289 4.45711L10.5 3.75V3.75L9.79289 4.45711ZM16.4571 9.70711L15.75 9L16.4571 9.70711ZM16.4571 8.29289L15.75 9L15.75 9L16.4571 8.29289ZM11.2071 14.9571L10.5 14.25L10.5 14.25L11.2071 14.9571ZM9.79289 14.9571L10.5 14.25L9.79289 14.9571ZM9.79289 13.5429L10.5 14.25V14.25L9.79289 13.5429ZM15.0429 8.29289L15.75 9V9L15.0429 8.29289ZM2.25 8L2.25 7H2.25V8ZM1.25 9H0.25H1.25ZM15.75 8V9V8ZM15.75 10V11V10ZM2.25 10L2.25 9H2.25V10ZM11.9142 2.33579C11.1332 1.55474 9.86684 1.55474 9.08579 2.33579L10.5 3.75L10.5 3.75L11.9142 2.33579ZM17.1642 7.58579L11.9142 2.33579L10.5 3.75L15.75 9L17.1642 7.58579ZM17.1642 10.4142C17.9453 9.63317 17.9453 8.36684 17.1642 7.58579L15.75 9L15.75 9L17.1642 10.4142ZM14.3358 10.4142C15.1168 11.1953 16.3832 11.1953 17.1642 10.4142L15.75 9H15.75L14.3358 10.4142ZM9.08579 5.16421L14.3358 10.4142L15.75 9L10.5 3.75L9.08579 5.16421ZM9.08579 2.33579C8.30474 3.11683 8.30474 4.38317 9.08579 5.16421L10.5 3.75V3.75L9.08579 2.33579ZM17.1642 10.4142C17.9453 9.63317 17.9453 8.36684 17.1642 7.58579L15.75 9V9L17.1642 10.4142ZM11.9142 15.6642L17.1642 10.4142L15.75 9L10.5 14.25L11.9142 15.6642ZM9.08578 15.6642C9.86683 16.4453 11.1332 16.4453 11.9142 15.6642L10.5 14.25L10.5 14.25L9.08578 15.6642ZM9.08579 12.8358C8.30474 13.6168 8.30474 14.8832 9.08579 15.6642L10.5 14.25V14.25L9.08579 12.8358ZM14.3358 7.58579L9.08579 12.8358L10.5 14.25L15.75 9L14.3358 7.58579ZM17.1642 7.58579C16.3832 6.80474 15.1168 6.80474 14.3358 7.58579L15.75 9L15.75 9L17.1642 7.58579ZM2.25 7C1.14543 7 0.25 7.89543 0.25 9H2.25V7ZM15.75 7L2.25 7L2.25 9L15.75 9V7ZM17.75 9C17.75 7.89543 16.8546 7 15.75 7V9H17.75ZM15.75 11C16.8546 11 17.75 10.1046 17.75 9H15.75V11ZM2.25 11L15.75 11V9L2.25 9L2.25 11ZM0.25 9C0.25 10.1046 1.14543 11 2.25 11V9H0.25Z" fill="#F9FAFB" />
                                    </g>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="parent">
                        <div className="child">
                            <img src="img/images.png" alt="stats" />
                            <div className="content">
                                <div className='customer'>
                                    <h3>2,291</h3>
                                    <p>Happy Customers</p>
                                </div>
                                <span className='line'></span>
                                <div className='content-rating'>
                                    <h3>4.8/5</h3>
                                    <div className="rating">
                                        <img src="img/Stars.png" alt="rating" />
                                        <span>Rating</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="img/smiling.png" alt="Hero" />
                </div>
            </section>
            <section className="features">
                <h2>Features for a Better Experience</h2>
                <div className='experience'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <g clipPath="url(#clip0_2_1178)">
                                <circle opacity="0.2" cx="30" cy="30" r="30" fill="#FD6003" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 37C18.4696 37 17.9609 36.7893 17.5858 36.4142C17.2107 36.0391 17 35.5304 17 35V25C17 24.4696 17.2107 23.9609 17.5858 23.5858C17.9609 23.2107 18.4696 23 19 23H32C32.5304 23 33.0391 23.2107 33.4142 23.5858C33.7893 23.9609 34 24.4696 34 25V35C34 35.5304 33.7893 36.0391 33.4142 36.4142C33.0391 36.7893 32.5304 37 32 37H19ZM36 33L40.445 35.964C40.5957 36.0645 40.7708 36.1222 40.9517 36.131C41.1326 36.1397 41.3125 36.0992 41.4722 36.0136C41.6319 35.9281 41.7653 35.8008 41.8583 35.6454C41.9512 35.4899 42.0002 35.3121 42 35.131V24.869C42 24.688 41.9509 24.5103 41.8579 24.355C41.7648 24.1997 41.6314 24.0725 41.4718 23.9871C41.3121 23.9017 41.1323 23.8612 40.9515 23.87C40.7707 23.8788 40.5956 23.9365 40.445 24.037L36 27V33Z" fill="#FD6003" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_1178">
                                    <rect width="60" height="60" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="feature">
                            <h3>Video messaging</h3>
                            <p>This software is very easy for you to manage. You can use it as you wish.</p>
                        </div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <g clipPath="url(#clip0_2_1201)">
                                <circle opacity="0.2" cx="30" cy="30" r="30" fill="#4DA44E" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M31.4671 22.8962C32.0359 22.8962 32.4152 22.517 32.4152 21.9481C32.4152 21.3792 32.0359 21 31.4671 21H27.6747C27.1058 21 26.7266 21.3792 26.7266 21.9481C26.7266 22.517 27.1058 22.8962 27.6747 22.8962H31.4671ZM36.3972 25.9301C36.7765 25.5509 36.7765 24.982 36.3972 24.6028C36.018 24.2236 35.4491 24.2236 35.0699 24.6028L34.2166 25.4561C31.4671 23.2754 27.6747 23.2754 24.9252 25.4561L24.0719 24.6028C23.6926 24.2236 23.1238 24.2236 22.7445 24.6028C22.3653 24.982 22.3653 25.5509 22.7445 25.9301L23.5978 26.7834C21.0379 30.1018 21.6068 34.8423 24.9252 37.4022C28.2435 39.9621 32.984 39.3932 35.5439 36.0748C37.7246 33.3253 37.7246 29.5329 35.5439 26.7834L36.3972 25.9301ZM29.5709 33.3253C28.528 33.3253 27.6747 32.472 27.6747 31.4291C27.6747 30.7655 28.0539 30.1018 28.6228 29.8174V27.6367C28.6228 27.0679 29.002 26.6886 29.5709 26.6886C30.1397 26.6886 30.519 27.0679 30.519 27.6367V29.8174C31.4671 30.2914 31.7515 31.4291 31.1826 32.3772C30.8034 32.9461 30.2345 33.3253 29.5709 33.3253Z" fill="#4DA44E" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_1201">
                                    <rect width="60" height="60" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="feature">
                            <h3>Save your time</h3>
                            <p>This software is very easy for you to manage. You can use it as you wish.</p>
                        </div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <g clipPath="url(#clip0_2_1189)">
                                <circle opacity="0.2" cx="30" cy="30" r="30" fill="#FB8E0B" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M36.9862 28.685L39 26C36.4913 24.1175 33.375 23 30 23C26.625 23 23.5087 24.1175 21 26L30 38L32.625 34.5012V32.375C32.625 30.305 34.305 28.625 36.375 28.625C36.585 28.625 36.7837 28.655 36.9862 28.685ZM38.25 32.375C38.25 31.34 37.41 30.5 36.375 30.5C35.34 30.5 34.5 31.34 34.5 32.375V33.5C34.0875 33.5 33.75 33.8375 33.75 34.25V37.25C33.75 37.6625 34.0875 38 34.5 38H38.25C38.6625 38 39 37.6625 39 37.25V34.25C39 33.8375 38.6625 33.5 38.25 33.5V32.375ZM35.25 33.5V32.375C35.25 31.7525 35.7525 31.25 36.375 31.25C36.9975 31.25 37.5 31.7525 37.5 32.375V33.5H35.25Z" fill="#FB8E0B" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_1189">
                                    <rect width="60" height="60" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="feature">
                            <h3>Keep safe & private</h3>
                            <p>This software is very easy for you to manage. You can use it as you wish.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="meet-section">
                <div className="meet-image">
                    <img src="img/meet.png" alt="video" />
                </div>
                <div className="meet-content">
                    <h3>Meet your customers, with live video chat</h3>
                    <p>Proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim.</p>
                    <p>Get paychecks up to two days early. Get a $20 bonus when you receive qualifying direct deposits</p>
                </div>
            </section>
            <section className="selling-section">
                <div className="selling-content">
                    <h3>Start selling directly inside conversations</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered all injected humour or randomised words which don't look even slightly believable.</p>
                    <button>Start Chatting Now</button>
                </div>
                <div className="selling-image">
                    <img src="img/chat.png" alt="chat" />
                </div>
            </section>
            <section className="order-section">
                <div className="order-image">
                    <img src="img/message.png" alt="message" />
                </div>
                <div className="order-content">
                    <h2>Get direct orders from your customers</h2>
                    <p>Create custom landing pages with Rareblocks that converts more visitors than any website. With lots of unique blocks easily build a page. There are many variations of passages of available.</p>
                    <div className="order-stats">
                        <div>
                            <h3>4.3K+</h3>
                            <p>Website’s Powering</p>
                        </div>
                        <div>
                            <h3>7M+</h3>
                            <p>Chats in Last 2022</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonial-section">
                <img src="img/shapes.png" alt="shape" className="shape" />
                <h3>Our blessed client said about us</h3>
                <div className='testimonial-container'>
                    <div className="testimonial">
                        <div className="testimonial-content">
                            <h4>“Incredible Experience”</h4>
                            <p>We had an incredible experience working with Mixland and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.</p>
                        </div>
                        <div className="testimonial-triangle"></div>
                        <div className="testimonial-client">
                            <img src="img/client.png" alt="client" />
                            <div>
                                <p>Wade Warren</p>
                                <p>CEO, ABC Corporation</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-content">
                            <h4>“Dependable, Responsive, Professional”</h4>
                            <p>Fermin Apps has collaborated with Mixland team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond.</p>
                        </div>
                        <div className="testimonial-triangle"></div>
                        <div className="testimonial-client">
                            <img src="img/client2.png" alt="client" />
                            <div>
                                <p>Esther Howard</p>
                                <p>CEO, ABC Corporation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="centered-section">
                <h3>Ready to grow your business? Start with Apex, become faster every second</h3>
                <button>Start Chatting Now</button>
            </section>
            <footer >
                <div className='footer'>
                    <div ><img src='img/LOgo.png' alt='logo' /></div>
                    <nav>
                        <ul>
                            <li><a href="#privacy">About</a></li>
                            <li><a href="#privacy">Features</a></li>
                            <li><a href="#privacy">Works</a></li>
                            <li><a href="#privacy">Support</a></li>
                        </ul>
                    </nav>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                            <g clipPath="url(#clip0_2_903)">
                                <path d="M14.8454 2.88484C15.513 2.48677 16.0471 1.8565 16.2808 1.09353C15.6466 1.45843 14.9455 1.72381 14.1777 1.88967C13.5768 1.2594 12.7089 0.861328 11.7742 0.861328C9.97154 0.861328 8.50272 2.32091 8.50272 4.11221C8.50272 4.37759 8.5361 4.6098 8.60286 4.842C5.89889 4.70931 3.46197 3.41559 1.82623 1.42526C1.55917 1.92284 1.39226 2.4536 1.39226 3.0507C1.39226 4.17856 1.95976 5.17373 2.86109 5.77083C2.32697 5.73765 1.82623 5.60497 1.35888 5.37276V5.40593C1.35888 6.9982 2.49388 8.32509 3.99609 8.62364C3.72903 8.68999 3.42859 8.72316 3.12814 8.72316C2.92785 8.72316 2.69417 8.68999 2.49388 8.65682C2.92785 9.95053 4.12962 10.9125 5.56506 10.9125C4.43006 11.775 3.028 12.3058 1.49241 12.3058C1.22535 12.3058 0.958286 12.3058 0.724609 12.2726C2.19344 13.2014 3.89594 13.7322 5.76536 13.7322C11.8076 13.7322 15.1124 8.75633 15.1124 4.44393C15.1124 4.31125 15.1124 4.14538 15.1124 4.0127C15.7467 3.58146 16.3142 3.01753 16.7482 2.35408C16.1473 2.61946 15.513 2.78532 14.8454 2.88484Z" fill="#FD6003" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_903">
                                    <rect width="16.0236" height="12.8708" fill="white" transform="translate(0.724609 0.861328)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
                            <g clipPath="url(#clip0_2_907)">
                                <path d="M2.82161 9.72246H0.141602V6.63832H2.82161V4.36386C2.82161 1.72436 4.44393 0.287109 6.81346 0.287109C7.94849 0.287109 8.92399 0.371083 9.20827 0.408616V3.16704L7.56488 3.16778C6.2762 3.16778 6.02668 3.77629 6.02668 4.66923V6.63832H9.10006L8.69989 9.72246H6.02667V17.6362H2.82161V9.72246Z" fill="#FD6003" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_907">
                                    <rect width="9.06667" height="17.3491" fill="white" transform="translate(0.141602 0.287109)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <g clipPath="url(#clip0_2_911)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.2384 1.79548C14.8545 1.80297 15.4647 1.91538 16.0425 2.12783C16.4615 2.28841 16.8421 2.5344 17.1596 2.84997C17.4772 3.16554 17.7248 3.54369 17.8864 3.96008C18.1002 4.53427 18.2133 5.14063 18.2208 5.75281C18.2671 6.77098 18.2773 7.07621 18.2773 9.65359C18.2773 12.231 18.2675 12.5362 18.2208 13.5544C18.2133 14.1666 18.1002 14.7729 17.8864 15.3471C17.7248 15.7635 17.4772 16.1416 17.1596 16.4572C16.8421 16.7728 16.4615 17.0188 16.0425 17.1794C15.4647 17.3918 14.8545 17.5042 14.2384 17.5117C13.2143 17.5577 12.9071 17.5678 10.3129 17.5678C7.71875 17.5678 7.41159 17.5581 6.38742 17.5117C5.77137 17.5042 5.16116 17.3918 4.58334 17.1794C4.16431 17.0188 3.78377 16.7728 3.4662 16.4572C3.14863 16.1416 2.90108 15.7635 2.73948 15.3471C2.52569 14.7729 2.41257 14.1666 2.40503 13.5544C2.35877 12.5362 2.34859 12.231 2.34859 9.65359C2.34859 7.07621 2.35831 6.77098 2.40503 5.75281C2.41257 5.14063 2.52569 4.53427 2.73948 3.96008C2.90108 3.54369 3.14863 3.16554 3.4662 2.84997C3.78377 2.5344 4.16431 2.28841 4.58334 2.12783C5.16116 1.91538 5.77137 1.80297 6.38742 1.79548C7.41205 1.74952 7.71921 1.7394 10.3129 1.7394C12.9066 1.7394 13.2138 1.74906 14.2384 1.79548ZM6.30786 0.0579188C5.5016 0.0738547 4.70389 0.225553 3.94868 0.50656C3.30082 0.749114 2.71403 1.12922 2.22925 1.62035C1.73456 2.10226 1.35172 2.68568 1.10748 3.32987C0.824689 4.08033 0.67203 4.87302 0.655993 5.6742C0.609735 6.70295 0.598633 7.033 0.598633 9.65313C0.598633 12.2733 0.609735 12.6033 0.656919 13.633C0.672955 14.4342 0.825614 15.2269 1.1084 15.9773C1.35237 16.6214 1.73489 17.2048 2.22925 17.6868C2.7143 18.1781 3.30142 18.5582 3.9496 18.8006C4.70482 19.0816 5.50252 19.2333 6.30879 19.2493C7.34498 19.2952 7.67573 19.3072 10.3138 19.3072C12.952 19.3072 13.2827 19.2962 14.3189 19.2493C15.1252 19.2333 15.9229 19.0816 16.6781 18.8006C17.3232 18.5521 17.909 18.1726 18.3981 17.6863C18.8872 17.2 19.2687 16.6176 19.5184 15.9764C19.8012 15.2259 19.9538 14.4333 19.9699 13.6321C20.0161 12.6033 20.0272 12.2733 20.0272 9.65313C20.0272 7.033 20.0161 6.70295 19.9689 5.67329C19.9529 4.8721 19.8002 4.07941 19.5174 3.32895C19.2735 2.68485 18.891 2.10143 18.3966 1.61943C17.9115 1.12819 17.3244 0.748076 16.6762 0.50564C15.921 0.224633 15.1233 0.0729354 14.3171 0.0569995C13.2818 0.0110322 12.9497 0 10.3129 0C7.67619 0 7.34405 0.0110321 6.30786 0.0579188Z" fill="#FD6003" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.53931 5.53171C6.71896 6.07641 6.07957 6.8506 5.702 7.7564C5.32443 8.66219 5.22564 9.6589 5.41812 10.6205C5.6106 11.5821 6.08571 12.4653 6.78337 13.1586C7.48103 13.8519 8.3699 14.324 9.33758 14.5153C10.3053 14.7065 11.3083 14.6084 12.2198 14.2332C13.1313 13.858 13.9104 13.2226 14.4586 12.4074C15.0067 11.5922 15.2993 10.6338 15.2993 9.6534C15.2993 8.3387 14.7737 7.07783 13.8382 6.14819C12.9027 5.21856 11.6338 4.69629 10.3108 4.69629C9.32415 4.69629 8.35967 4.98702 7.53931 5.53171ZM8.5118 12.3288C7.97929 11.9753 7.56426 11.4727 7.31918 10.8848C7.07409 10.2968 7.00997 9.64983 7.13491 9.02566C7.25985 8.40148 7.56825 7.82814 8.02111 7.37814C8.47396 6.92813 9.05094 6.62168 9.67907 6.49752C10.3072 6.37336 10.9583 6.43708 11.55 6.68063C12.1416 6.92417 12.6474 7.33659 13.0032 7.86574C13.359 8.39489 13.5489 9.017 13.5489 9.6534C13.5489 10.5068 13.2077 11.3252 12.6005 11.9287C11.9932 12.5321 11.1696 12.8711 10.3108 12.8711C9.67035 12.8711 9.0443 12.6824 8.5118 12.3288Z" fill="#FD6003" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.4977 5.65855C14.8539 5.65855 14.332 5.13993 14.332 4.50017C14.332 3.86042 14.8539 3.3418 15.4977 3.3418C16.1416 3.3418 16.6635 3.86042 16.6635 4.50017C16.6635 5.13993 16.1416 5.65855 15.4977 5.65855Z" fill="#FD6003" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_911">
                                    <rect width="19.4286" height="19.3072" fill="white" transform="translate(0.598633)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                            <g clipPath="url(#clip0_2_921)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.417969 9.23377C0.417969 13.312 3.08949 16.7747 6.76768 18.0058C7.23229 18.0828 7.38717 17.8135 7.38717 17.5442C7.38717 17.3133 7.38717 16.7362 7.38717 15.9667C4.79308 16.5438 4.25103 14.7356 4.25103 14.7356C3.82513 13.6583 3.20565 13.389 3.20565 13.389C2.35386 12.8119 3.28308 12.8119 3.28308 12.8119C4.21231 12.8888 4.71564 13.7737 4.71564 13.7737C5.52871 15.1972 6.88383 14.774 7.42588 14.5432C7.50332 13.9276 7.73563 13.5429 8.00665 13.312C5.95461 13.0812 3.78641 12.2732 3.78641 8.7336C3.78641 7.73328 4.13487 6.88685 4.75436 6.27127C4.67692 6.04042 4.32846 5.11704 4.83179 3.80893C4.83179 3.80893 5.60615 3.57808 7.38717 4.77078C8.1228 4.57841 8.93588 4.46299 9.71023 4.46299C10.4846 4.46299 11.2977 4.57841 12.0333 4.77078C13.8143 3.57808 14.5887 3.80893 14.5887 3.80893C15.092 5.07857 14.7823 6.00195 14.6661 6.27127C15.2469 6.92532 15.634 7.73328 15.634 8.7336C15.634 12.2732 13.4659 13.0427 11.3751 13.2735C11.7236 13.5429 11.9946 14.12 11.9946 14.9664C11.9946 16.1976 11.9946 17.1979 11.9946 17.5057C11.9946 17.7365 12.1494 18.0443 12.6528 17.9674C16.331 16.7747 19.0025 13.312 19.0025 9.23377C19.0025 4.11672 14.8597 0 9.71023 0C4.56077 0 0.417969 4.11672 0.417969 9.23377Z" fill="#FD6003" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_921">
                                    <rect width="18.5845" height="18.0192" fill="white" transform="translate(0.417969)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className='privacy' id='privacy'>
                    <p>© Copyright 2022, All Rights Reserved</p>
                    <div>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </footer>
        </div>

    );
}

export default LandingPage;