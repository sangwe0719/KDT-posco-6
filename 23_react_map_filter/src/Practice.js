import { useState } from "react";

const Practice = () => {

    const [profile, setProfile] = useState([
        {id: 1, name: "철수", email: "chul11@naver.com"},
        {id: 2, name: "영희", email: "young44@naver.com"},
    ])

    const [inputprofile, setInputprofile] = useState('');
    const [inputname, setInputname] = useState('');
    const [inputemail, setInputemail] = useState('');

    const addprofile = () => {
        const newprofile = profile.concat({
            id: profile.length + 1,
            name: inputname,
            email: inputemail,
            profile: inputprofile
        })
        setProfile(newprofile);
        setInputprofile('');
    }

    const deleteprofile = (id) => {
        const newprofile = profile.filter((obj) => obj.id !== id)
        setProfile(newprofile);
    }

    const activeEnter = (e) => {
        if (e.key === 'Enter') {
            addprofile();
        }
      }
    return (
        <>
            <input 
            type="text" 
            placeholder="이름"
            value={inputname}
            onChange={(e) => setInputname(e.target.value)}
            onKeyDown={(e) => activeEnter(e)}
            ></input>
            <input
             type="email" 
             placeholder="이메일"
             value={inputemail}
             onChange={(e) => setInputemail(e.target.value)}
             onKeyDown={(e) => activeEnter(e)}
             ></input>
             <button onClick={addprofile}>등록</button>
             <div>
                {profile.map((obj) => (
                 <li key = {obj.id} onDoubleClick = {() => deleteprofile(obj.id)} style={{listStyle : "none"}}>
                    {obj.name} : {obj.email}
                 </li>   
                ))}
             </div>
        </>
    );
};

export default Practice;