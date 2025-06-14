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

/* START_OF_SYMBOL_DEFINITION LineImage */
/**
 * @summary LineImage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LineImage  ::=
 *   GraphicString
 * ```
 */
export type LineImage = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION LineImage */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LineImage */
let _cached_decoder_for_LineImage: $.ASN1Decoder<LineImage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LineImage */

/* START_OF_SYMBOL_DEFINITION _decode_LineImage */
/**
 * @summary Decodes an ASN.1 element into a(n) LineImage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LineImage} The decoded data structure.
 */
export function _decode_LineImage(el: _Element) {
    if (!_cached_decoder_for_LineImage) {
        _cached_decoder_for_LineImage = $._decodeGraphicString;
    }
    return _cached_decoder_for_LineImage(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LineImage */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LineImage */
let _cached_encoder_for_LineImage: $.ASN1Encoder<LineImage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LineImage */

/* START_OF_SYMBOL_DEFINITION _encode_LineImage */
/**
 * @summary Encodes a(n) LineImage into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LineImage, encoded as an ASN.1 Element.
 */
export function _encode_LineImage(
    value: LineImage,
    elGetter: $.ASN1Encoder<LineImage>
) {
    if (!_cached_encoder_for_LineImage) {
        _cached_encoder_for_LineImage = $._encodeGraphicString;
    }
    return _cached_encoder_for_LineImage(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LineImage */

/* eslint-enable */
