/**
 * @description
 *
 * Snapshot Call (ECMA-269 §16.1.1 / ECMA-285 §14.1.1). CF
 * obtains devices, connections, local connection states, and call
 * data for one call. Call-wide data is in this ack; per-endpoint
 * `snapshotData` is either inline or segmented Snapshot CallData
 * — not both.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./snapshotCall.oa.mjs";
export * from "./SnapshotCallArgument.ta.mjs";
export * from "./SnapshotCallResult-crossRefIDorSnapshotData.ta.mjs";
export * from "./SnapshotCallResult.ta.mjs";
