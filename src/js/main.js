// Grab styles
import styles from '../css/styles.scss'

// Import trackers
import ga from './trackers'
import events from './event-trackers'

window.onload = f => {
	events.init( )
}