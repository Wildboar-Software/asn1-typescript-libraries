/* eslint-disable */
import {
    GraphicString,
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

/* START_OF_SYMBOL_DEFINITION PersonNumber */
/**
 * @summary PersonNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PersonNumber  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type PersonNumber = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION PersonNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonNumber */
let _cached_decoder_for_PersonNumber: $.ASN1Decoder<PersonNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonNumber */

/* START_OF_SYMBOL_DEFINITION _decode_PersonNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) PersonNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PersonNumber} The decoded data structure.
 */
export function _decode_PersonNumber(el: _Element) {
    if (!_cached_decoder_for_PersonNumber) {
        _cached_decoder_for_PersonNumber = $._decodeGraphicString;
    }
    return _cached_decoder_for_PersonNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PersonNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonNumber */
let _cached_encoder_for_PersonNumber: $.ASN1Encoder<PersonNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonNumber */

/* START_OF_SYMBOL_DEFINITION _encode_PersonNumber */
/**
 * @summary Encodes a(n) PersonNumber into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PersonNumber, encoded as an ASN.1 Element.
 */
export function _encode_PersonNumber(
    value: PersonNumber,
    elGetter: $.ASN1Encoder<PersonNumber>
) {
    if (!_cached_encoder_for_PersonNumber) {
        _cached_encoder_for_PersonNumber = $._encodeGraphicString;
    }
    return _cached_encoder_for_PersonNumber(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PersonNumber */

/* eslint-enable */
