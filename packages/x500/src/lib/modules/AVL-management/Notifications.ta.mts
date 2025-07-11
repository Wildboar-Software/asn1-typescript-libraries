/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "@wildboar/pki-stub";
/**
 * @summary Notifications
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Notifications  ::=  SEQUENCE SIZE (1..MAX) OF Attribute {{SupportedAttributes}}
 * ```
 */
export type Notifications = Attribute[]; // SequenceOfType

let _cached_decoder_for_Notifications: $.ASN1Decoder<Notifications> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Notifications
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Notifications} The decoded data structure.
 */
export function _decode_Notifications(el: _Element): Notifications {
    if (!_cached_decoder_for_Notifications) {
        _cached_decoder_for_Notifications = $._decodeSequenceOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_Notifications(el);
}

let _cached_encoder_for_Notifications: $.ASN1Encoder<Notifications> | null = null;

/**
 * @summary Encodes a(n) Notifications into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Notifications, encoded as an ASN.1 Element.
 */
export function _encode_Notifications(
    value: Notifications,
    elGetter: $.ASN1Encoder<Notifications>
): _Element {
    if (!_cached_encoder_for_Notifications) {
        _cached_encoder_for_Notifications = $._encodeSequenceOf<Attribute>(
            () => _encode_Attribute,
            $.DER
        );
    }
    return _cached_encoder_for_Notifications(value, elGetter);
}


/* eslint-enable */
