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

/* START_OF_SYMBOL_DEFINITION Language */
/**
 * @summary Language
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Language  ::=  PrintableString(SIZE (2 | 5))
 * ```
 */
export type Language = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION Language */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Language */
let _cached_decoder_for_Language: $.ASN1Decoder<Language> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Language */

/* START_OF_SYMBOL_DEFINITION _decode_Language */
/**
 * @summary Decodes an ASN.1 element into a(n) Language
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Language} The decoded data structure.
 */
export function _decode_Language(el: _Element) {
    if (!_cached_decoder_for_Language) {
        _cached_decoder_for_Language = $._decodePrintableString;
    }
    return _cached_decoder_for_Language(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Language */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Language */
let _cached_encoder_for_Language: $.ASN1Encoder<Language> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Language */

/* START_OF_SYMBOL_DEFINITION _encode_Language */
/**
 * @summary Encodes a(n) Language into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Language, encoded as an ASN.1 Element.
 */
export function _encode_Language(
    value: Language,
    elGetter: $.ASN1Encoder<Language>
) {
    if (!_cached_encoder_for_Language) {
        _cached_encoder_for_Language = $._encodePrintableString;
    }
    return _cached_encoder_for_Language(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Language */

/* eslint-enable */
