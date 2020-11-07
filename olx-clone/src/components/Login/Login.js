import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import LoginCarousel from '../Carousel/Carousel';
import LoginButton from '../buttons/Button'
import './Login.css';
const Login = (props) => {
  const {
    className
  } = props;

  return (
    <div>
      {/* <Button color="danger" onClick={props.toggle}></Button> */}
      <Modal isOpen={props.modal} toggle={props.toggle} className={className}>
        <ModalHeader toggle={props.toggle} charCode="X" className='modalbtn'></ModalHeader>
        <ModalBody>
          <LoginCarousel />
           <LoginButton text='Continue with Email'  />
           <LoginButton text='Continue with google'  />
           <LoginButton text='Continue with Facebook'  />
           <LoginButton text='Continue with Github'  />
           <span className='text-center detailMsg'>We won't share your personal details with anyone</span>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Login;