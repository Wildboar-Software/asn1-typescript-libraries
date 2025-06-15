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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary TemplateName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TemplateName  ::=
 *   PrintableString
 *     (FROM ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" |
 *            "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" |
 *            "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" |
 *            "X" | "Y" | "Z" | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" |
 *            "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" |
 *            "t" | "u" | "v" | "w" | "x" | "y" | "z" | "-" | "/"))
 * ```
 */
export type TemplateName = PrintableString; // PrintableString


export const _decode_TemplateName = $._decodePrintableString;


export const _encode_TemplateName = $._encodePrintableString;


/* eslint-enable */
