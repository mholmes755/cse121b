let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;


// To fire
function fireShip()
{
    if (shipCanFire())
    {
        shipAmmo--;
        if (isHit())
        {
            targetHealth--;
            console.log("hit - targetHealth", targetHealth);
        }
        else
        {
            console.log("miss");
        }
    }
    else
    {
        reloadShip();
        console.log("reloading, shipHealth:", shipHealth);
    }
}


// Interaction between two opposing ships
function encounter()
{
    console.log("You see a target");
    if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth))
    {
        fireShip();
        if (isDestroyed(targetHealth))
        {
            console.log("Target eliminated");
        }
        if (isDestroyed(shipHealth))
        {
            console.log("ship destroyed");
        }
    }
}


// true if a randomy generated number is > .5 and false if < .5
function isHit()
{
    return Math.random() > .5;
}


// True if ammo and health are both > 0
function shipCanFire()
{
    return shipAmmo > 0 && shipHealth > 0;
}

// True if health is <= 0
function isDestroyed(shipHealth)
{
    return shipHealth <= 0;
}

// Reduce shipHealth by 1 and increase shipAmmo by 3
function reloadShip()
{
        shipHealth --;
        shipAmmo +=3;
}