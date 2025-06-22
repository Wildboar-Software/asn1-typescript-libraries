/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";

/**
 * @summary sha_1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha-1 OBJECT IDENTIFIER ::= { iso(1)
 * identified-organization(3) oiw(14) secsig(3) algorithm(2) 26 }
 * ```
 *
 * @constant
 */
export const sha_1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* oiw */ 14,
    /* secsig */ 3,
    /* algorithm */ 2,
    26,
]);

/* eslint-enable */
