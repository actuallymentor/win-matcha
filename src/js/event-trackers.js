import ga from './trackers'

class Events {
	// Track monthly mentor signups thorugh the page
	monthlymentor( ) {
		if ( document.getElementById( 'monthlymentorpage' ) ) document.getElementById( 'monthlymentorpage' ).addEventListener( 'submit', f => {
			ga.event( 'Benefits', 'Signup', 'Fivebf' )
		} )
	}

	init( ) {
		// this.monthlymentor( )
	}
}

export default new Events