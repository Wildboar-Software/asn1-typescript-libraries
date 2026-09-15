/**
 * @description
 *
 * Send User Information (ECMA-269 §18.1.6 / ECMA-285 §16.1.6).
 * CF sends user-to-user information from a connection, including
 * independent of call-control activity. Call Information may
 * report the update.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./sendUserInfo.oa.mjs";
export * from "./SendUserInfoArgument.ta.mjs";
export * from "./SendUserInfoResult.ta.mjs";
