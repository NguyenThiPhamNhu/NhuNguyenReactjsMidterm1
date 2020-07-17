
import React, { Component } from 'react';

class RoomItem extends Component {
    onBookClick() {
        alert("Thank you your older!");
    }

    render() {
        return (
            <div >
                <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
                <script src="//code.jquery.com/jquery.js"></script>
                <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="thumbnail">
                        <img src={"Image/" + this.props.item.image} />
                        <div className="caption">
                            <form className="AddProduct" >
                                <b><h2 className="typeroom">{this.props.item.typeroom}</h2></b>

                                <p className="name">
                                    <h4>
                                        Room : {this.props.item.name}
                                    </h4>
                                </p>
                                <p className="number">
                                    <h4>
                                        Number : {this.props.item.number}
                                    </h4>
                                </p>
                                <p className="area">
                                    <h4>
                                        Size : {this.props.item.area}
                                    </h4>
                                </p>
                                <p className="price">
                                    <h4>
                                        Price: {this.props.item.price} vnđ
                                    </h4>
                                    <strike>
                                        Old Price: {this.props.item.oldprice} vnđ
                                    </strike>
                                </p>
                                <p >
                                    <h4>
                                        <a href="#" className="btn btn-default"  >View</a>
                                        <button className="btn btn-danger " type="submit" onClick={this.onBookClick}>Book</button>
                                    </h4>
                                </p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default RoomItem;