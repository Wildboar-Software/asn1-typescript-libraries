/**
 * @description
 *
 * Get Switching Function Devices (ECMA-269 §13.1.5 /
 * ECMA-285 §11.1.5). CF starts an asynchronous listing of
 * controllable/observable devices. The positive ack carries
 * `serviceCrossRefID`; the actual list arrives in Switching
 * Function Devices (ECMA-269 §13.1.6).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./getSwitchingFunctionDevices.oa.mjs";
export * from "./GetSwitchingFunctionDevicesArgument.ta.mjs";
export * from "./GetSwitchingFunctionDevicesResult.ta.mjs";
export * from "./ReqDeviceCategory.ta.mjs";
