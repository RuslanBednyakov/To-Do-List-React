var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// class ProductCategoryRow extends React.Component {
//   render() {
//     const category = this.props.category;
//     return (
//       <tr>
//         <th colSpan="2">
//           {category}
//         </th>
//       </tr>
//     );
//   }
// }

// class ProductRow extends React.Component {
//   render() {
//     const product = this.props.product;
//     const name = product.stocked ?
//       product.name :
//       <span style={{color: 'red'}}>
//         {product.name}
//       </span>;

//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{product.price}</td>
//       </tr>
//     );
//   }
// }

// class ProductTable extends React.Component {
//   render() {
//     const rows = [];
//     let lastCategory = null;

//     this.props.products.forEach((product) => {
//       if (product.category !== lastCategory) {
//         rows.push(
//           <ProductCategoryRow
//             category={product.category}
//             key={product.category} />
//         );
//       }
//       rows.push(
//         <ProductRow
//           product={product}
//           key={product.name} />
//       );
//       lastCategory = product.category;
//     });

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
// }

// class SearchBar extends React.Component {
//   render() {
//     return (
//       <form>
//         <input type="text" placeholder="Search..." />
//         <button>Add</button>
//       </form>
//     );
//   }
// }


var Filters = function (_React$Component) {
  _inherits(Filters, _React$Component);

  function Filters() {
    _classCallCheck(this, Filters);

    return _possibleConstructorReturn(this, (Filters.__proto__ || Object.getPrototypeOf(Filters)).apply(this, arguments));
  }

  _createClass(Filters, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container__task_filter" },
        React.createElement(
          "button",
          { className: "container__task_button button__filter_active" },
          "Active"
        ),
        React.createElement(
          "button",
          { className: "container__task_button button__filter_complete" },
          "Complete"
        ),
        React.createElement(
          "button",
          { className: "container__task_button button__filter_all" },
          "All"
        )
      );
    }
  }]);

  return Filters;
}(React.Component);

var Paging = function (_React$Component2) {
  _inherits(Paging, _React$Component2);

  function Paging() {
    _classCallCheck(this, Paging);

    return _possibleConstructorReturn(this, (Paging.__proto__ || Object.getPrototypeOf(Paging)).apply(this, arguments));
  }

  _createClass(Paging, [{
    key: "render",
    value: function render() {
      return React.createElement("div", { className: "container__pagination" });
    }
  }]);

  return Paging;
}(React.Component);

var Task = function (_React$Component3) {
  _inherits(Task, _React$Component3);

  function Task() {
    _classCallCheck(this, Task);

    return _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).apply(this, arguments));
  }

  _createClass(Task, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        { className: this.props.isCompleted ? "container__task_list-item task__complete" : "container__task_list-item" },
        React.createElement(
          "button",
          { className: "button__complete" },
          "Complete"
        ),
        React.createElement(
          "div",
          { className: "container__task_list-item-text" },
          this.props.value
        ),
        React.createElement(
          "button",
          { className: "button__delete" },
          "Delete"
        )
      );
    }
  }]);

  return Task;
}(React.Component);

var TaskList = function (_React$Component4) {
  _inherits(TaskList, _React$Component4);

  function TaskList() {
    _classCallCheck(this, TaskList);

    return _possibleConstructorReturn(this, (TaskList.__proto__ || Object.getPrototypeOf(TaskList)).apply(this, arguments));
  }

  _createClass(TaskList, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "ul",
        { className: "container__task_list" },
        this.props.tasks.map(function (task) {
          return React.createElement(Task, { key: task.id, value: task.value, isCompleted: task.isCompleted });
        })
      );
    }
  }]);

  return TaskList;
}(React.Component);

var ControllPanel = function (_React$Component5) {
  _inherits(ControllPanel, _React$Component5);

  function ControllPanel() {
    _classCallCheck(this, ControllPanel);

    return _possibleConstructorReturn(this, (ControllPanel.__proto__ || Object.getPrototypeOf(ControllPanel)).apply(this, arguments));
  }

  _createClass(ControllPanel, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        null,
        React.createElement(
          "button",
          { className: "container__interface_button button__complete_all" },
          "Complete"
        ),
        React.createElement(
          "button",
          { className: "container__interface_button button__delete_all" },
          "Delete"
        ),
        React.createElement("input", { type: "text", placeholder: "Add new task...", className: "container__interface_input" }),
        React.createElement(
          "button",
          { className: "container__interface_button" },
          "Add"
        )
      );
    }
  }]);

  return ControllPanel;
}(React.Component);

var App = function (_React$Component6) {
  _inherits(App, _React$Component6);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "section",
          { className: "container__interface" },
          React.createElement(ControllPanel, null)
        ),
        React.createElement(
          "section",
          { className: "container__task" },
          React.createElement(TaskList, { tasks: this.props.tasks }),
          React.createElement(Paging, null),
          React.createElement(Filters, null)
        )
      );
    }
  }]);

  return App;
}(React.Component);

var TASKS = [{ value: "Task 1", isCompleted: true, id: "1" }, { value: "Task 2", isCompleted: false, id: "2" }, { value: "Task 3", isCompleted: true, id: "3" }, { value: "Task 4", isCompleted: true, id: "4" }, { value: "Task 5", isCompleted: false, id: "5" }, { value: "Task 6", isCompleted: false, id: "6" }, { value: "Task 7", isCompleted: true, id: "7" }];

ReactDOM.render(React.createElement(App, { tasks: TASKS }), document.getElementById('root'));