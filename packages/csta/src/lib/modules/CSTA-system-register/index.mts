/**
 * @description
 *
 * System Register (ECMA-269 §14.1.2 / ECMA-285 §12.1.2).
 * CF registers to receive system services from the SF. If the SF
 * supports System Status Registration, CF shall register before
 * receiving SF-initiated system requests (ECMA-269 §6.6.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./RequestTypes.ta.mjs";
export * from "./StatusFilter.ta.mjs";
export * from "./systemRegister.oa.mjs";
export * from "./SystemRegisterArgument.ta.mjs";
export * from "./SystemRegisterResult.ta.mjs";
