import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {
   constructor(props) {
    super(props);
    this.state = {id: 1};
   }  
handleSubmit = (e) => {

e.preventDefault();
 const title = this.getTitle.value;
 const message = this.getMessage.value;
  this.setState({id: this.state.id + 1 })
 const data = {
  id : this.state.id,
  title,
  message,
  editing: false
 }
//alert(this.setState({id: this.state.id + 1 }));
 //alert(JSON.stringify(data));
 this.props.dispatch({
 type: 'ADD_POST',
 data
})

 this.getTitle.value = '';
 this.getMessage.value = '';

}
render() {
return (
<div className="post-container">
  <h1 className="post_heading">Create Post</h1>
  <form className="form" onSubmit={this.handleSubmit} >
   <input required type="text" ref={(input) => this.getTitle = input}
   placeholder="Enter Post Title" /><br /><br />
   <textarea required rows="5" ref={(input) => this.getMessage = input}
   cols="28" placeholder="Enter Post" /><br /><br />
   <button>Post</button>
  </form>
</div>
);
}
}
export default connect()(PostForm);