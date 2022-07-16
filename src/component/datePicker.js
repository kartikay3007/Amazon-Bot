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
const Demo = (props) => {
  const array = [0, 1, -2, 3, -4]

  const { radio, setRadio } = useState(true)
  const { value } = props;
  // const onChange = e => {
  //   console.log(e.target.value)
  //   setRadio(e.target.value)
  // }

  // const dataName = DATA_MODULES.map(item => item.firstName);
  // console.log(dataName, "data")
  // console.log(DATA_MODULES.TEST1.name, "Name")
  return (
    DATA_MODULES && DATA_MODULES.map((item, index) => {
      return (
        <Collapse>
          <Panel header={item.firstName} className="site-collapse-custom-panel">
            <div style={{ margin: "50px" }}>
              <Form.Item name={['rights', index, 'name']} key={index}>
                <CheckboxGroup key={index}   style={{ width: "50%" }}>
                  <Row gutter={20} key={index}>
                    {
                      RIGHTS && RIGHTS.filter(x => x.moduleId === item.id).map(item => {
                        return <>

                          <Checkbox key={index + item} defaultChecked='true' value={item.id}>{item.firstName + ' ' + item.lastName}</Checkbox>
                        </>
                      })
                    }
                  </Row>
                </CheckboxGroup>
              </Form.Item>
            </div>
          </Panel>
        </Collapse>
        // <div className="App">
        //   <div>Count: {props.count}</div>

        //   <button onClick={() => props.increaseCounter()}>Increase Count</button>

        //   <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
        // </div>
      );
    })
  )
};

export const DemoTest = connect(mapStateToProps, mapDispatchToProps)(Demo);