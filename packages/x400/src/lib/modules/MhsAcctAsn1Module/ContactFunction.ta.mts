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
 * @summary ContactFunction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContactFunction  ::=  UniversalString
 * ```
 */
export type ContactFunction = UniversalString; // UniversalString


export const _decode_ContactFunction = $._decodeUniversalString;


export const _encode_ContactFunction = $._encodeUniversalString;


/* eslint-enable */
