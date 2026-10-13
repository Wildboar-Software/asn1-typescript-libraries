/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Notification, _decode_Notification, _encode_Notification } from "../ThreeGPP-HI1NotificationOperations/Notification.ta.mjs";
// export { Notification, _decode_Notification, _encode_Notification } from "../ThreeGPP-HI1NotificationOperations/Notification.ta.mjs";
import { Alarm_Indicator, _decode_Alarm_Indicator, _encode_Alarm_Indicator } from "../ThreeGPP-HI1NotificationOperations/Alarm-Indicator.ta.mjs";
// export { Alarm_Indicator, _decode_Alarm_Indicator, _encode_Alarm_Indicator } from "../ThreeGPP-HI1NotificationOperations/Alarm-Indicator.ta.mjs";
import { ThreeGPP_National_HI1_ASN1parameters, _decode_ThreeGPP_National_HI1_ASN1parameters, _encode_ThreeGPP_National_HI1_ASN1parameters } from "../ThreeGPP-HI1NotificationOperations/ThreeGPP-National-HI1-ASN1parameters.ta.mjs";
// export { ThreeGPP_National_HI1_ASN1parameters, _decode_ThreeGPP_National_HI1_ASN1parameters, _encode_ThreeGPP_National_HI1_ASN1parameters } from "../ThreeGPP-HI1NotificationOperations/ThreeGPP-National-HI1-ASN1parameters.ta.mjs";


/**
 * @summary ThreeGPP_HI1_Operation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ThreeGPP-HI1-Operation  ::=  CHOICE
 * {
 *     liActivated                    [1] Notification,
 *     liDeactivated                [2] Notification,
 *     liModified                    [3] Notification,
 *     alarms-indicator            [4] Alarm-Indicator,
 *     threeGPP-National-HI1-ASN1parameters    [5] ThreeGPP-National-HI1-ASN1parameters,
 * ...}
 * ```
 */
export
type ThreeGPP_HI1_Operation =
    { liActivated: Notification } /* CHOICE_ALT_ROOT */
    | { liDeactivated: Notification } /* CHOICE_ALT_ROOT */
    | { liModified: Notification } /* CHOICE_ALT_ROOT */
    | { alarms_indicator: Alarm_Indicator } /* CHOICE_ALT_ROOT */
    | { threeGPP_National_HI1_ASN1parameters: ThreeGPP_National_HI1_ASN1parameters } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ThreeGPP_HI1_Operation: $.ASN1Decoder<ThreeGPP_HI1_Operation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ThreeGPP_HI1_Operation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ThreeGPP_HI1_Operation (el: _Element): ThreeGPP_HI1_Operation {
    if (!_cached_decoder_for_ThreeGPP_HI1_Operation) { _cached_decoder_for_ThreeGPP_HI1_Operation = $._decode_extensible_choice<ThreeGPP_HI1_Operation>({
    "CONTEXT 1": [ "liActivated", $._decode_implicit<Notification>(() => _decode_Notification) ],
    "CONTEXT 2": [ "liDeactivated", $._decode_implicit<Notification>(() => _decode_Notification) ],
    "CONTEXT 3": [ "liModified", $._decode_implicit<Notification>(() => _decode_Notification) ],
    "CONTEXT 4": [ "alarms_indicator", $._decode_implicit<Alarm_Indicator>(() => _decode_Alarm_Indicator) ],
    "CONTEXT 5": [ "threeGPP_National_HI1_ASN1parameters", $._decode_implicit<ThreeGPP_National_HI1_ASN1parameters>(() => _decode_ThreeGPP_National_HI1_ASN1parameters) ]
}); }
    return _cached_decoder_for_ThreeGPP_HI1_Operation(el);
}

let _cached_encoder_for_ThreeGPP_HI1_Operation: $.ASN1Encoder<ThreeGPP_HI1_Operation> | null = null;

/**
 * @summary Encodes a(n) ThreeGPP_HI1_Operation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThreeGPP_HI1_Operation, encoded as an ASN.1 Element.
 */
export
function _encode_ThreeGPP_HI1_Operation (value: ThreeGPP_HI1_Operation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ThreeGPP_HI1_Operation) { _cached_encoder_for_ThreeGPP_HI1_Operation = $._encode_choice<ThreeGPP_HI1_Operation>({
    "liActivated": $._encode_implicit(_TagClass.context, 1, () => _encode_Notification, $.BER),
    "liDeactivated": $._encode_implicit(_TagClass.context, 2, () => _encode_Notification, $.BER),
    "liModified": $._encode_implicit(_TagClass.context, 3, () => _encode_Notification, $.BER),
    "alarms_indicator": $._encode_implicit(_TagClass.context, 4, () => _encode_Alarm_Indicator, $.BER),
    "threeGPP_National_HI1_ASN1parameters": $._encode_implicit(_TagClass.context, 5, () => _encode_ThreeGPP_National_HI1_ASN1parameters, $.BER),
}, $.BER); }
    return _cached_encoder_for_ThreeGPP_HI1_Operation(value, elGetter);
}


/* eslint-enable */
