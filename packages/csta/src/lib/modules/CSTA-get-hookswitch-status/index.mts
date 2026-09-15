/**
 * @description
 *
 * Physical Device Feature service (ECMA-269 §21.1.5 / ECMA-285 §19.1.5): which
 * hookswitches are present and which are off-hook. Does not generate events.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./getHookswitchStatus.oa.mjs";
export * from "./GetHookswitchStatusArgument.ta.mjs";
export * from "./GetHookswitchStatusResult.ta.mjs";
export * from "./HookswitchStatusList-Item.ta.mjs";
export * from "./HookswitchStatusList.ta.mjs";
