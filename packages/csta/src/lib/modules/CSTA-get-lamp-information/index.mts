/**
 * @description
 *
 * Physical Device Feature service (ECMA-269 §21.1.6 / ECMA-285 §19.1.6): one
 * lamp or all lamps (with or without an associated button). Does not generate
 * events.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./getLampInformation.oa.mjs";
export * from "./GetLampInformationArgument.ta.mjs";
export * from "./GetLampInformationResult.ta.mjs";
export * from "./LampList-Item.ta.mjs";
export * from "./LampList.ta.mjs";
