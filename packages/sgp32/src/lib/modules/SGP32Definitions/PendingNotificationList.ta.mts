/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PendingNotification, _decode_PendingNotification, _encode_PendingNotification } from "../SGP32Definitions/PendingNotification.ta.mjs";
// export { PendingNotification, _decode_PendingNotification, _encode_PendingNotification } from "../SGP32Definitions/PendingNotification.ta.mjs";


/**
 * @summary PendingNotificationList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PendingNotificationList  ::=  SEQUENCE OF PendingNotification
 * ```
 */
export
type PendingNotificationList = PendingNotification[]; // SequenceOfType

let _cached_decoder_for_PendingNotificationList: $.ASN1Decoder<PendingNotificationList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PendingNotificationList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PendingNotificationList (el: _Element): PendingNotificationList {
    if (!_cached_decoder_for_PendingNotificationList) { _cached_decoder_for_PendingNotificationList = $._decodeSequenceOf<PendingNotification>(() => _decode_PendingNotification); }
    return _cached_decoder_for_PendingNotificationList(el);
}

let _cached_encoder_for_PendingNotificationList: $.ASN1Encoder<PendingNotificationList> | null = null;

/**
 * @summary Encodes a(n) PendingNotificationList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PendingNotificationList, encoded as an ASN.1 Element.
 */
export
function _encode_PendingNotificationList (value: PendingNotificationList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PendingNotificationList) { _cached_encoder_for_PendingNotificationList = $._encodeSequenceOf<PendingNotification>(() => _encode_PendingNotification, $.BER); }
    return _cached_encoder_for_PendingNotificationList(value, elGetter);
}


/* eslint-enable */
