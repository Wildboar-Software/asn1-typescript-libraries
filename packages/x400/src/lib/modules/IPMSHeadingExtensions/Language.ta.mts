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
 * @summary Language
 * @description
 *
 * This Specification cites the following Language Code specification: – ISO 639: 1988,
 * Code for the representation of names of languages. 2.5 Character Sets This Specification
 * cites the following Character Set specifications: – – ISO 2375:1985, Data processing –
 * Procedure for registration of escape sequences. See ITU-T X.420 (1999), §2.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Language  ::=  PrintableString(SIZE (2 | 5))
 * ```
 */
export type Language = PrintableString; // PrintableString


export const _decode_Language = $._decodePrintableString;


export const _encode_Language = $._encodePrintableString;


/* eslint-enable */
