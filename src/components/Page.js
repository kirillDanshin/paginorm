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
		activeClassName: PropTypes.string,
    }

    render() {
		const {
			activeClassName = "active",
			isActive,
			className,
			onClick,
			pageNumber,
			pageText,
		} = this.props;
        const text = pageText || pageNumber;
        // if (React.isValidElement(text)) {
        //     return text;
        // }

        return (
            <li className={cx({
					[activeClassName]: isActive,
					[className]: className || false,
				})}>
                <a onClick={ (e) => {
                    e.preventDefault();
                    onClick(pageNumber);
                }} href="#">
                    { text }
                </a>
            </li>
        );
    }
}
