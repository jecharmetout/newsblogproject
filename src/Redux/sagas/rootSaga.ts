import {all} from 'redux-saga/effects'
import postsSagaWatcher from './postsSaga'





export default function* rootSaga(){
    yield all([postsSagaWatcher()])
}