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
 * @summary id_aa_ets_longTermValidation
 * @description
 *
 * Identifies the unsigned `long-term-validation` attribute
 * (CAdES-LT). Value is `LongTermValidation`. Deprecated unless
 * an instance is already present; once added, only further
 * `long-term-validation` attributes may be added. ETSI TS
 * 101 733 V2.2.1 (2013-04) §6.5.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aa-ets-longTermValidation OBJECT IDENTIFIER ::= {
 *     itu-t(0)
 *     identified-organization(4)
 *     etsi(0)
 *     electronic-signature-standard(1733)
 *     attributes(2)
 *     2 }
 * ```
 * 
 * @constant
 */
export
const id_aa_ets_longTermValidation: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* identified-organization */ 4,
    /* etsi */ 0,
    /* electronic-signature-standard */ 1733,
    /* attributes */ 2,
    2,
]);

/* eslint-enable */
