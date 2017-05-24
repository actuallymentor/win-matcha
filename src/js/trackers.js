import uga from 'universal-ga'
import site from '../../modules/config'

// Initialize Google Analytics
uga.initialize( site.track.ga )
let debug = false

export class GoogleAnalytics {

	constructor( ) {
		if ( debug ) console.log( 'Visitor tracker constructor' )
		if ( debug ) console.log( 'Submitting visitor tracking data' )
		uga.pageview( window.location.pathname ? window.location.pathname : '/' )
		uga.plugin( 'displayfeatures' )
	}

	event( category, action, label ) {
		uga.event( category, action, {
			eventLabel: label
		} )
	}

}

export default new GoogleAnalytics