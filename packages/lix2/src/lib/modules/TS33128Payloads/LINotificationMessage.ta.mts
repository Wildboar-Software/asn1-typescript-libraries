/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LINotification, _decode_LINotification, _encode_LINotification } from "../TS33128Payloads/LINotification.ta.mjs";
// export { LINotification, _decode_LINotification, _encode_LINotification } from "../TS33128Payloads/LINotification.ta.mjs";


/**
 * @summary LINotificationMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LINotificationMessage  ::=  CHOICE
 * {
 *     lINotification      [1] LINotification
 * }
 * ```
 */
export
type LINotificationMessage =
    { lINotification: LINotification } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LINotificationMessage: $.ASN1Decoder<LINotificationMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LINotificationMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LINotificationMessage (el: _Element): LINotificationMessage {
    if (!_cached_decoder_for_LINotificationMessage) { _cached_decoder_for_LINotificationMessage = $._decode_inextensible_choice<LINotificationMessage>({
    "CONTEXT 1": [ "lINotification", $._decode_implicit<LINotification>(() => _decode_LINotification) ]
}); }
    return _cached_decoder_for_LINotificationMessage(el);
}

let _cached_encoder_for_LINotificationMessage: $.ASN1Encoder<LINotificationMessage> | null = null;

/**
 * @summary Encodes a(n) LINotificationMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LINotificationMessage, encoded as an ASN.1 Element.
 */
export
function _encode_LINotificationMessage (value: LINotificationMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LINotificationMessage) { _cached_encoder_for_LINotificationMessage = $._encode_choice<LINotificationMessage>({
    "lINotification": $._encode_implicit(_TagClass.context, 1, () => _encode_LINotification, $.BER),
}, $.BER); }
    return _cached_encoder_for_LINotificationMessage(value, elGetter);
}


/* eslint-enable */
