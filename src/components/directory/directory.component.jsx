import React from 'react';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectSections } from '../../redux/directory/directory.selectors'

import MenuItem from '../menu-item/menu-item.component'


import './directory.style.scss'

const Directory  = ({ sections }) =>{
	return(
		<div className ="directory-menu">
		{
			sections.map(({id ,  ...props }) => (
				<MenuItem key ={id} { ...props }/>
				))
		}
		</div>
		)
	}

const mapStateToProps = createStructuredSelector({
	sections:selectSections
});

export default connect(mapStateToProps)(Directory);