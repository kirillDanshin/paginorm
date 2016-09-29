import React, { Component, PropTypes } from "react";
import pagiator from "paginator";
import Page from "./Page";

export default class Pagination extends React.Component {
	static propTypes = {
		totalItemsCount: PropTypes.number.isRequired,
		onChange: PropTypes.func.isRequired,
		activePage: PropTypes.number,
		pageRangeDisplayed: PropTypes.number,
		itemsCountPerPage: PropTypes.number,
		prevPageText: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.element
		]),
		nextPageText: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.element
		]),
		lastPageText: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.element
		]),
		firstPageText: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.element
		]),
		prevPageClassName: PropTypes.string,
		nextPageClassName: PropTypes.string,
		lastPageClassName: PropTypes.string,
		firstPageClassName: PropTypes.string,
		allItemsClassName: PropTypes.string,
		pagesClassName: PropTypes.string,
		activeClassName: PropTypes.string,
    }

    static defaultProps = {
      itemsCountPerPage: 10,
      pageRangeDisplayed: 5,
      activePage: 1,
      prevPageText: "⟨",
      firstPageText: "«",
      nextPageText: "⟩",
      lastPageText: "»",
    }

	getClassNames(allItemsClassName, thisItemClassName) {
		return function(thisItemClassName) {
			let ret = "";
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

    buildPages() {
        const pages = [];
        const {
            itemsCountPerPage,
            pageRangeDisplayed,
            activePage,
            prevPageText,
            nextPageText,
            firstPageText,
            lastPageText,
            totalItemsCount,
			allItemsClassName,
			prevPageClassName,
			nextPageClassName,
			firstPageClassName,
			lastPageClassName,
			pagesClassName,
			activeClassName,
        } = this.props;

		const getClassNames = this.getClassNames(allItemsClassName);

        const paginationInfo = new pagiator(itemsCountPerPage, pageRangeDisplayed)
            .build(totalItemsCount, activePage);

        if (paginationInfo.first_page !== paginationInfo.last_page) {
            for(let i = paginationInfo.first_page; i <= paginationInfo.last_page; i++) {
                pages.push(
                    <Page
                        isActive={i === activePage}
                        key={i}
                        pageNumber={i}
                        onClick={this.props.onChange}
						className={getClassNames(pagesClassName)}
						activeClassName={activeClassName}
                    />
                );
            }
        }

        paginationInfo.has_previous_page && pages.unshift(
            <Page
                isActive={false}
                key={"prev" + paginationInfo.previous_page}
                pageNumber={paginationInfo.previous_page}
                onClick={this.props.onChange}
                pageText={prevPageText}
				className={getClassNames(prevPageClassName)}
            />
        );

        paginationInfo.first_page > 1 && pages.unshift(
            <Page
                isActive={false}
                key={1}
                pageNumber={1}
                onClick={this.props.onChange}
                pageText={firstPageText}
				className={getClassNames(firstPageClassName)}
            />
        );

        paginationInfo.has_next_page && pages.push(
            <Page
                isActive={false}
                key={"next" + paginationInfo.next_page}
                pageNumber={paginationInfo.next_page}
                onClick={this.props.onChange}
                pageText={nextPageText}
				className={getClassNames(nextPageClassName)}
            />
        );

        paginationInfo.last_page !== paginationInfo.total_pages && pages.push(
            <Page
                isActive={false}
                key={paginationInfo.total_pages}
                pageNumber={paginationInfo.total_pages}
                onClick={this.props.onChange}
                pageText={lastPageText}
				className={getClassNames(lastPageClassName)}
            />
        );

        return pages;
    }

    render() {
        const pages = this.buildPages();
        return (
            <ul className="pagination">{pages}</ul>
        );
    }
}
