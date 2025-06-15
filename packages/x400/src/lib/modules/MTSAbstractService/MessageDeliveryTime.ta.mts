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
 * @summary MessageDeliveryTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageDeliveryTime  ::=  Time
 * ```
 */
export type MessageDeliveryTime = Time; // DefinedType

let _cached_decoder_for_MessageDeliveryTime: $.ASN1Decoder<MessageDeliveryTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageDeliveryTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageDeliveryTime} The decoded data structure.
 */
export function _decode_MessageDeliveryTime(el: _Element) {
    if (!_cached_decoder_for_MessageDeliveryTime) {
        _cached_decoder_for_MessageDeliveryTime = _decode_Time;
    }
    return _cached_decoder_for_MessageDeliveryTime(el);
}

let _cached_encoder_for_MessageDeliveryTime: $.ASN1Encoder<MessageDeliveryTime> | null = null;

/**
 * @summary Encodes a(n) MessageDeliveryTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageDeliveryTime, encoded as an ASN.1 Element.
 */
export function _encode_MessageDeliveryTime(
    value: MessageDeliveryTime,
    elGetter: $.ASN1Encoder<MessageDeliveryTime>
) {
    if (!_cached_encoder_for_MessageDeliveryTime) {
        _cached_encoder_for_MessageDeliveryTime = _encode_Time;
    }
    return _cached_encoder_for_MessageDeliveryTime(value, elGetter);
}


/* eslint-enable */
