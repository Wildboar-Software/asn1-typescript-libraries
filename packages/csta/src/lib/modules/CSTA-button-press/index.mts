/**
 * @description
 *
 * Physical Device Feature service (ECMA-269 §21.1.1 / ECMA-285 §19.1.1):
 * simulate activation of a specified button at a specified device. Button
 * model: §6.1.1.1.3. Reserved ButtonIDs in Table 12-3: `0`–`9`, `*`=10, `#`=11
 * (ECMA-269 §12.3.5). Generates a Button Press event.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./buttonPress.oa.mjs";
export * from "./ButtonPressArgument.ta.mjs";
export * from "./ButtonPressResult.ta.mjs";
