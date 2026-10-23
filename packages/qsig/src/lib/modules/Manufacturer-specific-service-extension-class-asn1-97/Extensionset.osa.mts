/* eslint-disable */
import { EXTENSION } from "../Manufacturer-specific-service-extension-class-asn1-97/EXTENSION.oca.mjs";

/**
 * @summary Extensionset
 * @description
 *
 * Open reference set written in Table 14 as `Extensionset EXTENSION ::= {...}`.
 * The comment there says ExtensionSet is a set of EXTENSION objects:
 * `extensionId` is an identifier from the set, and `extensionArgument` is that
 * object's argument. ECMA-165 defines no member. The placeholder in a
 * supplementary service supplies the actual set (§9.2). Table 14 spells the
 * parameter ExtensionSet and this value Extensionset.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Extensionset EXTENSION ::= {...}
 * ```
 * 
 * @constant
 * @type {EXTENSION[]}
 * 
 */
export
const Extensionset: (EXTENSION)[] = [];

/* eslint-enable */
