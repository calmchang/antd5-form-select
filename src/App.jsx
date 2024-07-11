import { useState,useEffect } from 'react'
//18.3.1
import './App.css'
import {
  Select,
  Form
} from 'antd';

function App() {
  const [form] = Form.useForm();

  const [list,setList]=useState(null);

  const init=()=>{
      setList([
        {label:'a',value:'a'},
        {label:'b',value:'b'},
        {label:'c',value:'c'},
      ])
      form.resetFields();
  }
  useEffect(()=>{
    init();
  },[]);

  return <div>
    <Form layout='vertical' form={form} 
      initialValues={{user:undefined}} 
    >
      <Form.Item label='部门成员'  name='user'>
        <Select 
          loading={list==null}
          mode='multiple' 
          style={{width:'200px'}}
          options={list}/>
      </Form.Item>
    </Form>
  </div>
}

export default App
