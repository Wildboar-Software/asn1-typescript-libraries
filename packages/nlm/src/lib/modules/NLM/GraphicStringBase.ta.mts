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

/* START_OF_SYMBOL_DEFINITION GraphicStringBase */
/**
 * @summary GraphicStringBase
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GraphicStringBase  ::=  GraphicString
 * ```
 */
export type GraphicStringBase = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION GraphicStringBase */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GraphicStringBase */
let _cached_decoder_for_GraphicStringBase: $.ASN1Decoder<GraphicStringBase> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GraphicStringBase */

/* START_OF_SYMBOL_DEFINITION _decode_GraphicStringBase */
/**
 * @summary Decodes an ASN.1 element into a(n) GraphicStringBase
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GraphicStringBase} The decoded data structure.
 */
export function _decode_GraphicStringBase(el: _Element) {
    if (!_cached_decoder_for_GraphicStringBase) {
        _cached_decoder_for_GraphicStringBase = $._decodeGraphicString;
    }
    return _cached_decoder_for_GraphicStringBase(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GraphicStringBase */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GraphicStringBase */
let _cached_encoder_for_GraphicStringBase: $.ASN1Encoder<GraphicStringBase> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GraphicStringBase */

/* START_OF_SYMBOL_DEFINITION _encode_GraphicStringBase */
/**
 * @summary Encodes a(n) GraphicStringBase into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GraphicStringBase, encoded as an ASN.1 Element.
 */
export function _encode_GraphicStringBase(
    value: GraphicStringBase,
    elGetter: $.ASN1Encoder<GraphicStringBase>
) {
    if (!_cached_encoder_for_GraphicStringBase) {
        _cached_encoder_for_GraphicStringBase = $._encodeGraphicString;
    }
    return _cached_encoder_for_GraphicStringBase(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GraphicStringBase */

/* eslint-enable */
