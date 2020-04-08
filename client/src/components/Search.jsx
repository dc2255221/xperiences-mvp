import React from 'react';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            query: '',
            currentLocation: '',
            sort_by: 'best_match'
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    onSubmit(e) {
        e.preventDefault();
        console.log('submitted');
        this.props.handleSearch(this.state);
        this.setState({
            query: '',
            currentLocation: '',
            sort_by: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <SearchOutlined />
                <input
                    type="text"
                    name="query"
                    placeholder="Search..."
                    value={this.state.query}
                    onChange={this.onChange}/><br/>
                <input
                    type="text"
                    name="currentLocation"
                    placeholder="Enter current location..."
                    value={this.state.currentLocation}
                    onChange={this.onChange}/><br/>
                <select onChange={this.onChange} id="sort-by-input" name="sort_by">
                    <option value="best_match"> Best Match </option>
                    <option value="rating"> Rating </option>
                    <option value="distance"> Distance </option>
                </select><br/>
                <input type="submit" placeholder="Submit" id="submit-btn" value="Submit"/>
            </form>
        )
    }
}

export default Search;
