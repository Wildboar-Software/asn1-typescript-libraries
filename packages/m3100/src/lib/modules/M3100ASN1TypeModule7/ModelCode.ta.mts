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

/* START_OF_SYMBOL_DEFINITION ModelCode */
/**
 * @summary ModelCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModelCode  ::=  GraphicString
 * ```
 */
export type ModelCode = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION ModelCode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModelCode */
let _cached_decoder_for_ModelCode: $.ASN1Decoder<ModelCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModelCode */

/* START_OF_SYMBOL_DEFINITION _decode_ModelCode */
/**
 * @summary Decodes an ASN.1 element into a(n) ModelCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModelCode} The decoded data structure.
 */
export function _decode_ModelCode(el: _Element) {
    if (!_cached_decoder_for_ModelCode) {
        _cached_decoder_for_ModelCode = $._decodeGraphicString;
    }
    return _cached_decoder_for_ModelCode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModelCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModelCode */
let _cached_encoder_for_ModelCode: $.ASN1Encoder<ModelCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModelCode */

/* START_OF_SYMBOL_DEFINITION _encode_ModelCode */
/**
 * @summary Encodes a(n) ModelCode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModelCode, encoded as an ASN.1 Element.
 */
export function _encode_ModelCode(
    value: ModelCode,
    elGetter: $.ASN1Encoder<ModelCode>
) {
    if (!_cached_encoder_for_ModelCode) {
        _cached_encoder_for_ModelCode = $._encodeGraphicString;
    }
    return _cached_encoder_for_ModelCode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModelCode */

/* eslint-enable */
