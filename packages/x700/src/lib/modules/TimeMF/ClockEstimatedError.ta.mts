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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from '../TimeMF/TimeInterval.ta.mjs';
/**
 * @summary ClockEstimatedError
 * @description
 *
 * Estimated error of the clock. Syntax of
 * `clockEstimatedError` in `clockSourceDetailPkg`. Accuracy
 * may be represented as estimated error (§6.2). ITU-T Rec. X.743 (06/98)
 * [§8.3.3](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.3, §6.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockEstimatedError  ::=  TimeInterval
 * ```
 */
export type ClockEstimatedError = TimeInterval; // DefinedType

let _cached_decoder_for_ClockEstimatedError: $.ASN1Decoder<ClockEstimatedError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClockEstimatedError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClockEstimatedError} The decoded data structure.
 */
export function _decode_ClockEstimatedError(el: _Element): ClockEstimatedError {
    if (!_cached_decoder_for_ClockEstimatedError) {
        _cached_decoder_for_ClockEstimatedError = _decode_TimeInterval;
    }
    return _cached_decoder_for_ClockEstimatedError(el);
}

let _cached_encoder_for_ClockEstimatedError: $.ASN1Encoder<ClockEstimatedError> | null = null;

/**
 * @summary Encodes a(n) ClockEstimatedError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClockEstimatedError, encoded as an ASN.1 Element.
 */
export function _encode_ClockEstimatedError(
    value: ClockEstimatedError,
    elGetter: $.ASN1Encoder<ClockEstimatedError>
): _Element {
    if (!_cached_encoder_for_ClockEstimatedError) {
        _cached_encoder_for_ClockEstimatedError = _encode_TimeInterval;
    }
    return _cached_encoder_for_ClockEstimatedError(value, elGetter);
}


/* eslint-enable */
