import React, {Component} from 'react';
import authors from "./data";
import AuthorCard from "./AuthorCard";


class AuthorList extends Component {
    render(){
        const Authors = authors.map(author => { 
        return <AuthorCard key ={author.first_name} author={author} />
        });
        return (
            <div className="row"> 
                {Authors}
            </div>
        )
    }
}

export default AuthorList;