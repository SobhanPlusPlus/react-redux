
export const START_LODING = "START_LODING";
export const STOP_LODING = "STOP_LODING";
export function StartLoding() {
  return {
    type: START_LODING,
    payload: true,
  };
}

export function StopLoding() {
  return {
    type: STOP_LODING,
    payload: false,
  };
}



