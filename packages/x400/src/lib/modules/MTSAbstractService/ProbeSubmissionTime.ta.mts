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
    Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ProbeSubmissionTime */
/**
 * @summary ProbeSubmissionTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProbeSubmissionTime  ::=  Time
 * ```
 */
export type ProbeSubmissionTime = Time; // DefinedType
/* END_OF_SYMBOL_DEFINITION ProbeSubmissionTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProbeSubmissionTime */
let _cached_decoder_for_ProbeSubmissionTime: $.ASN1Decoder<ProbeSubmissionTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProbeSubmissionTime */

/* START_OF_SYMBOL_DEFINITION _decode_ProbeSubmissionTime */
/**
 * @summary Decodes an ASN.1 element into a(n) ProbeSubmissionTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProbeSubmissionTime} The decoded data structure.
 */
export function _decode_ProbeSubmissionTime(el: _Element) {
    if (!_cached_decoder_for_ProbeSubmissionTime) {
        _cached_decoder_for_ProbeSubmissionTime = _decode_Time;
    }
    return _cached_decoder_for_ProbeSubmissionTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProbeSubmissionTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProbeSubmissionTime */
let _cached_encoder_for_ProbeSubmissionTime: $.ASN1Encoder<ProbeSubmissionTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProbeSubmissionTime */

/* START_OF_SYMBOL_DEFINITION _encode_ProbeSubmissionTime */
/**
 * @summary Encodes a(n) ProbeSubmissionTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProbeSubmissionTime, encoded as an ASN.1 Element.
 */
export function _encode_ProbeSubmissionTime(
    value: ProbeSubmissionTime,
    elGetter: $.ASN1Encoder<ProbeSubmissionTime>
) {
    if (!_cached_encoder_for_ProbeSubmissionTime) {
        _cached_encoder_for_ProbeSubmissionTime = _encode_Time;
    }
    return _cached_encoder_for_ProbeSubmissionTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProbeSubmissionTime */

/* eslint-enable */
