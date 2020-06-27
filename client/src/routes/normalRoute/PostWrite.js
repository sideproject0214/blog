import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, FormGroup, Label, Input } from "reactstrap";
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'


const PostWrite = () => {
  const { isAuthenticated} =useSelector((state) => state.auth)
  const [form, setValues ]= useState({title: "", contents: "", fileUrl: ""})
  const dispatch = useDispatch()

  const onChange = (e) => {
    setValues({
      ...form, 
      [e.target.name]: e.target.value
    })
  }

 

  return (
    <div>
      {isAuthenticated ? (
        <Form>
          <FormGroup className="mb-3">
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              className="form-control"
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <Label for="category">Category</Label>
            <Input
              type="text"
              name="category"
              id="category"
              className="form-control"
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <Label for="content">Content</Label>
            
          </FormGroup>
        </Form>
      )}
    </div>
  )
};

export default PostWrite;
