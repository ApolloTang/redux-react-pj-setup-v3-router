import _ from 'lodash';

const mapStoreToProps = (store, ownProps) => {
    const routing = _.get(store, `routing.locationBeforeTransitions`, void 0);
    return { routing };
};

export {mapStoreToProps};
