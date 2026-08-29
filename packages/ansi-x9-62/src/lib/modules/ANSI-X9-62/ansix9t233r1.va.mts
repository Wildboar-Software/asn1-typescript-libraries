/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { secgCurve } from "../ANSI-X9-62/secgCurve.va.mjs";
/**
 * @summary ansix9t233r1
 * @description
 *
 * Named EC domain parameters (F2^233). Not in ANSI X9.62-1998
 * Annex J; assigned in a later X9.62 / X.894 module compiled
 * into this package. Later-module ref L.5.3.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansix9t233r1 OBJECT IDENTIFIER ::= {secgCurve  27 }
 * ```
 *
 * @constant
 */
export const ansix9t233r1: OBJECT_IDENTIFIER = _OID.fromParts([27], secgCurve);

/* eslint-enable */
