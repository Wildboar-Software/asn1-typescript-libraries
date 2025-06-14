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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION ContactFunction */
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
/* END_OF_SYMBOL_DEFINITION ContactFunction */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactFunction */
let _cached_decoder_for_ContactFunction: $.ASN1Decoder<ContactFunction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactFunction */

/* START_OF_SYMBOL_DEFINITION _decode_ContactFunction */
/**
 * @summary Decodes an ASN.1 element into a(n) ContactFunction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContactFunction} The decoded data structure.
 */
export function _decode_ContactFunction(el: _Element) {
    if (!_cached_decoder_for_ContactFunction) {
        _cached_decoder_for_ContactFunction = $._decodeUniversalString;
    }
    return _cached_decoder_for_ContactFunction(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContactFunction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactFunction */
let _cached_encoder_for_ContactFunction: $.ASN1Encoder<ContactFunction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactFunction */

/* START_OF_SYMBOL_DEFINITION _encode_ContactFunction */
/**
 * @summary Encodes a(n) ContactFunction into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContactFunction, encoded as an ASN.1 Element.
 */
export function _encode_ContactFunction(
    value: ContactFunction,
    elGetter: $.ASN1Encoder<ContactFunction>
) {
    if (!_cached_encoder_for_ContactFunction) {
        _cached_encoder_for_ContactFunction = $._encodeUniversalString;
    }
    return _cached_encoder_for_ContactFunction(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContactFunction */

/* eslint-enable */
