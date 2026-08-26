/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";




/**
 * @summary id_aa_er_external
 * @description
 *
 * CMS attribute OID for an Evidence Record when the CMS object and
 * the signed or encrypted content are archive-timestamped as
 * separate objects in one data object group: hashes of both MUST
 * appear in the first hash-value list. Placed as an unsigned
 * attribute (signed data) or unprotected attribute (enveloped data),
 * preferably on the first signature. (RFC 4998 Appendix A.)
 *
 * SHOULD occur only once; if several appear, store them in the first
 * signature in chronological order. Value
 * `{ iso(1) member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs9(9)
 * smime(16) id-aa(2) 50 }`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aa-er-external  OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 *     us(840) rsadsi(113549) pkcs(1) pkcs9(9) smime(16) id-aa(2) 50 }
 * ```
 *
 * @constant
 */
export
const id_aa_er_external: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    /* smime */ 16,
    /* id-aa */ 2,
    50,
]);

/* eslint-enable */
