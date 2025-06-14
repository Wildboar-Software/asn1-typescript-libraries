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
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from '../TimeMF/TimeInterval.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AdjustmentInterval */
/**
 * @summary AdjustmentInterval
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdjustmentInterval  ::=  TimeInterval
 * ```
 */
export type AdjustmentInterval = TimeInterval; // DefinedType
/* END_OF_SYMBOL_DEFINITION AdjustmentInterval */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AdjustmentInterval */
let _cached_decoder_for_AdjustmentInterval: $.ASN1Decoder<AdjustmentInterval> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AdjustmentInterval */

/* START_OF_SYMBOL_DEFINITION _decode_AdjustmentInterval */
/**
 * @summary Decodes an ASN.1 element into a(n) AdjustmentInterval
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdjustmentInterval} The decoded data structure.
 */
export function _decode_AdjustmentInterval(el: _Element) {
    if (!_cached_decoder_for_AdjustmentInterval) {
        _cached_decoder_for_AdjustmentInterval = _decode_TimeInterval;
    }
    return _cached_decoder_for_AdjustmentInterval(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AdjustmentInterval */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AdjustmentInterval */
let _cached_encoder_for_AdjustmentInterval: $.ASN1Encoder<AdjustmentInterval> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AdjustmentInterval */

/* START_OF_SYMBOL_DEFINITION _encode_AdjustmentInterval */
/**
 * @summary Encodes a(n) AdjustmentInterval into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdjustmentInterval, encoded as an ASN.1 Element.
 */
export function _encode_AdjustmentInterval(
    value: AdjustmentInterval,
    elGetter: $.ASN1Encoder<AdjustmentInterval>
) {
    if (!_cached_encoder_for_AdjustmentInterval) {
        _cached_encoder_for_AdjustmentInterval = _encode_TimeInterval;
    }
    return _cached_encoder_for_AdjustmentInterval(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AdjustmentInterval */

/* eslint-enable */
