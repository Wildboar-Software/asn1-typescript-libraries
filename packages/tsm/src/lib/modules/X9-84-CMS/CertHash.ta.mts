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
 * @summary CertHash
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertHash  ::=  OCTET STRING (ENCODED BY sha-1)
 * ```
 */
export
type CertHash = OCTET_STRING; // OctetStringType
export const _decode_CertHash = $._decodeOctetString;
export const _encode_CertHash = $._encodeOctetString;


/* eslint-enable */
