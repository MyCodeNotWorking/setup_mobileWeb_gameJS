// deltaTime.js

class DeltaTime {
    constructor() {
        this.lastUpdateTime = Date.now();
    }

    calculateDT() {
        let currentTime = Date.now();
        let deltaTime = (currentTime - this.lastUpdateTime) / 1000; // Convert to seconds
        this.lastUpdateTime = currentTime;
        return deltaTime;
    }
}

export default DeltaTime;
