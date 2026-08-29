/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_sha1
 * @description
 *
 * SHA-1 from ANS X9.30 Part 2. Only KDF hash in this edition;
 * parameters are NULL. Hash output is 160 bits (the minimum the KDFs
 * require). ANS X9.42-2003 §A.2.2, §7.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha1     OBJECT IDENTIFIER ::= { iso(1)
 * identified-organization(3) oiw(14) secsig(3) algorithm(2) sha1(26) }
 * ```
 *
 * @constant
 */
export const id_sha1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* oiw */ 14,
    /* secsig */ 3,
    /* algorithm */ 2,
    /* sha1 */ 26,
]);

/* eslint-enable */
