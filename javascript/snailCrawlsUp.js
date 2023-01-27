function snail(column, day, night) {
    let acc = 0;
    for (let i = 0; i < column; i++) {
        acc += day;
        if (acc >= column) {
            return i + 1;
        }
        acc -= night;
    }
}