/**
 * @description
 *
 * Snapshot Device (ECMA-269 §16.1.2 / ECMA-285 §14.1.2). CF
 * obtains each call at a device and the device's local connection
 * state in that call. Data is inline or segmented Snapshot
 * DeviceData — not both.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./snapshotDevice.oa.mjs";
export * from "./SnapshotDeviceArgument.ta.mjs";
export * from "./SnapshotDeviceResult-crossRefIDorSnapshotData.ta.mjs";
export * from "./SnapshotDeviceResult.ta.mjs";
