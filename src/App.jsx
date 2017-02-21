import React from 'react';
import ReactDOM from 'react-dom';

/*
const title = React.createElement('h1', null, 'React Todo');
const subtitle = React.createElement('p', { className: 'subtitle' }, 'This is my first app');
const container = React.createElement('div', null, title, subtitle);
*/

/*
function App() {
    return (
        <div>
            <h1>React Todo</h1>
            <p className="subtitle">This is my first app</p>
        </div>
    );
}
*/

function App() {
    return (
        <main>
            <header>
                <h1>React Todo</h1>
            </header>
            <section className="todo-list">
                <div className="todo completed">
                    <button className="checkbox icon">
                        <i className="material-icons">check_box</i>
                    </button>

                    <span className="todo-title">Изучить JavaScript</span>

                    <button className="delete icon">
                        <i className="material-icons">delete</i>
                    </button>
                </div>

                <div className="todo">
                    <button className="checkbox icon">
                        <i className="material-icons">check_box_outline_blank</i>
                    </button>

                    <span className="todo-title">Изучить React</span>

                    <button className="delete icon">
                        <i className="material-icons">delete</i>
                    </button>
                </div>
            </section>
        </main>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
