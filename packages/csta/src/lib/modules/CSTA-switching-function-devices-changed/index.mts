/**
 * @description
 *
 * Switching Function Devices Changed (ECMA-269 §14.2.4 /
 * ECMA-285 §12.2.4). SF notifies that the working-domain device
 * set has changed. CF should re-issue Get Switching Function
 * Devices.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./swFunctionDevicesChanged.oa.mjs";
export * from "./SwFunctionDevicesChangedArg.ta.mjs";
export * from "./SwFunctionDevicesChangedRes.ta.mjs";
