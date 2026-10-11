/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import * as TS33128Payloads from "../TS33128Payloads/LINotificationPayload.ta.mjs";

// export { LINotificationPayload, _decode_LINotificationPayload, _encode_LINotificationPayload } from "../TS33128Payloads/LINotificationPayload.ta.mjs";


/**
 * @summary HI4Payload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HI4Payload  ::=  CHOICE
 * {
 *     threeGPP-LI-Notification [1] TS33128Payloads.LINotificationPayload,
 *     ...
 * }
 * ```
 */
export
type HI4Payload =
    { threeGPP_LI_Notification: TS33128Payloads.LINotificationPayload } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_HI4Payload: $.ASN1Decoder<HI4Payload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HI4Payload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HI4Payload (el: _Element): HI4Payload {
    if (!_cached_decoder_for_HI4Payload) { _cached_decoder_for_HI4Payload = $._decode_extensible_choice<HI4Payload>({
    "CONTEXT 1": [ "threeGPP_LI_Notification", $._decode_implicit<TS33128Payloads.LINotificationPayload>(() => TS33128Payloads._decode_LINotificationPayload) ]
}); }
    return _cached_decoder_for_HI4Payload(el);
}

let _cached_encoder_for_HI4Payload: $.ASN1Encoder<HI4Payload> | null = null;

/**
 * @summary Encodes a(n) HI4Payload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HI4Payload, encoded as an ASN.1 Element.
 */
export
function _encode_HI4Payload (value: HI4Payload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HI4Payload) { _cached_encoder_for_HI4Payload = $._encode_choice<HI4Payload>({
    "threeGPP_LI_Notification": $._encode_implicit(_TagClass.context, 1, () => TS33128Payloads._encode_LINotificationPayload, $.BER),
}, $.BER); }
    return _cached_encoder_for_HI4Payload(value, elGetter);
}


/* eslint-enable */
