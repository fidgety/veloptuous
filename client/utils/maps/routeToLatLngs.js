export default (route) => {
    if (!route || !route.legs) {
        return undefined;
    }

    const latLngs = [];

    route.legs.forEach((leg) => {
        leg.steps.forEach((step) => {
            step.lat_lngs.forEach((latLng) => {
                latLngs.push(latLng);
            });
        });
    });

    return latLngs;
};
