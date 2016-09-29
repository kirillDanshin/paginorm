"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _paginator = require("paginator");

var _paginator2 = _interopRequireDefault(_paginator);

var _Page = require("./Page");

var _Page2 = _interopRequireDefault(_Page);

var Pagination = (function (_React$Component) {
    _inherits(Pagination, _React$Component);

    function Pagination() {
        _classCallCheck(this, Pagination);

        _get(Object.getPrototypeOf(Pagination.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Pagination, [{
        key: "getClassNames",
        value: function getClassNames(allItemsClassName, thisItemClassName) {
            return function (thisItemClassName) {
                var ret = "";
                if (allItemsClassName) {
                    ret += allItemsClassName;
                }
                if (thisItemClassName) {
                    ret += " ";
                    ret += thisItemClassName;
                }
                return ret;
            };
        }
    }, {
        key: "buildPages",
        value: function buildPages() {
            var pages = [];
            var _props = this.props;
            var itemsCountPerPage = _props.itemsCountPerPage;
            var pageRangeDisplayed = _props.pageRangeDisplayed;
            var activePage = _props.activePage;
            var prevPageText = _props.prevPageText;
            var nextPageText = _props.nextPageText;
            var firstPageText = _props.firstPageText;
            var lastPageText = _props.lastPageText;
            var totalItemsCount = _props.totalItemsCount;
            var allItemsClassName = _props.allItemsClassName;
            var prevPageClassName = _props.prevPageClassName;
            var nextPageClassName = _props.nextPageClassName;
            var firstPageClassName = _props.firstPageClassName;
            var lastPageClassName = _props.lastPageClassName;
            var pagesClassName = _props.pagesClassName;
            var activeClassName = _props.activeClassName;

            var getClassNames = this.getClassNames(allItemsClassName);

            var paginationInfo = new _paginator2["default"](itemsCountPerPage, pageRangeDisplayed).build(totalItemsCount, activePage);

            if (paginationInfo.first_page !== paginationInfo.last_page) {
                for (var i = paginationInfo.first_page; i <= paginationInfo.last_page; i++) {
                    pages.push(_react2["default"].createElement(_Page2["default"], {
                        isActive: i === activePage,
                        key: i,
                        pageNumber: i,
                        onClick: this.props.onChange,
                        className: getClassNames(pagesClassName),
                        activeClassName: activeClassName
                    }));
                }
            }

            paginationInfo.has_previous_page && pages.unshift(_react2["default"].createElement(_Page2["default"], {
                isActive: false,
                key: "prev" + paginationInfo.previous_page,
                pageNumber: paginationInfo.previous_page,
                onClick: this.props.onChange,
                pageText: prevPageText,
                className: getClassNames(prevPageClassName)
            }));

            paginationInfo.first_page > 1 && pages.unshift(_react2["default"].createElement(_Page2["default"], {
                isActive: false,
                key: 1,
                pageNumber: 1,
                onClick: this.props.onChange,
                pageText: firstPageText,
                className: getClassNames(firstPageClassName)
            }));

            paginationInfo.has_next_page && pages.push(_react2["default"].createElement(_Page2["default"], {
                isActive: false,
                key: "next" + paginationInfo.next_page,
                pageNumber: paginationInfo.next_page,
                onClick: this.props.onChange,
                pageText: nextPageText,
                className: getClassNames(nextPageClassName)
            }));

            paginationInfo.last_page !== paginationInfo.total_pages && pages.push(_react2["default"].createElement(_Page2["default"], {
                isActive: false,
                key: paginationInfo.total_pages,
                pageNumber: paginationInfo.total_pages,
                onClick: this.props.onChange,
                pageText: lastPageText,
                className: getClassNames(lastPageClassName)
            }));

            return pages;
        }
    }, {
        key: "render",
        value: function render() {
            var pages = this.buildPages();
            var className = this.props.className || "pagination";
            return _react2["default"].createElement(
                "ul",
                { className: className },
                pages
            );
        }
    }], [{
        key: "propTypes",
        value: {
            className: _react.PropTypes.string,
            totalItemsCount: _react.PropTypes.number.isRequired,
            onChange: _react.PropTypes.func.isRequired,
            activePage: _react.PropTypes.number,
            pageRangeDisplayed: _react.PropTypes.number,
            itemsCountPerPage: _react.PropTypes.number,
            prevPageText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
            nextPageText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
            lastPageText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
            firstPageText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
            prevPageClassName: _react.PropTypes.string,
            nextPageClassName: _react.PropTypes.string,
            lastPageClassName: _react.PropTypes.string,
            firstPageClassName: _react.PropTypes.string,
            allItemsClassName: _react.PropTypes.string,
            pagesClassName: _react.PropTypes.string,
            activeClassName: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: "defaultProps",
        value: {
            itemsCountPerPage: 10,
            pageRangeDisplayed: 5,
            activePage: 1,
            prevPageText: "⟨",
            firstPageText: "«",
            nextPageText: "⟩",
            lastPageText: "»"
        },
        enumerable: true
    }]);

    return Pagination;
})(_react2["default"].Component);

exports["default"] = Pagination;
module.exports = exports["default"];