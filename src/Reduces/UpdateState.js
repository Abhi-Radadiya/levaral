const initialStateValue = {
  Email: "",
  Subject: "",
  Massage: "",
  Key: 0,
  inboxMassages: [],
};

const actionCreators = (state = initialStateValue, action) => {
  switch (action.type) {
    case "Email":
      return {
        ...state,
        Email: action.payload,
      };
      break;

    case "Subject":
      return {
        ...state,
        Subject: action.payload,
      };
      break;

    case "Massage":
      return {
        ...state,
        Massage: action.payload,
      };
      break;

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

    default:
      break;
  }
};
export default actionCreators;
