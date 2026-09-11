/**
 * @description
 *
 * Physical Device Feature service (ECMA-269 §21.1.3 / ECMA-285 §19.1.3): one
 * button or all buttons. Reserved ButtonIDs in Table 12-3: `0`–`9`, `*`=10,
 * `#`=11 (ECMA-269 §12.3.5). Does not generate events.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./ButtonList-Item.ta.mjs";
export * from "./ButtonList.ta.mjs";
export * from "./getButtonInformation.oa.mjs";
export * from "./GetButtonInformationArgument.ta.mjs";
export * from "./GetButtonInformationResult.ta.mjs";
