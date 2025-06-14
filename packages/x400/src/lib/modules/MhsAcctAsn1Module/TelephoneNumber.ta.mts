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

/* START_OF_SYMBOL_DEFINITION TelephoneNumber */
/**
 * @summary TelephoneNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TelephoneNumber  ::=  UniversalString
 * ```
 */
export type TelephoneNumber = UniversalString; // UniversalString
/* END_OF_SYMBOL_DEFINITION TelephoneNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TelephoneNumber */
let _cached_decoder_for_TelephoneNumber: $.ASN1Decoder<TelephoneNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TelephoneNumber */

/* START_OF_SYMBOL_DEFINITION _decode_TelephoneNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) TelephoneNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TelephoneNumber} The decoded data structure.
 */
export function _decode_TelephoneNumber(el: _Element) {
    if (!_cached_decoder_for_TelephoneNumber) {
        _cached_decoder_for_TelephoneNumber = $._decodeUniversalString;
    }
    return _cached_decoder_for_TelephoneNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TelephoneNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TelephoneNumber */
let _cached_encoder_for_TelephoneNumber: $.ASN1Encoder<TelephoneNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TelephoneNumber */

/* START_OF_SYMBOL_DEFINITION _encode_TelephoneNumber */
/**
 * @summary Encodes a(n) TelephoneNumber into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TelephoneNumber, encoded as an ASN.1 Element.
 */
export function _encode_TelephoneNumber(
    value: TelephoneNumber,
    elGetter: $.ASN1Encoder<TelephoneNumber>
) {
    if (!_cached_encoder_for_TelephoneNumber) {
        _cached_encoder_for_TelephoneNumber = $._encodeUniversalString;
    }
    return _cached_encoder_for_TelephoneNumber(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TelephoneNumber */

/* eslint-enable */
