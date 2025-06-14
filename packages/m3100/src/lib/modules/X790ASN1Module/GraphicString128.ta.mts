/* eslint-disable */
import {
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
import {
    GraphicStringBase,
    _decode_GraphicStringBase,
    _encode_GraphicStringBase,
} from '../X790ASN1Module/GraphicStringBase.ta.mjs';
/* START_OF_SYMBOL_DEFINITION GraphicString128 */
/**
 * @summary GraphicString128
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GraphicString128  ::=  GraphicStringBase(SIZE (0..128))
 * ```
 */
export type GraphicString128 = GraphicStringBase; // DefinedType
/* END_OF_SYMBOL_DEFINITION GraphicString128 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GraphicString128 */
let _cached_decoder_for_GraphicString128: $.ASN1Decoder<GraphicString128> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GraphicString128 */

/* START_OF_SYMBOL_DEFINITION _decode_GraphicString128 */
/**
 * @summary Decodes an ASN.1 element into a(n) GraphicString128
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GraphicString128} The decoded data structure.
 */
export function _decode_GraphicString128(el: _Element) {
    if (!_cached_decoder_for_GraphicString128) {
        _cached_decoder_for_GraphicString128 = _decode_GraphicStringBase;
    }
    return _cached_decoder_for_GraphicString128(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GraphicString128 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GraphicString128 */
let _cached_encoder_for_GraphicString128: $.ASN1Encoder<GraphicString128> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GraphicString128 */

/* START_OF_SYMBOL_DEFINITION _encode_GraphicString128 */
/**
 * @summary Encodes a(n) GraphicString128 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GraphicString128, encoded as an ASN.1 Element.
 */
export function _encode_GraphicString128(
    value: GraphicString128,
    elGetter: $.ASN1Encoder<GraphicString128>
) {
    if (!_cached_encoder_for_GraphicString128) {
        _cached_encoder_for_GraphicString128 = _encode_GraphicStringBase;
    }
    return _cached_encoder_for_GraphicString128(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GraphicString128 */

/* eslint-enable */
