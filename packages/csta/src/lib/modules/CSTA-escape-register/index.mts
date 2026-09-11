/**
 * @description
 *
 * Escape Register: computing function registers to receive Escape requests.
 * Registration itself is not bidirectional (ECMA-269 §29.1.1 / §9.4.2.1,
 * ECMA-285 §27.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./escapeRegister.oa.mjs";
export * from "./EscapeRegisterArgument.ta.mjs";
export * from "./EscapeRegisterResult.ta.mjs";
