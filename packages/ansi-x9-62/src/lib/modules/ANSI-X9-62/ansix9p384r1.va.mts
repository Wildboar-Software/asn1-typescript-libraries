/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { secgCurve } from "../ANSI-X9-62/secgCurve.va.mjs";
/**
 * @summary ansix9p384r1
 * @description
 *
 * Named EC domain parameters (384-bit prime field). Not in ANSI X9.62-1998
 * Annex J; assigned in a later X9.62 / X.894 module compiled
 * into this package. Later-module ref L.6.5.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansix9p384r1 OBJECT IDENTIFIER ::= {secgCurve  34 }
 * ```
 *
 * @constant
 */
export const ansix9p384r1: OBJECT_IDENTIFIER = _OID.fromParts([34], secgCurve);

/* eslint-enable */
