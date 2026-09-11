/**
 * @description
 *
 * Get Logical Device Information (ECMA-269 §13.1.2 /
 * ECMA-285 §11.1.2). CF queries characteristics of the logical
 * element of a device. Rejected with Object Not Known if the
 * device has no logical element.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./getLogicalDeviceInformation.oa.mjs";
export * from "./GetLogicalDeviceInformationArgument.ta.mjs";
export * from "./GetLogicalDeviceInformationResult.ta.mjs";
