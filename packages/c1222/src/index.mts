/**
 * @module
 * @description
 *
 * ANSI C12.22 security-mechanism authentication values from the
 * 2026 edition of ANSI C12.22, *Protocol Specification for
 * Interfacing to Data Communication Networks*. Import from
 * `@wildboar/c1222`, `@wildboar/c1222/C12-22-Security-Mechanism`,
 * or `@wildboar/c1222/C1221-Security-Mechanism`.
 *
 * `Calling-authentication-value-c1222` carries the optional key
 * identifier and initialization vector for the C12.22 mechanism.
 * `Calling-authentication-value-c1221` is the extensible C12.21
 * identification, request, or response.
 */
export * from "./lib/modules/C12-22-Security-Mechanism/index.mjs";
export * from "./lib/modules/C1221-Security-Mechanism/index.mjs";
