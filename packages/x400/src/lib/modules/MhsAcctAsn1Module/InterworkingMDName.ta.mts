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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary InterworkingMDName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InterworkingMDName  ::=  UniversalString
 * ```
 */
export type InterworkingMDName = UniversalString; // UniversalString


export const _decode_InterworkingMDName = $._decodeUniversalString;


export const _encode_InterworkingMDName = $._encodeUniversalString;


/* eslint-enable */
