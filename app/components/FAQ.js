import React from 'preact'

export default class FAQ extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currAnswer: 1
    }
  }
  render () {
    let answers = []
    answers = this.props.answers.map((el, i) => {
      return <div className="answer">"{el.body}"</div>
    })
    return <div className="questionBlock">
      <div className="questionText">{this.props.question}</div>
      <div className="answersBlock">
        <div className="author">{this.props.author}</div>
        <div className="answers">
          <div className="answerNumber">{this.state.currAnswer} of {this.props.answers.length}</div>
          {answers}
        </div>
      </div>

    </div>
  }
}
