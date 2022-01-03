import React from 'react'
import { Container, FormControl, InputGroup, Row } from 'react-bootstrap'

export default function HederMeddle() {
    return (
        <div className='py-3'>

            <Row>
                <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <a href="index.html">
                        <img src="https://loopinfosol.in/themeforest/ekka-html-v3/ekka-html/assets/images/logo/logo.png" alt="" />

                    </a>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <form action="">
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                        </InputGroup>
                    </form>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <img src="./images/avatar.png" alt="" width="50px" />
                    <img src="./images/heart.png" alt="" width="50px" />
                    <img src="./images/shopping-bag.png" alt="" width="50px" />
                </div>

            </Row>

        </div>
    )
}
