/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { secgCurve } from "../ANSI-X9-62/secgCurve.va.mjs";
/**
 * @summary ansix9t193r2
 * @description
 *
 * Named EC domain parameters (F2^193). Not in ANSI X9.62-1998
 * Annex J; assigned in a later X9.62 / X.894 module compiled
 * into this package.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansix9t193r2 OBJECT IDENTIFIER ::= {secgCurve  25 }
 * ```
 *
 * @constant
 */
export const ansix9t193r2: OBJECT_IDENTIFIER = _OID.fromParts([25], secgCurve);

/* eslint-enable */
