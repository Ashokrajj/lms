
import React from 'react'
import Link from 'next/link'


export default function Menubar() {
    return (
        <>
            <div className='container-fluid shadow-sm menubar'>
                <div className="grid text-center" >
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <Link className="navbar-brand" href="/">
                                <h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cpu" viewBox="0 0 16 16">
                                        <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                                    </svg>
                                </h1>

                            </Link>
                            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item ">
                                        <Link className="nav-link text-dark shadow-sm" aria-current="page" href="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-dark"></a>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-dark shadow-sm" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            More
                                        </a>


                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item " href="/about">About</Link></li>
                                            <li><Link className="dropdown-item" href="/contact">Contact</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><Link className="dropdown-item" href="/privacy_policy">Privacy Policy</Link></li>
                                            <li><Link className="dropdown-item" href="/terms_and_conditions">Terms & Conditions</Link></li>


                                        </ul>
                                    </li>

                                </ul>
                                <form className="d-flex" role="search">
                                    <Link href="/login">
                                        <button className="btn btn-dark shadow-sm" type="submit">Login </button>
                                    </Link>
                                    &nbsp;
                                    <Link href="/register">
                                        <button className="btn btn-dark shadow-sm" type="submit">Register</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </>
    )
}
