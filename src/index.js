import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//DB
import JSON from './db.json'
//COMPONENTS
import Header from './components/header';
import NewsList from './components/news_list'

class App extends Component  {
    state = {
        news: JSON,
        filtered: []
    }

    getKeyword = (event) => {
        const keywords = event.target.value;

        let filtered =  this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1;
        });

        this.setState({ filtered });
    }

    render(){
        let { filtered, news } = this.state;
        return (
            <div>
                <Header keywords={this.getKeyword} />
                <NewsList news={filtered.length === 0 ? news : filtered }>
                    <h3>
                        The news are:
                    </h3>
                </NewsList>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));