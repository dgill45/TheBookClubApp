import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import Comment from './Comment';


function MemberDetails(){

    const [member, setMember] = useState(null)
    const {id} = useParams()

    useEffect(() =>{
        fetch(`http://localhost:9393/members/${id}`)
        .then((res) => res.json())
        .then(member => setMember(member))

    }, [id])

    return (


        <div>
            {member && <div className = "card">
            <div className = "card-body">
                    <h3>{member.name}</h3>
                        <p>by</p>
                    <h4>{member.fav_author}</h4>
                </div>
                <Comment />
            </div>}
        </div>
    )
}

export default MemberDetails;