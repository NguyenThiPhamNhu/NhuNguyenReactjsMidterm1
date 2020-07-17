
import React, { Component } from 'react';
import RoomItem from './RoomItem';

class Rooms extends Component {


    constructor() {
        super();
        this.products = JSON.parse(localStorage.getItem("lsc-products"));
        if (!this.products) {
            this.products = [];
        }

    }
    onItemClick(item) {
        console.log("VIT PRO");
        return (event) => {
            let cart = JSON.parse(localStorage.getItem("cart"));
            if (!cart) {
                cart = [];
            }

            let oldItem = cart.find((element) => element.name === item.name);
            if (oldItem) {
                oldItem.quatity += 1;
            } else {
                item.quatity = 1;
                cart.push(item);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            console.log(cart);
        }
    }
    render() {
        return (

            <div>
                {this.products.map((item, index) =>
                    <RoomItem onItemClick={this.onItemClick(item)} item={item} />)}
                <div>
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <center><h5><b>VIT LOSHIP</b></h5></center>
                        </div>
                        <div class="panel-footer">
                            <center> <h5><b> COPYRIGHT BY VIT</b></h5> </center>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Rooms;