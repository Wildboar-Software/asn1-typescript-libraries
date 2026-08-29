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
 * @summary id_aa_ets_attrCertificateRefs
 * @description
 *
 * Identifies the unsigned `attribute-certificate-references`
 * attribute. Value is `AttributeCertificateRefs`. Used only
 * when a user attribute certificate is present; references the
 * AA certificates used to validate it. Only a single instance.
 * ETSI TS 101 733 V2.2.1 (2013-04) §6.2.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aa-ets-attrCertificateRefs OBJECT IDENTIFIER ::= {
 *     iso(1)
 *     member-body(2)
 *     us(840)
 *     rsadsi(113549)
 *     pkcs(1)
 *     pkcs-9(9)
 *     smime(16)
 *     id-aa(2)
 *     44 }
 * ```
 * 
 * @constant
 */
export
const id_aa_ets_attrCertificateRefs: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* id-aa */ 2,
    44,
]);

/* eslint-enable */
