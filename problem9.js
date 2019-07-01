function pythagoreanTriples() {
    for (let i = 2; i < 900; i++) {
        for (let j = i; j < 900; j++) {
            for (let k = j; k < 900; k++) {
                if((i**2) + (j**2) == (k**2)) {
                    if(i + j + k === 1000) {
                        return i * j * k;
                    }
                }
            }
        }
    } 
}

console.log(pythagoreanTriples());
