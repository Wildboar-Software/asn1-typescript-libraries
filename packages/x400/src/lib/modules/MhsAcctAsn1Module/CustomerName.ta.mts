/* eslint-disable */
import {
    UniversalString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary CustomerName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CustomerName  ::=  UniversalString
 * ```
 */
export type CustomerName = UniversalString; // UniversalString


export const _decode_CustomerName = $._decodeUniversalString;


export const _encode_CustomerName = $._encodeUniversalString;


/* eslint-enable */
