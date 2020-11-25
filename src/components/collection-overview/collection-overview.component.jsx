import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'

import { selectColllectionPreview } from '../../redux/shop/shop.selectors'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'


import './collection-overview.styles.scss'


const CollectionOverview = ({collections}) => (
    <div className="collections-overview">
        {
            collections.map(({ id ,  ...props}) => (
                <CollectionPreview key={id} {...props}/>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections:selectColllectionPreview
});

export default connect(mapStateToProps)(CollectionOverview)

