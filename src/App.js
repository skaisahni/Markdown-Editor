import React from 'react';
//import logo from './logo.svg';
import './App.css';
import marked from "marked";


// default text in the #editor field
const firstContent = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)

`
 // default text end.

marked.setOptions({
  breaks: true,
});
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      content: firstContent,
    }
    this.updateContent = this.updateContent.bind(this);
  }

  componentDidMount() { }

  updateContent(event) {
    this.setState({ content: event.target.value })
  }

  markedContent(rawContent = this.state.content) {
    let rawMarkup = marked(rawContent, { sanitize: true });
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div>
        <h1 id="page-title">
          Markdown Editor
          <small> by <a href="https://codepen.io/skaisahni" > skaisahni</a>
          </small>
        </h1>
        <div id="container">

          <div className="box">
            <h3 className="box-title">Editor</h3>
            <textarea id="editor" value={this.state.content} onChange={this.updateContent}></textarea>
          </div>

          <div className="box">
            <h3 className="box-title">Preview</h3>
            <div id="preview" dangerouslySetInnerHTML={this.markedContent()}></div>
          </div>

        </div>
      </div>
    );
  }
}


export default App;
