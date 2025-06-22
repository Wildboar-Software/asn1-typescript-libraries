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
 * @summary ContactName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContactName  ::=  UniversalString
 * ```
 */
export type ContactName = UniversalString; // UniversalString


export const _decode_ContactName = $._decodeUniversalString;


export const _encode_ContactName = $._encodeUniversalString;


/* eslint-enable */
