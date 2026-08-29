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
 * @summary id_aa_ATSHashIndex
 * @description
 *
 * Identifies the unsigned `ats-hash-index` attribute carried
 * in the signature of an `archive-time-stamp-v3`. Value is
 * `ATSHashIndex`. Imprints `unsignedAttrs`,
 * `SignedData.certificates`, and `SignedData.crls` so later
 * additions remain distinguishable. Single attribute value.
 * ETSI TS 101 733 V2.2.1 (2013-04) §6.4.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aa-ATSHashIndex OBJECT IDENTIFIER ::= {
 *     itu-t(0)
 *     identified-organization(4)
 *     etsi(0)
 *     electronic-signature-standard(1733)
 *     attributes(2)
 *     5 }
 * ```
 * 
 * @constant
 */
export
const id_aa_ATSHashIndex: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* identified-organization */ 4,
    /* etsi */ 0,
    /* electronic-signature-standard */ 1733,
    /* attributes */ 2,
    5,
]);

/* eslint-enable */
