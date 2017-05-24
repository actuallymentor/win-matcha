// Grab styles
import styles from '../css/styles.scss'

// Import trackers
import ga from './trackers'
import events from './event-trackers'

// Import countdown timer
import timer from './countdown'

const id = thing => document.getElementById( thing )

window.onload = f => {
	events.init( )

	if ( id( 'index' ) ) timer( )
}