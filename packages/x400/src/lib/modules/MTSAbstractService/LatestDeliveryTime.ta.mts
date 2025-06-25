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
    Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta.mjs';
/**
 * @summary LatestDeliveryTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LatestDeliveryTime  ::=  Time
 * ```
 */
export type LatestDeliveryTime = Time; // DefinedType

let _cached_decoder_for_LatestDeliveryTime: $.ASN1Decoder<LatestDeliveryTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LatestDeliveryTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LatestDeliveryTime} The decoded data structure.
 */
export function _decode_LatestDeliveryTime(el: _Element): LatestDeliveryTime {
    if (!_cached_decoder_for_LatestDeliveryTime) {
        _cached_decoder_for_LatestDeliveryTime = _decode_Time;
    }
    return _cached_decoder_for_LatestDeliveryTime(el);
}

let _cached_encoder_for_LatestDeliveryTime: $.ASN1Encoder<LatestDeliveryTime> | null = null;

/**
 * @summary Encodes a(n) LatestDeliveryTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LatestDeliveryTime, encoded as an ASN.1 Element.
 */
export function _encode_LatestDeliveryTime(
    value: LatestDeliveryTime,
    elGetter: $.ASN1Encoder<LatestDeliveryTime>
): _Element {
    if (!_cached_encoder_for_LatestDeliveryTime) {
        _cached_encoder_for_LatestDeliveryTime = _encode_Time;
    }
    return _cached_encoder_for_LatestDeliveryTime(value, elGetter);
}


/* eslint-enable */
