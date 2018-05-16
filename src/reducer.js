export default function(state = { count: 0 }, action) {
  if (action.type === "INCREMENT") {
    var copy = { ...state };
    copy.count++;
    return copy;
    // return { ...state, count: ++state.count };
  } else if (action.type === "DECREMENT") {
    state.count--;
  }
  return state;
}
