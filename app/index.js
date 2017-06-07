import React from 'preact'
import Search from './components/Search.js'
import FAQ from './components/FAQ.js'
require('./styles/index.less')

const data = [
  {
    id: 'abc1',
    questions: [
      {
        id: '1',
        body: 'How long is the strap?',
        answers: [
          {
            id: '222',
            body: 'It\'s 20cm long',
            rating: null,
            user: {
              id: '124',
              name: 'David'
            }
          },
          {
            id: '223',
            body: 'No, actually it\'s 25cm long',
            rating: null,
            user: {
              id: '125',
              name: 'Gusti'
            }
          }
        ],
        user: {
          id: '123',
          name: 'Max',
        }
      },
      {
        id: '2',
        body: 'Can I fit a Macbook into the bag?',
        answers: [
          {
            id: '331',
            body: 'No',
            rating: null,
            user: {
              id: '125',
              name: 'Gusti'
            }
          }
        ],
        user: {
          id: '124',
          name: 'David'
        }
      }
    ]
  }]

class App extends React.Component {
  constructor (props) {
    super(props)
    this.setState({
      showHint: true
    })
  }
  render () {
    const faqs = []
    data[0].questions.forEach((q) => {
      faqs.push(<FAQ question={q.body} answers={q.answers} author={q.user.name} />)
    })
    const hint = <div className='showHint'>
        <div className="btn" onClick={this.closeHintBlock.bind(this)}>Got it</div>
      </div>
    const showHint = this.state.showHint ? hint : null

    return <div>
      {showHint}
      <Search />
      <div className="header">Recently asked questions</div>
      {faqs}
    </div>
 }

 closeHintBlock () {
    this.setState({
      showHint: false
    })
 }
}

React.render(<App />, document.getElementById('app'))
