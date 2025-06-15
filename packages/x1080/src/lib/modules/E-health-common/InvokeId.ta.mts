/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION InvokeId */
/**
 * @summary InvokeId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeId  ::=  INTEGER (1..MAX)
 * ```
 */
export type InvokeId = INTEGER;
/* END_OF_SYMBOL_DEFINITION InvokeId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeId */
let _cached_decoder_for_InvokeId: $.ASN1Decoder<InvokeId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeId */

/* START_OF_SYMBOL_DEFINITION _decode_InvokeId */
/**
 * @summary Decodes an ASN.1 element into a(n) InvokeId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeId} The decoded data structure.
 */
export function _decode_InvokeId(el: _Element) {
    if (!_cached_decoder_for_InvokeId) {
        _cached_decoder_for_InvokeId = $._decodeInteger;
    }
    return _cached_decoder_for_InvokeId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InvokeId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeId */
let _cached_encoder_for_InvokeId: $.ASN1Encoder<InvokeId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeId */

/* START_OF_SYMBOL_DEFINITION _encode_InvokeId */
/**
 * @summary Encodes a(n) InvokeId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeId, encoded as an ASN.1 Element.
 */
export function _encode_InvokeId(
    value: InvokeId,
    elGetter: $.ASN1Encoder<InvokeId>
) {
    if (!_cached_encoder_for_InvokeId) {
        _cached_encoder_for_InvokeId = $._encodeInteger;
    }
    return _cached_encoder_for_InvokeId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InvokeId */

/* eslint-enable */
