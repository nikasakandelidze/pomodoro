function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function draw(context, start, end, color = 'blue'){
        // Draw our path
        context.beginPath();
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.strokeStyle = '#00f';
        context.lineWidth = 3;
        context.stroke();
        context.fillStyle= color
        context.closePath();
}

exports.sleep = sleep
exports.draw = draw