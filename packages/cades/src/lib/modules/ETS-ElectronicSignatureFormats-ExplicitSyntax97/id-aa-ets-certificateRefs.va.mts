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
 * @summary id_aa_ets_certificateRefs
 * @description
 *
 * Identifies the unsigned `complete-certificate-references`
 * attribute (CAdES-C). Value is `CompleteCertificateRefs`.
 * References the CA certificates used to validate the ES, up
 * to but not including the signer's certificate. Only a single
 * instance. ETSI TS 101 733 V2.2.1 (2013-04) §6.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aa-ets-certificateRefs OBJECT IDENTIFIER ::= {
 *     iso(1)
 *     member-body(2)
 *     us(840)
 *     rsadsi(113549)
 *     pkcs(1)
 *     pkcs-9(9)
 *     smime(16)
 *     id-aa(2)
 *     21 }
 * ```
 * 
 * @constant
 */
export
const id_aa_ets_certificateRefs: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* id-aa */ 2,
    21,
]);

/* eslint-enable */
