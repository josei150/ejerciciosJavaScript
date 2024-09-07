const age = (namePlanet, yearsInSeconds) => {
    return namePlanet == "earth" ? parseFloat((yearsInSeconds / ORBITAL_PERIOD_PER_PLANET[namePlanet]).toFixed(2)) : parseFloat(((yearsInSeconds / ORBITAL_PERIOD_PER_PLANET["earth"]) / ORBITAL_PERIOD_PER_PLANET[namePlanet]).toFixed(2))
};

const ORBITAL_PERIOD_PER_PLANET = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 31557600,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
}

console.log(age('mercury', 2134835688))