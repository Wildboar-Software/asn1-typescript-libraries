/* eslint-disable */
import {
    NULL,
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
 * @summary SHA1Parameters
 * @description
 * 
 * SHA-1 parameters: NULL. ISO/IEC 7816-15:2016 Annex A.2.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SHA1Parameters  ::=  NULL
 * ```
 */
export
type SHA1Parameters = NULL; // NullType
export const _decode_SHA1Parameters = $._decodeNull;
export const _encode_SHA1Parameters = $._encodeNull;


/* eslint-enable */
