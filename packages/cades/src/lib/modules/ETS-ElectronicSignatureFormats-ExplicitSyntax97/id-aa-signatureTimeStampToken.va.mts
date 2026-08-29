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
 * @summary id_aa_signatureTimeStampToken
 * @description
 *
 * Identifies the unsigned `signature-time-stamp` attribute
 * (CAdES-T). Value is a `TimeStampToken` whose
 * `messageImprint` is a hash of `SignerInfo.signature`.
 * Several instances from different TSAs may occur.
 * ETSI TS 101 733 V2.2.1 (2013-04) §6.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aa-signatureTimeStampToken OBJECT IDENTIFIER ::= {
 *     iso(1)
 *     member-body(2)
 *     us(840)
 *     rsadsi(113549)
 *     pkcs(1)
 *     pkcs-9(9)
 *     smime(16)
 *     id-aa(2)
 *     14 }
 * ```
 * 
 * @constant
 */
export
const id_aa_signatureTimeStampToken: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* id-aa */ 2,
    14,
]);

/* eslint-enable */
