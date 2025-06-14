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

/* START_OF_SYMBOL_DEFINITION RepertoireId */
/**
 * @summary RepertoireId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RepertoireId  ::=  GraphicString
 * ```
 */
export type RepertoireId = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION RepertoireId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RepertoireId */
let _cached_decoder_for_RepertoireId: $.ASN1Decoder<RepertoireId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RepertoireId */

/* START_OF_SYMBOL_DEFINITION _decode_RepertoireId */
/**
 * @summary Decodes an ASN.1 element into a(n) RepertoireId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RepertoireId} The decoded data structure.
 */
export function _decode_RepertoireId(el: _Element) {
    if (!_cached_decoder_for_RepertoireId) {
        _cached_decoder_for_RepertoireId = $._decodeGraphicString;
    }
    return _cached_decoder_for_RepertoireId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RepertoireId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RepertoireId */
let _cached_encoder_for_RepertoireId: $.ASN1Encoder<RepertoireId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RepertoireId */

/* START_OF_SYMBOL_DEFINITION _encode_RepertoireId */
/**
 * @summary Encodes a(n) RepertoireId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepertoireId, encoded as an ASN.1 Element.
 */
export function _encode_RepertoireId(
    value: RepertoireId,
    elGetter: $.ASN1Encoder<RepertoireId>
) {
    if (!_cached_encoder_for_RepertoireId) {
        _cached_encoder_for_RepertoireId = $._encodeGraphicString;
    }
    return _cached_encoder_for_RepertoireId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RepertoireId */

/* eslint-enable */
