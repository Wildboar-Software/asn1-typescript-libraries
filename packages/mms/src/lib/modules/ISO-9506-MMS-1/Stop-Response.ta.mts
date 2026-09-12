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
 * @summary Stop_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Stop-Response  ::=  NULL
 * ```
 */
export
type Stop_Response = NULL; // NullType
export const _decode_Stop_Response = $._decodeNull;
export const _encode_Stop_Response = $._encodeNull;


/* eslint-enable */
