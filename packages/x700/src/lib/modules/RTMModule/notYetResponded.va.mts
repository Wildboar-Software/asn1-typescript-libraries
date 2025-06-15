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
    ResponseTime,
    _decode_ResponseTime,
    _encode_ResponseTime,
} from '../RTMModule/ResponseTime.ta.mjs';
/**
 * @summary notYetResponded
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * notYetResponded ResponseTime ::= seconds:-1
 * ```
 *
 * @constant
 */
export const notYetResponded: ResponseTime = { seconds: -1 };

/* eslint-enable */
