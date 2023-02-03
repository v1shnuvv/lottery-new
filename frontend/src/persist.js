import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import {createStore} from 'redux';

const persistConfig = {
  key: 'root',
  storage: storage,
};

const initialState = { 
  final: [], 
  linearray: [],
  offerarray:[],
  ltryid:"",
  ltryname:"",
  issubidexist:false,
  lotterydetails:[],
  iscolumnexist: false
};

function todoReducer(prevState=initialState, action) {
  switch (action.type) { 
    case 'setFinal': 
      return {...prevState, final: action.payload};
      break;  
      case 'setLineArray': 
        return {...prevState, linearray: action.payload};
        break;
        case 'setLotterydetails': 
        return {...prevState, lotterydetails: action.payload};
        break;
        case 'setOfferArray': 
        return {...prevState, offerarray: action.payload};
        break; 
        case "issubidexist":
          return {...prevState, issubidexist:action.payload}
        case "iscolumnexist":
            return { ...prevState, iscolumnexist: action.payload };
        break; 
        // case "setLtryid":
        //   return { ...prevState, ltryid: action.payload };
        //   break;
        // case "setLtryname":
        //   return { ...prevState, ltryname: action.payload };
        //   break;
    default:
      return prevState;
  }
}

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
