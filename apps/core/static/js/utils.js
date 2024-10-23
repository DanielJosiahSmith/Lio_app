export function tick(){
    time_elapsed_since_last_function_call = Date.now() - reset - time_between_frame_change
    time_between_frame_change += time_elapsed_since_last_function_call

    if(time_between_frame_change > 1000/fps){
        time_between_frame_change = 0
        reset = Date.now()
        return true
    }

    return false
}
