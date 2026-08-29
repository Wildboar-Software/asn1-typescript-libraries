/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { secgCurve } from "../ANSI-X9-62/secgCurve.va.mjs";
/**
 * @summary ansix9p160k1
 * @description
 *
 * Named EC domain parameters (160-bit prime field). Not in ANSI X9.62-1998
 * Annex J; assigned in a later X9.62 / X.894 module compiled
 * into this package.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansix9p160k1 OBJECT IDENTIFIER ::= {secgCurve  9 }
 * ```
 *
 * @constant
 */
export const ansix9p160k1: OBJECT_IDENTIFIER = _OID.fromParts([9], secgCurve);

/* eslint-enable */
