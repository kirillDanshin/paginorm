import React, { Component, PropTypes } from "react";
import cx from "classnames";

export default class Page extends Component {
    static propTypes = {
        pageText: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]),
        pageNumber: PropTypes.number.isRequired,
        onClick: PropTypes.func.isRequired,
        isActive: PropTypes.bool.isRequired,
		className: PropTypes.string,
    }

    render() {
        const text = this.props.pageText || this.props.pageNumber;

        // if (React.isValidElement(text)) {
        //     return text;
        // }

        return (
            <li className={cx({
					"active": this.props.isActive,
					[this.props.className]: this.props.className || false,
				})}>
                <a onClick={ (e) => {
                    e.preventDefault();
                    this.props.onClick(this.props.pageNumber);
                }} href="#">
                    { text }
                </a>
            </li>
        );
    }
}
