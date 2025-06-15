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
 * @summary DeferredTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeferredTime  ::=  Time
 * ```
 */
export type DeferredTime = Time; // DefinedType

let _cached_decoder_for_DeferredTime: $.ASN1Decoder<DeferredTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeferredTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeferredTime} The decoded data structure.
 */
export function _decode_DeferredTime(el: _Element) {
    if (!_cached_decoder_for_DeferredTime) {
        _cached_decoder_for_DeferredTime = _decode_Time;
    }
    return _cached_decoder_for_DeferredTime(el);
}

let _cached_encoder_for_DeferredTime: $.ASN1Encoder<DeferredTime> | null = null;

/**
 * @summary Encodes a(n) DeferredTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeferredTime, encoded as an ASN.1 Element.
 */
export function _encode_DeferredTime(
    value: DeferredTime,
    elGetter: $.ASN1Encoder<DeferredTime>
) {
    if (!_cached_encoder_for_DeferredTime) {
        _cached_encoder_for_DeferredTime = _encode_Time;
    }
    return _cached_encoder_for_DeferredTime(value, elGetter);
}


/* eslint-enable */
