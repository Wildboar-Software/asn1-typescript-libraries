/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";


/**
 * @summary id_sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha1 OBJECT IDENTIFIER ::= {
 * iso(1) identified-organization(3) oiw(14) secsig(3)
 * algorithm(2) 26 }
 * ```
 *
 * @constant
 */
export const id_sha1: OBJECT_IDENTIFIER = new _OID([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* oiw */ 14,
    /* secsig */ 3,
    /* algorithm */ 2,
    26,
]);

/* eslint-enable */
