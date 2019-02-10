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
  constructor(props) {
    super(props);
    this.state = {
      newTaskText: '',
    };

    this.handleNewTaskTextChange = this.handleNewTaskTextChange.bind(this);
    this.handleNewTaskAdd = this.handleNewTaskAdd.bind(this);
  }

  
  handleNewTaskTextChange(e) {
    this.setState({
      newTaskText: e.target.value
    });
  }

  handleNewTaskAdd() {
    const newTaskText = this.state.newTaskText;
    this.setState({
      newTaskText: ''
    });
    this.props.onNewTaskAdd(newTaskText);

  }

  render() {
    return (
      <div>
        <button
          className="container__interface_button button__complete_all"
          onClick={this.props.onCompleteAllTasks}>
          Complete
        </button>
        <button
          className="container__interface_button button__delete_all"
          onClick={this.props.onDeleteAllTasks}>
          Delete
        </button>
        <input
          type="text"
          placeholder="Add new task..."
          className="container__interface_input"
          value={this.state.newTaskText}
          onChange={this.handleNewTaskTextChange}
        />
        <button
          className="container__interface_button"
          onClick={this.handleNewTaskAdd}
        >
        Add
        </button>
      </div>
    );
  }
}
  
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskText: '',
      isCompleted: true,
      tasks: [],
      pageSize: 6,
      currentPage: 1,
      filterName: 'All'
    };

    this.handleNewTaskAdd = this.handleNewTaskAdd.bind(this);
    this.handleDeleteAllTasks = this.handleDeleteAllTasks.bind(this);
    this.handleCompleteAllTasks = this.handleCompleteAllTasks.bind(this);
  }


  handleNewTaskAdd(newTaskText) {
    if (!newTaskText.length) {
      return;
    }

    let isCompleted
    if (this.state.filterName === 'Complete') {
      isCompleted = true;
    } else {
      isCompleted = false;
    }

    const newTask = {
      value: newTaskText,
      isCompleted: isCompleted,
      id: Date.now()
    };

    this.setState({tasks: this.state.tasks.concat(newTask)});
  }

  handleDeleteAllTasks() {
    this.setState({
      tasks: [],
      isCompleted: true
    })
  }

  handleCompleteAllTasks() {
    const tasks = this.state.tasks.map(task => {
      task.isCompleted = this.state.isCompleted;
      return task;
    });

    console.log(tasks);

    this.setState(state => ({
      tasks: tasks,
      isCompleted: !state.isCompleted
    }))
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

  pageFilteredTasks(filteredTasks) {
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

    return [pagedFilteredTasks, numberOfPages];
  }

  render() {
    const tasks = this.state.tasks;
    const filteredTasks = this.filterTasks(tasks);
    const [pagedFilteredTasks, numberOfPages] = this.pageFilteredTasks(filteredTasks);

    return (
      <React.Fragment>
        <section className="container__interface">
          <ControllPanel 
            onNewTaskAdd={this.handleNewTaskAdd}
            onDeleteAllTasks={this.handleDeleteAllTasks}
            onCompleteAllTasks={this.handleCompleteAllTasks}
          />
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


ReactDOM.render(
  <App />,
  document.getElementById('root')
);