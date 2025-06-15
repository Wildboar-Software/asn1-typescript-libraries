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
 * @summary DeferredDeliveryTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeferredDeliveryTime  ::=  Time
 * ```
 */
export type DeferredDeliveryTime = Time; // DefinedType

let _cached_decoder_for_DeferredDeliveryTime: $.ASN1Decoder<DeferredDeliveryTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeferredDeliveryTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeferredDeliveryTime} The decoded data structure.
 */
export function _decode_DeferredDeliveryTime(el: _Element) {
    if (!_cached_decoder_for_DeferredDeliveryTime) {
        _cached_decoder_for_DeferredDeliveryTime = _decode_Time;
    }
    return _cached_decoder_for_DeferredDeliveryTime(el);
}

let _cached_encoder_for_DeferredDeliveryTime: $.ASN1Encoder<DeferredDeliveryTime> | null = null;

/**
 * @summary Encodes a(n) DeferredDeliveryTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeferredDeliveryTime, encoded as an ASN.1 Element.
 */
export function _encode_DeferredDeliveryTime(
    value: DeferredDeliveryTime,
    elGetter: $.ASN1Encoder<DeferredDeliveryTime>
) {
    if (!_cached_encoder_for_DeferredDeliveryTime) {
        _cached_encoder_for_DeferredDeliveryTime = _encode_Time;
    }
    return _cached_encoder_for_DeferredDeliveryTime(value, elGetter);
}


/* eslint-enable */
