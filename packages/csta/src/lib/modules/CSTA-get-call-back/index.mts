/**
 * @description
 *
 * Logical Device Feature service (ECMA-269 §22.1.8 / ECMA-285 §20.1.8):
 * callbacks involving the device as originator or target, call-related or not,
 * with or without messages. Deactivated callbacks are omitted (§6.7.4). Does
 * not generate events.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./CallBackList-Item.ta.mjs";
export * from "./CallBackList.ta.mjs";
export * from "./getCallBack.oa.mjs";
export * from "./GetCallBackArgument.ta.mjs";
export * from "./GetCallBackResult.ta.mjs";
