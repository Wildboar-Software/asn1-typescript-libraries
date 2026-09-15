/**
 * @description
 *
 * Snapshot CallData: segmented per-endpoint snapshot of a call after Snapshot
 * Call, when the switch does not put the list in the positive acknowledgement.
 * Whole-call information stays in the Snapshot Call response. ECMA-269 §6.6.3,
 * §16.1.3.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 */
export * from "./snapshotCallData.oa.mjs";
export * from "./SnapshotCallDataArgument.ta.mjs";
