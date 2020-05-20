import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios.orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

import classes from './ContactData.module.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();

    this.setState({ loading: true });

    const order = {
      ingredient: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Ademola',
        address: {
          street: 'Broad Street',
          zipCode: '12345',
          country: 'USA',
        },
        email: 'test@test.com',
      },
      deliveryMathod: 'fastest',
    };

    axios
      .post('/orders.json', order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((err) => {
        this.setState({ loading: false });
        console.log(err);
      });
  };

  render() {
    let form = (
      <form>
        <input className={classes.Input} type='text' name='name' placeholder='Your name' />
        <input className={classes.Input} type='email' name='email' placeholder='Your Mail' />
        <input className={classes.Input} type='text' name='street' placeholder='Street' />
        <input className={classes.Input} type='text' name='postalCode' placeholder='Postal Code' />

        <Button btnType='Success' clicked={this.orderHandler}>
          {' '}
          ORDER{' '}
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter yout contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
