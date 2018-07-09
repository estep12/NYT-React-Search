import React, { Component } from "react";
import {Input} from "../../components/Form";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Articles extends Component {

    state = {
        savedArticles : [],
        searchedArticles : [],
        searchInput : " ",
        startYear : " ",
        endYear : " "
    }


    render () {
        return (
            <div>
                <form>
                    <Input 
                        value={this.state.searchInput}
                        // onChange={this.handleInputChange}
                        name="searchInput"
                        placeholder="Search (required)"
                    />
                     <Input
                        value={this.state.startYear}
                        // onChange={this.handleInputChange}
                        name="startYear"
                        placeholder="Start Year"
                    />
                    <Input
                        value={this.state.endYear}
                        // onChange={this.handleInputChange}
                        name="endYear"
                        placeholder="End Year"
                    />
                </form>
            </div>
        )
    }

}

export default Articles;