const initialState = {
  allNews: [],
  createdNews: [],
  inProgressNew: {},
  maxOffset: 0,
  actualOffset: 0,
  form: '',
  totalPosts: 0,
  token: false
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'news/all':
      return {
        ...state,
        allNews: [...state.allNews, ...action.payload],
      };
    case 'news/some':
      return {
        ...state,
        someNews: action.payload,
      };
    case 'news/byId':
      return {
        ...state,
        specificNews: action.payload,
      };
    case 'news/create':
      return {
        ...state,
        form: action.payload ? 'error' : 'submitted',
      };
    case 'offset/add':
      return {
        ...state,
        actualOffset: action.payload + 6,
      };
    case 'offset/max':
      return {
        ...state,
        maxOffset: action.payload,
      };
    case 'set/totalPosts':
      return {
        ...state,
        totalPosts: action.payload,
      };
    case 'set/form':
      return {
        ...state,
        form: action.payload,
      };
    case 'auth/token':
      return {
        ...state,
        token: action.payload,
      };
    case 'reset':
      return {
        ...state,
        allNews: [],
        maxOffset: 0,
        actualOffset: 0
      }
    default:
      return state;
  }
};

export default newsReducer;
