/**
 * @description
 *
 * Switching-function objects visible across the CSTA service boundary
 * (ECMA-285 §9.1; ECMA-269 §6.1). `CSTAObject` is either a device
 * (`DeviceID`) or a call referenced by `ConnectionID`. Used where a
 * service or monitor may target either kind of object.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./CSTAObject.ta.mjs";
