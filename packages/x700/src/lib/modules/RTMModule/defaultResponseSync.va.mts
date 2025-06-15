/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import {
    ResponseSync,
    _enum_for_ResponseSync,
    ResponseSync_singleCast /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_ResponseSync,
    _encode_ResponseSync,
} from '../RTMModule/ResponseSync.ta.mjs';
/**
 * @summary defaultResponseSync
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultResponseSync ResponseSync ::= singleCast
 * ```
 *
 * @constant
 */
export const defaultResponseSync: ResponseSync = ResponseSync_singleCast;

/* eslint-enable */
