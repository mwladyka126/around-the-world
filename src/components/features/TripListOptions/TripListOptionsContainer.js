import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase,  createActionAddSearchTag, createActionRemoveSearchTag, createActionChangeSearchDurationTo, createActionChangeSearchDurationFrom } from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  addSearchTag: tag=> dispatch(createActionAddSearchTag(tag)),
  removeSearchTag: tag=> dispatch(createActionRemoveSearchTag(tag)),
  searchDurationTo: value=> dispatch(createActionChangeSearchDurationTo(value)),
  searchDurationFrom: value=> dispatch(createActionChangeSearchDurationFrom(value)),
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
