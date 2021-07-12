import React from "react";
import { connect } from "react-redux";
import {searchValue} from '../store/home/actions'
const Header = (props) => {
  const handleChange =(e)=>{
    props.onGetSearchValue(e.target.value);
  }
    return (
        <div className="navbar-header">
          <form class="width-50"><div class="position-relative"><input type="text" class="form-control" placeholder="Search..." onChange={handleChange}/><span class="uil-search"></span></div></form>
          </div>
    );
  };
  
  
  const mapDispatchToProps = dispatch => ({
    onGetSearchValue: (filter) => dispatch(searchValue(filter)),
  })
export default connect( '',mapDispatchToProps)(Header);