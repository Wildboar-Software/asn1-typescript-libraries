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

/* START_OF_SYMBOL_DEFINITION SerialNumber */
/**
 * @summary SerialNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SerialNumber  ::=  GraphicString
 * ```
 */
export type SerialNumber = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION SerialNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SerialNumber */
let _cached_decoder_for_SerialNumber: $.ASN1Decoder<SerialNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SerialNumber */

/* START_OF_SYMBOL_DEFINITION _decode_SerialNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) SerialNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SerialNumber} The decoded data structure.
 */
export function _decode_SerialNumber(el: _Element) {
    if (!_cached_decoder_for_SerialNumber) {
        _cached_decoder_for_SerialNumber = $._decodeGraphicString;
    }
    return _cached_decoder_for_SerialNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SerialNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SerialNumber */
let _cached_encoder_for_SerialNumber: $.ASN1Encoder<SerialNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SerialNumber */

/* START_OF_SYMBOL_DEFINITION _encode_SerialNumber */
/**
 * @summary Encodes a(n) SerialNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SerialNumber, encoded as an ASN.1 Element.
 */
export function _encode_SerialNumber(
    value: SerialNumber,
    elGetter: $.ASN1Encoder<SerialNumber>
) {
    if (!_cached_encoder_for_SerialNumber) {
        _cached_encoder_for_SerialNumber = $._encodeGraphicString;
    }
    return _cached_encoder_for_SerialNumber(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SerialNumber */

/* eslint-enable */
