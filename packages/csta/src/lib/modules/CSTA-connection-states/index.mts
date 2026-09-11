/**
 * @description
 *
 * Connection state and conference/transfer linkage (ECMA-285 §9.4).
 * `LocalConnectionState` is the device-monitor view of a connection
 * (ECMA-269 §12.2.17, §6.1.3). `ConnectionList` maps old ConnectionIDs
 * to new ones after conference or transfer (§12.2.9).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./ConnectionList-Item-associatedNID.ta.mjs";
export * from "./ConnectionList-Item-endpoint.ta.mjs";
export * from "./ConnectionList-Item.ta.mjs";
export * from "./ConnectionList.ta.mjs";
export * from "./LocalConnectionState.ta.mjs";
