/**
 * @module
 * @description
 *
 * Operations for Call Priority Interruption (SS-CPI) and Call
 * Priority Interruption Protection (SS-CPIP), ECMA-264 3rd ed.,
 * Dec 2001, §6.3.1. A priority call can take a B-channel from an
 * established call whose protection level is strictly lower.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
 */
export * from "./CPICapabilityLevel.ta.mjs";
export * from "./CPIPExtSet.osa.mjs";
export * from "./CPIPRequestArg-argumentExtension.ta.mjs";
export * from "./CPIPRequestArg.ta.mjs";
export * from "./CPIProtectionLevel.ta.mjs";
export * from "./CPIRequestArg-argumentExtension.ta.mjs";
export * from "./CPIRequestArg.ta.mjs";
export * from "./Call-Interruption-Operations.osa.mjs";
export * from "./callInterruptionRequest.oa.mjs";
export * from "./callProtectionRequest.oa.mjs";
