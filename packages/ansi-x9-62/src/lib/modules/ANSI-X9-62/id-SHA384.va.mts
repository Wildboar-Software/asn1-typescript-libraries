/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";

/**
 * @summary id_SHA384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-SHA384 OBJECT IDENTIFIER ::= {
 * joint-iso-itu-t(2) country(16) us(840) organization(1) gov(101) csor(3) nistalgorithm(4) hashalgs(2) 2 }
 * ```
 *
 * @constant
 */
export const id_SHA384: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* gov */ 101,
    /* csor */ 3,
    /* nistalgorithm */ 4,
    /* hashalgs */ 2,
    2,
]);

/* eslint-enable */
