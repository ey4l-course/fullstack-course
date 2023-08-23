function populate_array_random(capacity = 10, max_random = 100) {
    const list = [];
    for (let i = 0; i < capacity; i++) {
        list.push(Math.floor(Math.random() * max_random) +1);
    }
    return list;
}

function get_min(list){
    let min = 100;
    for (let i = 0; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i];
        }
    }
    return min;
}

function get_max(list){
    let max = 0;
    for (let i = 0; i < list.length; i++) {
    if (list[i] > max) {
            max = list[i];                
        }
    }
    return max;
}