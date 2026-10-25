/* eslint-disable */
import { type AUTH_ALG } from "../WTM-Authentication-Operations-asn1-97/AUTH-ALG.oca.mjs";

/**
 * @summary AuthAlgSet
 * @description
 *
 * Object set of `AUTH-ALG` (ECMA-306 §6.3.1), written `{...}` with no objects.
 * `AuthAlgorithm` draws `&id` and `&Type` from this set, so no algorithm object
 * and no parameter type are defined here. Algorithms are outside the scope of
 * ECMA-306 (§1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthAlgSet AUTH-ALG ::= {...}
 * ```
 * 
 * @constant
 * @type {AUTH_ALG[]}
 * 
 */
export
const AuthAlgSet: (AUTH_ALG)[] = [];

/* eslint-enable */
