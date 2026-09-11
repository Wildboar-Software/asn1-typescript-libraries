/**
 * @description
 *
 * Logical Device Feature service (ECMA-269 §22.1.3 / ECMA-285 §20.1.3): cancel
 * a previous (or all) Call Back features, call-related or not. Null-format
 * target DeviceID (0 characters) cancels all at the originator if the SF
 * supports it. Generates Call Back.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./cancelCallBack.oa.mjs";
export * from "./CancelCallBackArgument.ta.mjs";
export * from "./CancelCallBackResult.ta.mjs";
