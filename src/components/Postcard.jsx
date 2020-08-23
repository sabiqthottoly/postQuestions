import React, { Component, useContext } from 'react'
import { Avatar } from '@material-ui/core';
import { Input, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Postcard.css'

//export default class Postcard extends Component {
//  render() {
function Postcard(props) {
    return props.posts.map((each) => {
        return (
            <div className="post" key={Math.random().toString()}>
                <div className="postHeader">
                    <Avatar className="avatar" alt="Remy Sharp" src="" />
                    <h6 className="userName"><strong>{each.userName}</strong></h6>
                </div>
                <div className="postContent">
                    <h4 style={{ fontFamily: "'Montserrat', sans-serif" }} className="postQuestion">{each.postQuestion}</h4>
                    <div className="postOptions">
                        <h6><Input style={{ fontFamily: "'Montserrat', sans-serif" }} type="radio" />Russia</h6>
                        <h6><Input style={{ fontFamily: "'Montserrat', sans-serif" }} type="radio" />chi</h6>
                        <h6><Input style={{ fontFamily: "'Montserrat', sans-serif" }} type="radio" />USA</h6>
                        <h6><Input style={{ fontFamily: "'Montserrat', sans-serif" }} type="radio" />Canada</h6>
                    </div>
                </div>
            </div>
        )
    })
}

//}
export default Postcard;