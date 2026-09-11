/**
 * @description
 *
 * Call and connection identifiers (ECMA-285 §9.3). A `ConnectionID`
 * names a device’s participation in a call (ECMA-269 §6.1.3, §12.3.9).
 * The switching function allocates these IDs; computing functions must
 * not invent them. `CallID` is unique in the switching sub-domain.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./CallID.ta.mjs";
export * from "./ConnectionID-both.ta.mjs";
export * from "./ConnectionID.ta.mjs";
export * from "./LocalDeviceID.ta.mjs";
