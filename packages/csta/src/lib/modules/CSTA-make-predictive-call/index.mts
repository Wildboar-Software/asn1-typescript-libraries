/**
 * @description
 *
 * Make Predictive Call (ECMA-269 §17.1.20 / ECMA-285
 * §15.1.20): originate a call by first connecting the called
 * device.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./DefaultAction.ta.mjs";
export * from "./DestinationCondition.ta.mjs";
export * from "./DestinationDetection-Item.ta.mjs";
export * from "./DestinationDetection.ta.mjs";
export {
    _enum_for_DetectionAction,
    DetectionAction,
    DetectionAction_clearCalledConnection,
    clearCalledConnection,
    DetectionAction_remainConnected,
    _decode_DetectionAction,
    _encode_DetectionAction,
} from "./DetectionAction.ta.mjs";
export * from "./makePredictiveCall.oa.mjs";
export * from "./MakePredictiveCallArgument.ta.mjs";
export * from "./MakePredictiveCallResult.ta.mjs";
export * from "./SignallingCondition.ta.mjs";
export {
    _enum_for_SignallingConditionsAction,
    SignallingConditionsAction,
    SignallingConditionsAction_destinationDetection,
    destinationDetection,
    SignallingConditionsAction_remainConnected,
    _decode_SignallingConditionsAction,
    _encode_SignallingConditionsAction,
} from "./SignallingConditionsAction.ta.mjs";
export * from "./SignallingDetection.ta.mjs";
