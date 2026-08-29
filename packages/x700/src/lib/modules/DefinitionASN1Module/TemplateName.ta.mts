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
 * @summary TemplateName
 * @description
 *
 * GDMO template label (PrintableString; `/` allowed). Value of
 * `templateName`, which names a template managed object under a
 * document and equals the label of the represented template.
 * ITU-T Rec. X.750 (10/96)
 * [§8.1.2.12](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [§8.2.2.4](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.1](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.3](https://www.itu.int/rec/T-REC-X.750-199610-I).
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
