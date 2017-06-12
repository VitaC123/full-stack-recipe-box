import React, { Component } from 'react';
import { Input, InputGroup, InputGroupButton, Button } from 'reactstrap';

class SignIn extends Component {
    render() {
        return (
            <div className='signIn'>
                <InputGroup>
                    <Input placeholder='foodlover@gmail.com' />
                    <InputGroupButton>
                        <Button
                            color='info'
                            outline
                        >
                            Log in
                    </Button>
                    </InputGroupButton>
                </InputGroup>

                <Button
                    className='newUserButton'
                    color='warning'
                    outline
                    block
                >
                    I'm a new user
                </Button>
            </div>
        );
    }
}


export default SignIn;
