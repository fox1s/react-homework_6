import React, {Component} from 'react';
import AllUserComponent from "./components/all-users/AllUserComponent";
import './App.css'
import {BrowserRouter as Router, Link} from 'react-router-dom';

class App extends Component {
    inputMain = React.createRef();
    state = {inputValue: '', id: '', switchBtn: true}

    onInputFill = () => {
        console.log(this.inputMain.current.value)
        this.setState({inputValue: this.inputMain.current.value})

        if (this.inputMain.current.value > 0 && this.inputMain.current.value < 11) {
            this.setState({switchBtn: false})
        } else {
            this.setState({switchBtn: true})
        }
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        // console.log(this.inputMain.current.value)
        this.setState({id: this.inputMain.current.value})

    }

    render() {
        let {inputValue, id, switchBtn} = this.state;
        return (
            <div className={'App'}>
                <div className={'title'}>
                    <Router>
                        <Link to={''} className={'title-text-big'}>React</Link>
                    </Router>
                    <span className={'title-text-small'}>Homework 6</span>
                    <span className={'title-text-small'}>by Smikh Rostyslav</span>
                </div>

                <div className={'form-div'}>
                    <form className={'form'} onSubmit={this.onFormSubmit}>
                        <input className={'input'} ref={this.inputMain} type={'number'} onInput={this.onInputFill}
                               value={inputValue}/>
                        <button className={'btn'} disabled={switchBtn}>ok</button>
                    </form>
                </div>

                <div className={'main-body'}>
                    <AllUserComponent id={id}/>
                </div>

            </div>
        );
    }
}

export default App;