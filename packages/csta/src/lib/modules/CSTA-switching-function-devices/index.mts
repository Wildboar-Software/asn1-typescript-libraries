/**
 * @description
 *
 * Switching Function Devices (ECMA-269 §13.1.6 / ECMA-285
 * §11.1.6). Unsolicited SF→CF list of devices in the working
 * domain, generated as a result of Get Switching Function Devices.
 * May be segmented (`segmentID` / `lastSegment`). No positive
 * acknowledgement is defined.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./DeviceAttributes.ta.mjs";
export * from "./DeviceList-Item.ta.mjs";
export * from "./DeviceList.ta.mjs";
export * from "./switchingFunctionDevices.oa.mjs";
export * from "./SwitchingFunctionDevicesArgument.ta.mjs";
