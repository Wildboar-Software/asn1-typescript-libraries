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

/* START_OF_SYMBOL_DEFINITION TypeText */
/**
 * @summary TypeText
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TypeText  ::=  GraphicString
 * ```
 */
export type TypeText = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION TypeText */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TypeText */
let _cached_decoder_for_TypeText: $.ASN1Decoder<TypeText> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TypeText */

/* START_OF_SYMBOL_DEFINITION _decode_TypeText */
/**
 * @summary Decodes an ASN.1 element into a(n) TypeText
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TypeText} The decoded data structure.
 */
export function _decode_TypeText(el: _Element) {
    if (!_cached_decoder_for_TypeText) {
        _cached_decoder_for_TypeText = $._decodeGraphicString;
    }
    return _cached_decoder_for_TypeText(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TypeText */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TypeText */
let _cached_encoder_for_TypeText: $.ASN1Encoder<TypeText> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TypeText */

/* START_OF_SYMBOL_DEFINITION _encode_TypeText */
/**
 * @summary Encodes a(n) TypeText into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeText, encoded as an ASN.1 Element.
 */
export function _encode_TypeText(
    value: TypeText,
    elGetter: $.ASN1Encoder<TypeText>
) {
    if (!_cached_encoder_for_TypeText) {
        _cached_encoder_for_TypeText = $._encodeGraphicString;
    }
    return _cached_encoder_for_TypeText(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TypeText */

/* eslint-enable */
