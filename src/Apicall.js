import React,{Component} from 'react';
import axios from 'axios';
class Apicall extends Component {
  componentWillMount()
  {
    this.getReddit();
  }

  getReddit()
  {
    axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
    .then(res => {
      const posts = res.data.data.children.map(obj =>obj.data);
      this.setState({posts,
        isLoaded:true,
      })
    });
  }
  constructor(props){
    super(props);

    this.state = {
      posts:[],
      subr:'space',
      isLoaded:false
    };
    this.getReddit = this.getReddit.bind(this);
  }
  render(){
    if(!this.state.isLoaded)
    {
      return(
        <div>Data Loading..................................................</div>
      )
    }
    else
    {
    return(
      <div>
        <h1>{this.state.subr}</h1>
        <ul>
          {this.state.posts.map(post =>
              <li key={post.id}>{post.title}</li>
          )}
        </ul>

      </div>
    );
  }
}
}
export default Apicall;
