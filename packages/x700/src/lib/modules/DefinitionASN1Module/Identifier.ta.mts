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

/* START_OF_SYMBOL_DEFINITION Identifier */
/**
 * @summary Identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Identifier  ::=
 *   PrintableString
 *     (FROM ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" |
 *            "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" |
 *            "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" |
 *            "X" | "Y" | "Z" | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" |
 *            "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" |
 *            "t" | "u" | "v" | "w" | "x" | "y" | "z" | "-"))
 * ```
 */
export type Identifier = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION Identifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Identifier */
let _cached_decoder_for_Identifier: $.ASN1Decoder<Identifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Identifier */

/* START_OF_SYMBOL_DEFINITION _decode_Identifier */
/**
 * @summary Decodes an ASN.1 element into a(n) Identifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Identifier} The decoded data structure.
 */
export function _decode_Identifier(el: _Element) {
    if (!_cached_decoder_for_Identifier) {
        _cached_decoder_for_Identifier = $._decodePrintableString;
    }
    return _cached_decoder_for_Identifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Identifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Identifier */
let _cached_encoder_for_Identifier: $.ASN1Encoder<Identifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Identifier */

/* START_OF_SYMBOL_DEFINITION _encode_Identifier */
/**
 * @summary Encodes a(n) Identifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Identifier, encoded as an ASN.1 Element.
 */
export function _encode_Identifier(
    value: Identifier,
    elGetter: $.ASN1Encoder<Identifier>
) {
    if (!_cached_encoder_for_Identifier) {
        _cached_encoder_for_Identifier = $._encodePrintableString;
    }
    return _cached_encoder_for_Identifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Identifier */

/* eslint-enable */
