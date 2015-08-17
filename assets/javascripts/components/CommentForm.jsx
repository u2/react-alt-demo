import React from 'react/addons';
import Input from 'react-bootstrap/lib/Input';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

const CommentForm = React.createClass({
  displayName: 'CommentForm',

  getInitialState() {
    return {
      formMode: 0,
    };
  },

  handleSelect(selectedKey){
    this.setState({formMode: selectedKey});
  },

  formHorizontal() {
    return (
      <div>
        <hr/>
        <form className='commentForm form-horizontal' >
          <Input type='text' label='Name' placeholder='Your Name' labelClassName='col-sm-2'
                 wrapperClassName='col-sm-10'
                 ref='author' />
          <Input type='textarea' label='Text' placeholder='Say something...'
                 labelClassName='col-sm-2'
                 wrapperClassName='col-sm-10' ref='text' />

          <div className='form-group'>
            <div className='col-sm-offset-2 col-sm-10'><input type='submit'
                                                              className='btn btn-primary'
                                                              value='Post'
                                                              />
            </div>
          </div>
        </form>
      </div>
    );
  },

  formStacked() {
    return (
      <div>
        <hr/>
        <form className='commentForm form'>
          <Input type='text' label='Name' placeholder='Your Name' ref='author' />
          <Input type='textarea' label='Text' placeholder='Say something...' ref='text' />
          <input type='submit' className='btn btn-primary' value='Post' />
        </form>
      </div>
    );
  },

  formInline() {
    return (
      <div>
        <hr/>
        <form className='commentForm form' >
          <Input label='Inline Form' wrapperClassName='wrapper'>
            <Row>
              <Col xs={3}>
                <input type='text' className='form-control' placeholder='Your Name'
                       ref='inlineAuthor' />
              </Col>
              <Col xs={8}>
                <input type='text' className='form-control' placeholder='Say something...'
                       ref='inlineText' />
              </Col>
              <Col xs={1}>
                <input type='submit' className='btn btn-primary' value='Post' />
              </Col>
            </Row>
          </Input>
        </form>
      </div>
    );
  },

  render(){
    let inputForm;
    switch (this.state.formMode) {
      case 0:
        inputForm = this.formHorizontal();
        break;
      case 1:
        inputForm = this.formStacked();
        break;
      case 2:
        inputForm = this.formInline();
        break;
      default:
        throw `Unknown form mode: ${this.state.formMode}.`;
    }
    return (
      <div>
        <Nav bsStyle='pills' activeKey={this.state.formMode} onSelect={this.handleSelect}>
          <NavItem eventKey={0}>Horizontal Form</NavItem>
          <NavItem eventKey={1}>Stacked Form</NavItem>
          <NavItem eventKey={2}>Inline Form</NavItem>
        </Nav>
        {inputForm}
      </div>
    );
  },
});

export default CommentForm;
