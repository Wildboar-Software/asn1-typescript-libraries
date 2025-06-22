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
import * as $ from '@wildboar/asn1/functional';
import {
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from '../TimeMF/TimeInterval.ta.mjs';
/**
 * @summary ClockMaximumError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockMaximumError  ::=  TimeInterval
 * ```
 */
export type ClockMaximumError = TimeInterval; // DefinedType

let _cached_decoder_for_ClockMaximumError: $.ASN1Decoder<ClockMaximumError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClockMaximumError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClockMaximumError} The decoded data structure.
 */
export function _decode_ClockMaximumError(el: _Element) {
    if (!_cached_decoder_for_ClockMaximumError) {
        _cached_decoder_for_ClockMaximumError = _decode_TimeInterval;
    }
    return _cached_decoder_for_ClockMaximumError(el);
}

let _cached_encoder_for_ClockMaximumError: $.ASN1Encoder<ClockMaximumError> | null = null;

/**
 * @summary Encodes a(n) ClockMaximumError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClockMaximumError, encoded as an ASN.1 Element.
 */
export function _encode_ClockMaximumError(
    value: ClockMaximumError,
    elGetter: $.ASN1Encoder<ClockMaximumError>
) {
    if (!_cached_encoder_for_ClockMaximumError) {
        _cached_encoder_for_ClockMaximumError = _encode_TimeInterval;
    }
    return _cached_encoder_for_ClockMaximumError(value, elGetter);
}


/* eslint-enable */
