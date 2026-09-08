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
 * @summary HelloRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HelloRequest     ::=  NULL
 * ```
 */
export
type HelloRequest = NULL; // NullType
export const _decode_HelloRequest = $._decodeNull;
export const _encode_HelloRequest = $._encodeNull;


/* eslint-enable */
