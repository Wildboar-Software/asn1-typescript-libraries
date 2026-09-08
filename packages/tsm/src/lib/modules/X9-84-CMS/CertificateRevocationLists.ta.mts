/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CertificateRevocationLists
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificateRevocationLists  ::=  OCTET STRING
 * ```
 */
export
type CertificateRevocationLists = OCTET_STRING; // OctetStringType
export const _decode_CertificateRevocationLists = $._decodeOctetString;
export const _encode_CertificateRevocationLists = $._encodeOctetString;


/* eslint-enable */
