let canvas = document.getElementById('Canvas')
const c = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight


//tick settings
let fps = 24
let time_elapsed_since_last_function_call = 0
let reset = 0
let time_between_frame_change = 0
let is_next_frame = false