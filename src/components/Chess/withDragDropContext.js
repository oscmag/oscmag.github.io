import {DragDropContext} from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';
// import TouchBackend from 'react-dnd-touch-backend';
var MultiBackend = require('react-dnd-multi-backend').default;
var HTML5toTouch = require('react-dnd-multi-backend/lib/HTML5toTouch').default;

// export default DragDropContext(HTML5Backend);
// export default DragDropContext(TouchBackend({ enableMouseEvents: true }));
export default DragDropContext(MultiBackend(HTML5toTouch));