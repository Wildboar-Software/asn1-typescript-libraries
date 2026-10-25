/* eslint-disable */
import {
    type UniversalString,
    type ASN1Element as _Element,
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
 * @summary ContactCompany
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContactCompany  ::=  UniversalString
 * ```
 */
export type ContactCompany = UniversalString; // UniversalString


export const _decode_ContactCompany: $.ASN1Decoder<string> = $._decodeUniversalString;


export const _encode_ContactCompany: $.ASN1Encoder<string> = $._encodeUniversalString;


/* eslint-enable */
