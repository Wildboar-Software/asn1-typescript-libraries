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

/**
 * @summary GraphicString64
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GraphicString64  ::=  GraphicStringBase(SIZE (0..64))
 * ```
 */
export type GraphicString64 = GraphicStringBase; // DefinedType


let _cached_decoder_for_GraphicString64: $.ASN1Decoder<GraphicString64> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GraphicString64
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GraphicString64} The decoded data structure.
 */
export function _decode_GraphicString64(el: _Element) {
    if (!_cached_decoder_for_GraphicString64) {
        _cached_decoder_for_GraphicString64 = _decode_GraphicStringBase;
    }
    return _cached_decoder_for_GraphicString64(el);
}


let _cached_encoder_for_GraphicString64: $.ASN1Encoder<GraphicString64> | null = null;


/**
 * @summary Encodes a(n) GraphicString64 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GraphicString64, encoded as an ASN.1 Element.
 */
export function _encode_GraphicString64(
    value: GraphicString64,
    elGetter: $.ASN1Encoder<GraphicString64>
) {
    if (!_cached_encoder_for_GraphicString64) {
        _cached_encoder_for_GraphicString64 = _encode_GraphicStringBase;
    }
    return _cached_encoder_for_GraphicString64(value, elGetter);
}


/* eslint-enable */
