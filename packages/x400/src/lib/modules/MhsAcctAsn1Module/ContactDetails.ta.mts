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

/* START_OF_SYMBOL_DEFINITION ContactDetails */
/**
 * @summary ContactDetails
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContactDetails  ::=  UniversalString
 * ```
 */
export type ContactDetails = UniversalString; // UniversalString
/* END_OF_SYMBOL_DEFINITION ContactDetails */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactDetails */
let _cached_decoder_for_ContactDetails: $.ASN1Decoder<ContactDetails> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactDetails */

/* START_OF_SYMBOL_DEFINITION _decode_ContactDetails */
/**
 * @summary Decodes an ASN.1 element into a(n) ContactDetails
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContactDetails} The decoded data structure.
 */
export function _decode_ContactDetails(el: _Element) {
    if (!_cached_decoder_for_ContactDetails) {
        _cached_decoder_for_ContactDetails = $._decodeUniversalString;
    }
    return _cached_decoder_for_ContactDetails(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContactDetails */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactDetails */
let _cached_encoder_for_ContactDetails: $.ASN1Encoder<ContactDetails> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactDetails */

/* START_OF_SYMBOL_DEFINITION _encode_ContactDetails */
/**
 * @summary Encodes a(n) ContactDetails into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContactDetails, encoded as an ASN.1 Element.
 */
export function _encode_ContactDetails(
    value: ContactDetails,
    elGetter: $.ASN1Encoder<ContactDetails>
) {
    if (!_cached_encoder_for_ContactDetails) {
        _cached_encoder_for_ContactDetails = $._encodeUniversalString;
    }
    return _cached_encoder_for_ContactDetails(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContactDetails */

/* eslint-enable */
