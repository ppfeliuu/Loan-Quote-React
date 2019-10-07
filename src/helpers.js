export function calculateTotal(quantity, time) {
    


    let totalQuantity;

    if (quantity <= 1000) {
        totalQuantity = quantity * .25;
    } else if (quantity > 1000 && quantity <= 5000) {
        totalQuantity = quantity * .20;
    } else if (quantity > 5000 && quantity <= 10000) {
        totalQuantity = quantity * .15;
    } else {
        totalQuantity = quantity * .10;
    }

    // console.log(totalCantidad);

    let totalTime;

    switch (time) {
        case 3:
            totalTime = quantity * .05;
            break;
        case 6:
            totalTime = quantity * .1;
            break;
        case 12:
            totalTime = quantity * .15;
            break;
        case 24:
            totalTime = quantity * .2;
            break;
        default:
            break;
    }

    return (quantity + totalTime + totalQuantity);
}