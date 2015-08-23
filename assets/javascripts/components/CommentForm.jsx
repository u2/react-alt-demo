import React from 'react/addons';
import Input from 'react-bootstrap/lib/Input';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import FormActions from '../actions/FormActions';

const CommentForm = React.createClass({
  displayName: 'CommentForm',

  propTypes: {
    // formData: React.PropTypes.object.isRequired,
    url: React.PropTypes.string.isRequired,
  },

  getInitialState() {
    return {
      formMode: 0,
      comment: {},
    };
  },

  // getDefaultProps() {
  //   return {
  //     formData: {},
  //   };
  // },

  handleSelect(selectedKey){
    this.setState({formMode: selectedKey});
  },

  handleChange(){
    let obj;
    if(this.state.formMode < 2){
      obj = {
        author: this.refs.author.getValue(),
        text: this.refs.text.getValue(),
      };
    } else {
      obj = {
        author: this.refs.inlineAuthor.getDOMNode().value,
        text: this.refs.inlineText.getDOMNode().value,
      };
    }
    this.setState({comment: obj});
  },

  handleSubmit(e){
    e.preventDefault();
    FormActions.submitComment(this.props.url, this.state.comment);
  },

  formHorizontal() {
    return (
      <div>
        <hr/>
        <form className='commentForm form-horizontal' onSubmit={this.handleSubmit}>
          <Input type='text' label='Name' placeholder='Your Name' labelClassName='col-sm-2'
                 wrapperClassName='col-sm-10'
                 ref='author' value={this.state.comment.author} onChange={this.handleChange} />
          <Input type='textarea' label='Text' placeholder='Say something...'
                 labelClassName='col-sm-2'
                 wrapperClassName='col-sm-10' ref='text' value={this.state.comment.text} onChange={this.handleChange} />

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
        <form className='commentForm form' onSubmit={this.handleSubmit}>
          <Input type='text' label='Name' placeholder='Your Name' ref='author' value={this.state.comment.author} onChange={this.handleChange} />
          <Input type='textarea' label='Text' placeholder='Say something...' ref='text' value={this.state.comment.text} onChange={this.handleChange} />
          <input type='submit' className='btn btn-primary' value='Post' />
        </form>
      </div>
    );
  },

  formInline() {
    return (
      <div>
        <hr/>
        <form className='commentForm form' onSubmit={this.handleSubmit}>
          <Input label='Inline Form' wrapperClassName='wrapper'>
            <Row>
              <Col xs={3}>
                <input type='text' className='form-control' placeholder='Your Name'
                       ref='inlineAuthor' value={this.state.comment.author} onChange={this.handleChange} />
              </Col>
              <Col xs={8}>
                <input type='text' className='form-control' placeholder='Say something...'
                       ref='inlineText' value={this.state.comment.text} onChange={this.handleChange} />
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
