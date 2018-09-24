import React, { Component } from 'react';
import { connect } from 'react-redux';
class Post extends Component {
    
render() {
return (
<div className="post">

 <table class="table">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                   
                      <tr>
                        <th>1</th>
                        <td>{this.props.post.title}</td>
                        <td>{this.props.post.message}</td>
                        
                       <button className="edit"
                        onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })
                        }
                        >Edit</button>
                      <button className="delete"
                        onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}
                        >Delete</button>
                      </tr>
                    
                    </tbody>
                  </table>


  
</div>
);
}
}
export default connect()(Post);