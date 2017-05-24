import ga from './trackers'

const id = thing => document.getElementById( thing )

class Events {
	// Track monthly mentor signups thorugh the page
	whymatcha( ) {
		// Stop if not index page
		if ( !id( 'index' ) ) return
		// Register click events to events
		id( 'health' ).addEventListener( 'click', f => ga.event( 'Goal', 'Indicate', 'Health' ) )
		id( 'brain' ).addEventListener( 'click', f => ga.event( 'Goal', 'Indicate', 'Brain' ) )
		id( 'taste' ).addEventListener( 'click', f => ga.event( 'Goal', 'Indicate', 'Taste' ) )
	}

	init( ) {
		this.whymatcha( )
	}
}

export default new Events