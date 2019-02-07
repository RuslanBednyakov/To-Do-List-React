class Filters extends React.Component {
  render() {
    return (
      <div className="container__task_filter">
        <button className="container__task_button button__filter_active">Active</button>
        <button className="container__task_button button__filter_complete">Complete</button>
        <button className="container__task_button button__filter_all">All</button>
      </div>
    )
  }
}

class Paging extends React.Component {
  render() {
    return (
      <div className="container__pagination"></div>
    )
  }
}

class Task extends React.Component {
  render() {
    return (
      <li className={this.props.isCompleted? "container__task_list-item task__complete" : "container__task_list-item"}>
        <button className="button__complete">Complete</button>
        <div className="container__task_list-item-text">{this.props.value}</div>
        <button className="button__delete">Delete</button>
      </li>
    );
  }
}

class TaskList extends React.Component {
  render() {
    return (
      <ul className="container__task_list">
        {this.props.tasks.map(task => (
          <Task key={task.id} value={task.value} isCompleted={task.isCompleted} />
        ))}
      </ul>
    );
  }
}

class ControllPanel extends React.Component {
  render() {
    return (
      <form>
        <button className="container__interface_button button__complete_all">Complete</button>
        <button className="container__interface_button button__delete_all">Delete</button>
        <input type="text" placeholder="Add new task..." className="container__interface_input" />
        <button className="container__interface_button">Add</button>
      </form>
    );
  }
}
  
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="container__interface">
          <ControllPanel />
        </section>
        <section className="container__task">
          <TaskList tasks={this.props.tasks}/>
          <Paging />
          <Filters />
        </section>
      </React.Fragment>
    );
  }
}

const TASKS = [
  {value: "Task 1", isCompleted: true, id: "1"},
  {value: "Task 2", isCompleted: false, id: "2"},
  {value: "Task 3", isCompleted: true, id: "3"},
  {value: "Task 4", isCompleted: true, id: "4"},
  {value: "Task 5", isCompleted: false, id: "5"},
  {value: "Task 6", isCompleted: false, id: "6"},
  {value: "Task 7", isCompleted: true, id: "7"}
];

ReactDOM.render(
  <App tasks={TASKS} />,
  document.getElementById('root')
);