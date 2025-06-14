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

/* START_OF_SYMBOL_DEFINITION CustomerWorkCenter */
/**
 * @summary CustomerWorkCenter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CustomerWorkCenter  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type CustomerWorkCenter = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION CustomerWorkCenter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CustomerWorkCenter */
let _cached_decoder_for_CustomerWorkCenter: $.ASN1Decoder<CustomerWorkCenter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CustomerWorkCenter */

/* START_OF_SYMBOL_DEFINITION _decode_CustomerWorkCenter */
/**
 * @summary Decodes an ASN.1 element into a(n) CustomerWorkCenter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CustomerWorkCenter} The decoded data structure.
 */
export function _decode_CustomerWorkCenter(el: _Element) {
    if (!_cached_decoder_for_CustomerWorkCenter) {
        _cached_decoder_for_CustomerWorkCenter = $._decodeGraphicString;
    }
    return _cached_decoder_for_CustomerWorkCenter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CustomerWorkCenter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CustomerWorkCenter */
let _cached_encoder_for_CustomerWorkCenter: $.ASN1Encoder<CustomerWorkCenter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CustomerWorkCenter */

/* START_OF_SYMBOL_DEFINITION _encode_CustomerWorkCenter */
/**
 * @summary Encodes a(n) CustomerWorkCenter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CustomerWorkCenter, encoded as an ASN.1 Element.
 */
export function _encode_CustomerWorkCenter(
    value: CustomerWorkCenter,
    elGetter: $.ASN1Encoder<CustomerWorkCenter>
) {
    if (!_cached_encoder_for_CustomerWorkCenter) {
        _cached_encoder_for_CustomerWorkCenter = $._encodeGraphicString;
    }
    return _cached_encoder_for_CustomerWorkCenter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CustomerWorkCenter */

/* eslint-enable */
