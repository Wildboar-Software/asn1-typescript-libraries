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
 * @summary id_spq_ets_unotice
 * @description
 *
 * Signature-policy qualifier id for `sp-user-notice`: a
 * notice that should be displayed whenever the signature is
 * validated (`SPUserNotice`). ETSI TS 101 733 V2.2.1
 * (2013-04) §5.8.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-spq-ets-unotice OBJECT IDENTIFIER ::= {
 *     iso(1)
 *     member-body(2)
 *     us(840)
 *     rsadsi(113549)
 *     pkcs(1)
 *     pkcs9(9)
 *     smime(16)
 *     id-spq(5)
 *     2 }
 * ```
 * 
 * @constant
 */
export
const id_spq_ets_unotice: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    /* smime */ 16,
    /* id-spq */ 5,
    2,
]);

/* eslint-enable */
