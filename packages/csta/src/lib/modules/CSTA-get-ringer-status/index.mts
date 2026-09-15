/**
 * @description
 *
 * Physical Device Feature service (ECMA-269 §21.1.11 / ECMA-285 §19.1.11):
 * ringing/not ringing, ring count, pattern, and volume for one or all ringers.
 * Does not generate events.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./getRingerStatus.oa.mjs";
export * from "./GetRingerStatusArgument.ta.mjs";
export * from "./GetRingerStatusResult.ta.mjs";
export * from "./RingerStatusList-Item.ta.mjs";
export * from "./RingerStatusList.ta.mjs";
