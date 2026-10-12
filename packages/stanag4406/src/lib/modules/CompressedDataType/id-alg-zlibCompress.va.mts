/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary id_alg_zlibCompress
 * @description
 * 
 * ZLIB, `{iso(1) member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs-9(9)
 * smime(16) alg(3) 8}`. Annex E says the integer 0 should be sent instead of
 * this identifier. Support of ZLIB is mandatory. STANAG 4406 (Ed. 2), Annex E,
 * clause 4.2.6.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-alg-zlibCompress OBJECT IDENTIFIER ::= {
 *     iso(1)
 *     member-body(2)
 *     us(840)
 *     rsadsi(113549)
 *     pkcs(1)
 *     pkcs-9(9)
 *     smime(16)
 *     alg(3)
 *     8
 * }
 * ```
 * 
 * @constant
 */
export
const id_alg_zlibCompress: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* alg */ 3,
    8,
]);

/* eslint-enable */
