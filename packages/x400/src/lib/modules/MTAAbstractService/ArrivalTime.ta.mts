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
/**
 * @summary ArrivalTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArrivalTime  ::=  Time
 * ```
 */
export type ArrivalTime = Time; // DefinedType

let _cached_decoder_for_ArrivalTime: $.ASN1Decoder<ArrivalTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ArrivalTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArrivalTime} The decoded data structure.
 */
export function _decode_ArrivalTime(el: _Element) {
    if (!_cached_decoder_for_ArrivalTime) {
        _cached_decoder_for_ArrivalTime = _decode_Time;
    }
    return _cached_decoder_for_ArrivalTime(el);
}

let _cached_encoder_for_ArrivalTime: $.ASN1Encoder<ArrivalTime> | null = null;

/**
 * @summary Encodes a(n) ArrivalTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArrivalTime, encoded as an ASN.1 Element.
 */
export function _encode_ArrivalTime(
    value: ArrivalTime,
    elGetter: $.ASN1Encoder<ArrivalTime>
) {
    if (!_cached_encoder_for_ArrivalTime) {
        _cached_encoder_for_ArrivalTime = _encode_Time;
    }
    return _cached_encoder_for_ArrivalTime(value, elGetter);
}


/* eslint-enable */
