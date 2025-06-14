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

/* START_OF_SYMBOL_DEFINITION ContactName */
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
/* END_OF_SYMBOL_DEFINITION ContactName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactName */
let _cached_decoder_for_ContactName: $.ASN1Decoder<ContactName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactName */

/* START_OF_SYMBOL_DEFINITION _decode_ContactName */
/**
 * @summary Decodes an ASN.1 element into a(n) ContactName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContactName} The decoded data structure.
 */
export function _decode_ContactName(el: _Element) {
    if (!_cached_decoder_for_ContactName) {
        _cached_decoder_for_ContactName = $._decodeUniversalString;
    }
    return _cached_decoder_for_ContactName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContactName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactName */
let _cached_encoder_for_ContactName: $.ASN1Encoder<ContactName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactName */

/* START_OF_SYMBOL_DEFINITION _encode_ContactName */
/**
 * @summary Encodes a(n) ContactName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContactName, encoded as an ASN.1 Element.
 */
export function _encode_ContactName(
    value: ContactName,
    elGetter: $.ASN1Encoder<ContactName>
) {
    if (!_cached_encoder_for_ContactName) {
        _cached_encoder_for_ContactName = $._encodeUniversalString;
    }
    return _cached_encoder_for_ContactName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContactName */

/* eslint-enable */
