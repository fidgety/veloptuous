import { SAMPLE_RATE } from '../../constants';

const elevationsService = new google.maps.ElevationService();

export default samplePoints => new Promise((resolve, reject) => {
    elevationsService.getElevationForLocations({
        locations: samplePoints
    }, (results, status) => {
        if (status === google.maps.ElevationStatus.OK) {
            return resolve(results);
        }

        console.log('bad response from elevations service', samplePoints, results, status);
        reject('bad response from elevations service');
    });
});

export const calculatePercentages = (elevations) => {
    const percentages = {
        upSeven: 0,
        upThree: 0,
        flatish: 0,
        downThree: 0,
        downSeven: 0
    };

    return elevations.reduce((percentagesTally, elevation, index, array) => {
        if (index === 0) {
            return percentagesTally;
        }
        const prevElevation = array[index - 1].elevation;
        const rise = prevElevation - elevation.elevation;
        const percent = (rise / SAMPLE_RATE) * 100;

        if (percent > 7) {
            percentagesTally.upSeven += SAMPLE_RATE;
        } else if (percent > 3) {
            percentagesTally.upThree += SAMPLE_RATE;
        } else if (percent < 3 && percent > -3) {
            percentagesTally.flatish += SAMPLE_RATE;
        } else if (percent < -7) {
            percentagesTally.downSeven += SAMPLE_RATE;
        } else if (percent < -3) {
            percentagesTally.downThree += SAMPLE_RATE;
        }

        return percentagesTally;
    }, percentages);
};
