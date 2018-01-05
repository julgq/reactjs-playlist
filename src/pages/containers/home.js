import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';

class Home extends Component {
  state = {
    modalVisible: false,
    handleError: false,
  }
  handleOpenModal = () => {
    this.setState({
      modalVisible: true,
    })
  }
  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false,
    })
  }
  componentDidCatch(error, info){
    this.setState({
      handleError: true,
    })
  }
  render() {
    if(this.state.handleError){
      return <p>OHHH hay un error :(</p>
    }
    return (
      <HomeLayout>
        <Related />
        <Categories
          categories={this.props.data.data}
          handleOpenModal={this.handleOpenModal}
        />
        {
          this.state.modalVisible &&
          <ModalContainer>
            <Modal
              handleClick={this.handleCloseModal}
            >
              <h1>Esto es un portal</h1>
            </Modal>
          </ModalContainer>
        }
      </HomeLayout>
    )
  }
}

export default Home