/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { secgCurve } from "../ANSI-X9-62/secgCurve.va.mjs";
/**
 * @summary ansix9t409r1
 * @description
 *
 * Named EC domain parameters (F2^409). Not in ANSI X9.62-1998
 * Annex J; assigned in a later X9.62 / X.894 module compiled
 * into this package. Later-module ref L.5.5.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansix9t409r1 OBJECT IDENTIFIER ::= {secgCurve  37 }
 * ```
 *
 * @constant
 */
export const ansix9t409r1: OBJECT_IDENTIFIER = _OID.fromParts([37], secgCurve);

/* eslint-enable */
