import React from 'react';
import ReactDOM from 'react-dom';

const colorArr = [
  'red',
  'blue',
  'green',
  'orange',
  'purple',
  'cyan',
  'yellow',
  'lightblue'
];


class HelloWorld extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      color: 'hotpink'
    };
  }

  componentDidMount(){
    let colorPos = 0;
    setInterval(() =>{
      if(colorArr.length -1 > colorPos){
        this.setState({
          color: colorArr[colorPos]
        });
      colorPos++
      }else{
        this.setState({
          color: colorArr[colorPos]
        });
        colorPos = 0;
      }
    }, 2000);
  }

  toggleColor(){
    if(this.state.color === "hotpink"){
      this.setState({
        color: "yellow"
      });
    }else{
      this.setState({
      color: "hotpink"
      });
    }
  }

  changeColor(event){
    this.setState({
      color: event.target.value
    });
  }

  render(){

    const styleObj = {
      backgroundColor: this.state.color,
    };
    return(
      <div style={styleObj}>
        <h2 onClick={this.toggleColor.bind(this)}>{this.state.color}</h2>
        <input value={this.state.color} onChange={this.changeColor.bind(this)}/>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloWorld name='Renee' />,
  document.getElementById('root')
);
