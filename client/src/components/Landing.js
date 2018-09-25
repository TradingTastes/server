import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {registerUser} from '../actions/register';
import { connect } from 'react-redux';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});


class RegisterForm extends React.Component {

  state = {
    username: '',
    password: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log("values", this.state);
    var values = {
      username: this.state.username,
    };
    this.props.registerUser(values);
  }

  render() {

    const { classes } = this.props;

    return (
      <div>
      <h2> Register </h2>
      <form className={classes.container} onSubmit={this.onSubmit} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          className={classes.textField}
          value={this.state.password}
          onChange={this.handleChange('password')}
          type="password"
          autoComplete="password"
          margin="normal"
        />
        <Button type="submit" variant="contained"  onClick={this.onSubmit} color="primary" className={classes.button}>
        Submit
      </Button>
        </form>
        </div>

    );
  }
}

  RegisterForm.propTypes = {
    classes: PropTypes.object.isRequired,
    registerUser: PropTypes.func.isRequired
  };



const mapDispatchToProps = (dispatch) => ({
  registerUser: (values) => dispatch(registerUser(values))
});

// export default withStyles(styles)(RegisterForm);
export default withStyles(styles)(connect(null, mapDispatchToProps)(RegisterForm));
