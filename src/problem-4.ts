{

    type Circle = {
        shape: 'circle';
        radius: number;
    } // Type for the circle
    type Rectangle = {
        shape: 'rectangle';
        width: number;
        height: number;
    }

    type Shape = Circle | Rectangle; // Union type for the shape
    const calculateShapeArea = (area: Shape): number => {
        if (area.shape === 'circle') {
            return Math.PI * Math.pow(area.radius, 2) // Calculating the area of the circle
        } else if (area.shape === 'rectangle') {
            return (area.width * area.height); // Calculating the area of the rectangle`
        } else {
            return 0;
        }
    }

    const circle: Shape = { shape: 'circle', radius: 3 };
    const circleArea: number = calculateShapeArea(circle);
    console.log('Circle Area', circleArea);

    const rectangle: Shape = { shape: 'rectangle', width: 3, height: 4 };
    const rectangleArea: number = calculateShapeArea(rectangle);
    console.log('Rectangle Area', rectangleArea);

}