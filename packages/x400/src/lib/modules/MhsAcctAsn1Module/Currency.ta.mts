/* eslint-disable */
import {
    PrintableString,
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
 * @summary Currency
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Currency  ::=  PrintableString
 * ```
 */
export type Currency = PrintableString; // PrintableString


export const _decode_Currency = $._decodePrintableString;


export const _encode_Currency = $._encodePrintableString;


/* eslint-enable */
