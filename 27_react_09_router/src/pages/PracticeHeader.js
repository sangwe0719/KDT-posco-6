import {Link} from 'react-router-dom';

const PracticeHeader= () => {
    return(
        <div className='PracticeHeader'>
        <h2>ReactRouter 실습</h2>
        <nav>
            <ul>
                <li>
                    <Link to="/student/sean" className='menu-items'>학생</Link>
                </li>
                <li>
                    <Link to="/student/codingon" className='menu-items'>코딩온</Link>
                </li>
                <li>
                    <Link to="/student/new?name=jisu" className='menu-items'>searchParams</Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}

export default PracticeHeader;