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

class Page extends React.Component {
  render() {
    return (
      <a className="container__pagination_item">{this.props.value}</a>
    )
  }
}

class Paging extends React.Component {
  render() {
    const pages = [];

    for(let i = 1; i <= this.props.numberOfPages; i++) {
      pages.push(
        <Page key={i} value={i}/>
      )
    };

    return (
      <div className="container__pagination">{pages}</div>
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
    const taskText = this.props.taskText;

    return (
      <form>
        <button className="container__interface_button button__complete_all">Complete</button>
        <button className="container__interface_button button__delete_all">Delete</button>
        <input
          type="text"
          placeholder="Add new task..."
          className="container__interface_input"
          value={taskText}
        />
        <button className="container__interface_button">Add</button>
      </form>
    );
  }
}
  
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskText: '',
      isCompleted: false,
      tasks: [],
      pageSize: 6,
      currentPage: 1,
      filterName: 'All'
    };
  }

  filterTasks(tasks) {
    const filterName = this.state.filterName;

    if(filterName === 'All') {
      return tasks;
    }

    const filteredTasks = tasks.filter(function(task) {
      if(filterName === 'Complete') {
        return task.isCompleted === true;
      };
        return task.isCompleted === false;
      });

    return filteredTasks;
  }

  render() {
    const tasks = this.props.tasks;
    const filteredTasks = this.filterTasks(tasks);
    
    const pageSize = this.state.pageSize;
    const currentPage = this.state.currentPage;
    const taskCount = filteredTasks.length;

    const numberOfPages = (taskCount <= pageSize) ? 0 : Math.ceil(taskCount/pageSize);
    let pagedFilteredTasks;

    if (!numberOfPages) {
      pagedFilteredTasks = filteredTasks;
    } else {
      pagedFilteredTasks = filteredTasks.filter(function(task, index) {
        return ((pageSize * (currentPage - 1)) <= index && index <= ((pageSize * currentPage) - 1));
      });
    }

    return (
      <React.Fragment>
        <section className="container__interface">
          <ControllPanel taskText={this.state.taskText}/>
        </section>
        <section className="container__task">
          <TaskList 
            tasks={pagedFilteredTasks}
          />
          <Paging 
            numberOfPages={numberOfPages}
          />
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