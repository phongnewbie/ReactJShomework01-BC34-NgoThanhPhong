import React, { Component } from 'react'

export default class BodypartComponent extends Component {
    render() {
        return (
            <div className="container px-lg-5 ">
                <div className="container px-lg-5">
                    <div className="p-4 bg-success rounded-3 text-center">
                        <div className="m-4 m-lg-5">
                            <h1 className="font-weigh-bolder display-5 text-white">A Warm Welcome</h1>
                            <p className="fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                            <a class="btn btn-primary btn-lg" href="#!">Call to action</a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
