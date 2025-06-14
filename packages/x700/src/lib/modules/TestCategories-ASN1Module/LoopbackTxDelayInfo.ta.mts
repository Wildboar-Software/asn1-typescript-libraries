/* eslint-disable */
import {
    NULL,
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

/* START_OF_SYMBOL_DEFINITION LoopbackTxDelayInfo */
/**
 * @summary LoopbackTxDelayInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackTxDelayInfo  ::=  NULL
 * ```
 */
export type LoopbackTxDelayInfo = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION LoopbackTxDelayInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LoopbackTxDelayInfo */
let _cached_decoder_for_LoopbackTxDelayInfo: $.ASN1Decoder<LoopbackTxDelayInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LoopbackTxDelayInfo */

/* START_OF_SYMBOL_DEFINITION _decode_LoopbackTxDelayInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) LoopbackTxDelayInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LoopbackTxDelayInfo} The decoded data structure.
 */
export function _decode_LoopbackTxDelayInfo(el: _Element) {
    if (!_cached_decoder_for_LoopbackTxDelayInfo) {
        _cached_decoder_for_LoopbackTxDelayInfo = $._decodeNull;
    }
    return _cached_decoder_for_LoopbackTxDelayInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LoopbackTxDelayInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LoopbackTxDelayInfo */
let _cached_encoder_for_LoopbackTxDelayInfo: $.ASN1Encoder<LoopbackTxDelayInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LoopbackTxDelayInfo */

/* START_OF_SYMBOL_DEFINITION _encode_LoopbackTxDelayInfo */
/**
 * @summary Encodes a(n) LoopbackTxDelayInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoopbackTxDelayInfo, encoded as an ASN.1 Element.
 */
export function _encode_LoopbackTxDelayInfo(
    value: LoopbackTxDelayInfo,
    elGetter: $.ASN1Encoder<LoopbackTxDelayInfo>
) {
    if (!_cached_encoder_for_LoopbackTxDelayInfo) {
        _cached_encoder_for_LoopbackTxDelayInfo = $._encodeNull;
    }
    return _cached_encoder_for_LoopbackTxDelayInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LoopbackTxDelayInfo */

/* eslint-enable */
