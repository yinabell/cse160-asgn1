// DrawRectangle.js
function main() {
// Retrieve <canvas> element <- (1)

    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }

    // Get the rendering context for 2DCG <- (2)
    var ctx = canvas.getContext('2d'); 

    // Draw a blue rectangle <- (3)
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // set to black
    ctx.fillRect(0, 0, 400, 400); // Fill a rectangle with the color

    // NOT DYNAMIC
    //var v1 = new Vector3([2.25, 2.25, 0]); 
    //drawVector(ctx, v1, "red"); 

    document.getElementById('button').addEventListener('click', function(){ 

        handleDrawEvent(ctx); 

        }

    );

    document.getElementById('button2').addEventListener('click', function(){ 

        handleDrawOperationEvent(ctx); 

        }

    );
} 

// drawVector(v, color) 
function drawVector(canvas, vector, color){ 

    // scale = 20 
    var x = vector.elements[0] * 20; 
    var y = vector.elements[1] * 20; 

    // color 
    canvas.strokeStyle = color; 

    // pen down 
    canvas.beginPath(); 

    // move pen to center 
    canvas.moveTo(200, 200); 

    // line length 
    canvas.lineTo(200 + x, 200 - y); 

    // draw 
    canvas.stroke(); 

}

// handleDrawEvent() 
function handleDrawEvent(canvas){ 

    // clear canvas 
    canvas.clearRect(0, 0, 400, 400); 
    canvas.fillStyle = 'rgba(0, 0, 0, 1.0)'; 
    canvas.fillRect(0, 0, 400, 400);  

    // grab input from HTML 
    var x1 = document.getElementById('x1').value;
    var y1 = document.getElementById('y1').value;

    var v1 = new Vector3([x1, y1, 0]); 

    drawVector(canvas, v1, "red"); 

    // grab input from HTML 
    var x2 = document.getElementById('x2').value;
    var y2 = document.getElementById('y2').value;

    var v2 = new Vector3([x2, y2, 0]); 

    drawVector(canvas, v2, "blue"); 
}

// handleDrawOperationEvent() 
function handleDrawOperationEvent(canvas){ 
    
    // clear canvas 
    canvas.clearRect(0, 0, 400, 400); 
    canvas.fillStyle = 'rgba(0, 0, 0, 1.0)'; 
    canvas.fillRect(0, 0, 400, 400);  

    // grab input from HTML 
    var x1 = document.getElementById('x1').value;
    var y1 = document.getElementById('y1').value;

    var v1 = new Vector3([x1, y1, 0]); 

    drawVector(canvas, v1, "red"); 

    // grab input from HTML 
    var x2 = document.getElementById('x2').value;
    var y2 = document.getElementById('y2').value;

    var v2 = new Vector3([x2, y2, 0]); 

    drawVector(canvas, v2, "blue"); 

    // grab input from HTML 
    var scale = document.getElementById('scalar').value; 
    var op = document.getElementById('dropdown').value; 

    if (op == 'add'){ 

        var v3 = new Vector3(v1.elements).add(v2); 
        drawVector(canvas, v3, "green"); 

        return;

    }

    if (op == 'sub'){ 

        var v3 = new Vector3(v1.elements).sub(v2); 
        drawVector(canvas, v3, "green"); 

        return;

    }

    if (op == 'mul'){ 

        var v3 = new Vector3(v1.elements).mul(scale); 
        var v4 = new Vector3(v2.elements).mul(scale); 
        drawVector(canvas, v3, "green"); 
        drawVector(canvas, v4, "green"); 

        return;

    }

    if (op == 'div'){ 

        var v3 = new Vector3(v1.elements).div(scale); 
        var v4 = new Vector3(v2.elements).div(scale); 
        drawVector(canvas, v3, "green"); 
        drawVector(canvas, v4, "green"); 

        return;

    }

    if (op == 'mag'){ 

        v1.magnitude();
        v2.magnitude();

        return;

    }

    if (op == 'norm'){ 

        var v3 = new Vector3(v1.elements).normalize(); 
        var v4 = new Vector3(v2.elements).normalize(); 
        drawVector(canvas, v3, "green"); 
        drawVector(canvas, v4, "green"); 

        return;

    }

    if (op == 'ang'){ 

        // dot product of v1 and v2
        var d = Vector3.dot(v1, v2);
        var m1 = v1.magnitude();
        var m2 = v2.magnitude();
        var angle = Math.acos(d / (m1 * m2)) * (180/Math.PI);

        console.log("Angle is ", angle);

        return;

    }

    if (op == 'area'){ 

        // cross product of v1 and v2
        var c = Vector3.cross(v1, v2);
        
        var area = c.magnitude()/2;

        console.log("Area is ", area);

        return;

    }

    //comment

}