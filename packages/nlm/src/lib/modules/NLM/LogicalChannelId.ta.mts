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

/* START_OF_SYMBOL_DEFINITION LogicalChannelId */
/**
 * @summary LogicalChannelId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LogicalChannelId  ::=  INTEGER(1..4095)
 * ```
 */
export type LogicalChannelId = INTEGER;
/* END_OF_SYMBOL_DEFINITION LogicalChannelId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LogicalChannelId */
let _cached_decoder_for_LogicalChannelId: $.ASN1Decoder<LogicalChannelId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LogicalChannelId */

/* START_OF_SYMBOL_DEFINITION _decode_LogicalChannelId */
/**
 * @summary Decodes an ASN.1 element into a(n) LogicalChannelId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LogicalChannelId} The decoded data structure.
 */
export function _decode_LogicalChannelId(el: _Element) {
    if (!_cached_decoder_for_LogicalChannelId) {
        _cached_decoder_for_LogicalChannelId = $._decodeInteger;
    }
    return _cached_decoder_for_LogicalChannelId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LogicalChannelId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LogicalChannelId */
let _cached_encoder_for_LogicalChannelId: $.ASN1Encoder<LogicalChannelId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LogicalChannelId */

/* START_OF_SYMBOL_DEFINITION _encode_LogicalChannelId */
/**
 * @summary Encodes a(n) LogicalChannelId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogicalChannelId, encoded as an ASN.1 Element.
 */
export function _encode_LogicalChannelId(
    value: LogicalChannelId,
    elGetter: $.ASN1Encoder<LogicalChannelId>
) {
    if (!_cached_encoder_for_LogicalChannelId) {
        _cached_encoder_for_LogicalChannelId = $._encodeInteger;
    }
    return _cached_encoder_for_LogicalChannelId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LogicalChannelId */

/* eslint-enable */
