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
 * @summary SupplementaryError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupplementaryError  ::=  UniversalString
 * ```
 */
export type SupplementaryError = UniversalString; // UniversalString


export const _decode_SupplementaryError = $._decodeUniversalString;


export const _encode_SupplementaryError = $._encodeUniversalString;


/* eslint-enable */
