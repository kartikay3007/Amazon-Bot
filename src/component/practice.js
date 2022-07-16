import React, { useState } from 'react';
import { Button, Checkbox, Col, DatePicker, Form, Input, Radio, Row, } from 'antd';
import { DATA_MODULES } from './Modules';
import { RIGHTS } from './Right';
import { Collapse } from 'antd';
import './App.css';
import { Item, ItemMeta } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from '../store/Counter/Counter.actions'
const CheckboxGroup = Checkbox.Group;


const mapStateToProps = (state) => {
    return {
        //   count: state.counter.count
        value: 1
    }
};
const mapDispatchToProps = dispatch => {
    // return {
    //   increaseCounter: () => dispatch(increaseCounter()),

    //   decreaseCounter: () => dispatch(decreaseCounter()),
    // }
}

const { Panel } = Collapse;
const DemoPractice = (props) => {
    const array = [0, 1, -2, 3, -4]

    const { radio, setRadio } = useState(true)
    const { value } = props;
    const arrNames = [{ id: 1 }, { id: 7 }, { id: 6 }, { id: 2 }, { id: 3 }];
    const arrInfo = [
        { id: 1, fruitId: 'abc', name: 'apple', price: 40 },
        { id: 4, fruitId: 'abc', name: 'orange', price: 30 },
        { id: 2, fruitId: 'abc', name: 'orange', price: 20 },
        { id: 3, fruitId: 'abc', name: 'orange', price: 60 },
        { id: 5, fruitId: 'def', name: 'mango', price: 80 },
        { id: 6, fruitId: 'egt', name: 'pineapple', price: 10 },
    ]
    let newArray = arrNames?.map(item => {
        const match2 = arrInfo?.find(key => key.id === item.id)
        return match2;
    }).filter(item => item !== undefined);
    const filteredItem = arrInfo.reduce((currentValue, item) => currentValue + item.price, 0);
    arrInfo.forEach(item => console.log(item.id));

    console.log(filteredItem);

    // let result = arrNames.map(x => {
    //     const item = arrInfo.find(item => item.id === x.id);
    //     if (item) {
    //         return item.name;
    //     }
    // }).filter(item => item !== undefined); // Can also use filter(item => item);

    // console.log(result);
    // const onChange = e => {
    //   console.log(e.target.value)
    //   setRadio(e.target.value)
    // }

    // const dataName = DATA_MODULES.map(item => item.firstName);
    // console.log(dataName, "data")
    // console.log(DATA_MODULES.TEST1.name, "Name")
    return (
        null
    )
};

export default DemoPractice;