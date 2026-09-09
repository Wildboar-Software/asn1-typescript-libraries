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
 * @summary id_CAP_GPRS_ReferenceNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-CAP-GPRS-ReferenceNumber OBJECT IDENTIFIER ::= {itu-t(0) identified-organization(4) etsi(0) mobileDomain(0) umts-network(1) as(1) cap-GPRS-ReferenceNumber(5) version3(2)}
 * ```
 * 
 * @constant
 */
export
const id_CAP_GPRS_ReferenceNumber: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* identified-organization */ 4,
    /* etsi */ 0,
    /* mobileDomain */ 0,
    /* umts-network */ 1,
    /* as */ 1,
    /* cap-GPRS-ReferenceNumber */ 5,
    /* version3 */ 2,
]);

/* eslint-enable */
