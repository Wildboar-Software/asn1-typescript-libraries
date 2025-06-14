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

/* START_OF_SYMBOL_DEFINITION CalledNumber */
/**
 * @summary CalledNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CalledNumber  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type CalledNumber = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION CalledNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CalledNumber */
let _cached_decoder_for_CalledNumber: $.ASN1Decoder<CalledNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CalledNumber */

/* START_OF_SYMBOL_DEFINITION _decode_CalledNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) CalledNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CalledNumber} The decoded data structure.
 */
export function _decode_CalledNumber(el: _Element) {
    if (!_cached_decoder_for_CalledNumber) {
        _cached_decoder_for_CalledNumber = $._decodeGraphicString;
    }
    return _cached_decoder_for_CalledNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CalledNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CalledNumber */
let _cached_encoder_for_CalledNumber: $.ASN1Encoder<CalledNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CalledNumber */

/* START_OF_SYMBOL_DEFINITION _encode_CalledNumber */
/**
 * @summary Encodes a(n) CalledNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CalledNumber, encoded as an ASN.1 Element.
 */
export function _encode_CalledNumber(
    value: CalledNumber,
    elGetter: $.ASN1Encoder<CalledNumber>
) {
    if (!_cached_encoder_for_CalledNumber) {
        _cached_encoder_for_CalledNumber = $._encodeGraphicString;
    }
    return _cached_encoder_for_CalledNumber(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CalledNumber */

/* eslint-enable */
