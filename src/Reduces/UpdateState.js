const initialStateValue = {
  Key: 1,
  inboxMassages: [],
};

const actionCreators = (state = initialStateValue, action) => {
  switch (action.type) {
    case "inboxMassages":
      return {
        ...state,
        inboxMassages: [...state.inboxMassages, action.payload],
      };
      break;

    case "DeleteMail":
      return {
        ...state,
        inboxMassages: [
          ...state.inboxMassages.slice(0, action.payload),
          ...state.inboxMassages.slice(action.payload + 1),
        ],
      };
      break;
      
      case "UpdateKey":
        return {
          ...state,
        Key: state.Key + 1,
      };
      break;
      
    default:
      break;
  }
};
export default actionCreators;
