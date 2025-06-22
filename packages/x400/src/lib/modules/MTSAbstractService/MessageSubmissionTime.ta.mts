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
    Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta.mjs';
/**
 * @summary MessageSubmissionTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageSubmissionTime  ::=  Time
 * ```
 */
export type MessageSubmissionTime = Time; // DefinedType

let _cached_decoder_for_MessageSubmissionTime: $.ASN1Decoder<MessageSubmissionTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageSubmissionTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageSubmissionTime} The decoded data structure.
 */
export function _decode_MessageSubmissionTime(el: _Element) {
    if (!_cached_decoder_for_MessageSubmissionTime) {
        _cached_decoder_for_MessageSubmissionTime = _decode_Time;
    }
    return _cached_decoder_for_MessageSubmissionTime(el);
}

let _cached_encoder_for_MessageSubmissionTime: $.ASN1Encoder<MessageSubmissionTime> | null = null;

/**
 * @summary Encodes a(n) MessageSubmissionTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageSubmissionTime, encoded as an ASN.1 Element.
 */
export function _encode_MessageSubmissionTime(
    value: MessageSubmissionTime,
    elGetter: $.ASN1Encoder<MessageSubmissionTime>
) {
    if (!_cached_encoder_for_MessageSubmissionTime) {
        _cached_encoder_for_MessageSubmissionTime = _encode_Time;
    }
    return _cached_encoder_for_MessageSubmissionTime(value, elGetter);
}


/* eslint-enable */
