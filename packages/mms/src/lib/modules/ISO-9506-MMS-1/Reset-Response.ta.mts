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
 * @summary Reset_Response
 * @description
 * 
 * Confirmed success; no parameters. ISO 9506-1:2003 §12.7.1.2
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reset-Response  ::=  NULL
 * ```
 */
export
type Reset_Response = NULL; // NullType
export const _decode_Reset_Response = $._decodeNull;
export const _encode_Reset_Response = $._encodeNull;


/* eslint-enable */
