import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EventSpecificInformationSMS_o_smsFailureSpecificInfo, _decode_EventSpecificInformationSMS_o_smsFailureSpecificInfo, _encode_EventSpecificInformationSMS_o_smsFailureSpecificInfo } from "./EventSpecificInformationSMS-o-smsFailureSpecificInfo.ta.mjs";
import { EventSpecificInformationSMS_o_smsSubmissionSpecificInfo, _decode_EventSpecificInformationSMS_o_smsSubmissionSpecificInfo, _encode_EventSpecificInformationSMS_o_smsSubmissionSpecificInfo } from "./EventSpecificInformationSMS-o-smsSubmissionSpecificInfo.ta.mjs";
import { EventSpecificInformationSMS_t_smsFailureSpecificInfo, _decode_EventSpecificInformationSMS_t_smsFailureSpecificInfo, _encode_EventSpecificInformationSMS_t_smsFailureSpecificInfo } from "./EventSpecificInformationSMS-t-smsFailureSpecificInfo.ta.mjs";
import { EventSpecificInformationSMS_t_smsDeliverySpecificInfo, _decode_EventSpecificInformationSMS_t_smsDeliverySpecificInfo, _encode_EventSpecificInformationSMS_t_smsDeliverySpecificInfo } from "./EventSpecificInformationSMS-t-smsDeliverySpecificInfo.ta.mjs";

/**
 * @summary EventSpecificInformationSMS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EventSpecificInformationSMS ::= CHOICE {
 *  o-smsFailureSpecificInfo		[0] SEQUENCE {
 *  failureCause			[0] MO-SMSCause				OPTIONAL,
 *  ...
 *  },
 *  o-smsSubmissionSpecificInfo		[1] SEQUENCE {
 *  
 *  ...
 *  },
 *  t-smsFailureSpecificInfo		[2] SEQUENCE {
 *  failureCause			[0] MT-SMSCause				OPTIONAL,
 *  ...
 *  },
 *  t-smsDeliverySpecificInfo		[3] SEQUENCE {
 *  
 *  ...
 *  }
 *  }
 * ```
 *
 */
export type EventSpecificInformationSMS =
{ o_smsFailureSpecificInfo: EventSpecificInformationSMS_o_smsFailureSpecificInfo }
    | { o_smsSubmissionSpecificInfo: EventSpecificInformationSMS_o_smsSubmissionSpecificInfo }
    | { t_smsFailureSpecificInfo: EventSpecificInformationSMS_t_smsFailureSpecificInfo }
    | { t_smsDeliverySpecificInfo: EventSpecificInformationSMS_t_smsDeliverySpecificInfo };

let _cached_decoder_for_EventSpecificInformationSMS: $.ASN1Decoder<EventSpecificInformationSMS> | null = null;
export function _decode_EventSpecificInformationSMS (el: _Element): EventSpecificInformationSMS {
    if (!_cached_decoder_for_EventSpecificInformationSMS) {
        _cached_decoder_for_EventSpecificInformationSMS = $._decode_inextensible_choice<EventSpecificInformationSMS>({
    "CONTEXT 0": [ "o_smsFailureSpecificInfo", $._decode_implicit<EventSpecificInformationSMS_o_smsFailureSpecificInfo>(() => _decode_EventSpecificInformationSMS_o_smsFailureSpecificInfo) ],
    "CONTEXT 1": [ "o_smsSubmissionSpecificInfo", $._decode_implicit<EventSpecificInformationSMS_o_smsSubmissionSpecificInfo>(() => _decode_EventSpecificInformationSMS_o_smsSubmissionSpecificInfo) ],
    "CONTEXT 2": [ "t_smsFailureSpecificInfo", $._decode_implicit<EventSpecificInformationSMS_t_smsFailureSpecificInfo>(() => _decode_EventSpecificInformationSMS_t_smsFailureSpecificInfo) ],
    "CONTEXT 3": [ "t_smsDeliverySpecificInfo", $._decode_implicit<EventSpecificInformationSMS_t_smsDeliverySpecificInfo>(() => _decode_EventSpecificInformationSMS_t_smsDeliverySpecificInfo) ]
        });
    }
    return _cached_decoder_for_EventSpecificInformationSMS(el);
}

let _cached_encoder_for_EventSpecificInformationSMS: $.ASN1Encoder<EventSpecificInformationSMS> | null = null;
export function _encode_EventSpecificInformationSMS (value: EventSpecificInformationSMS, elGetter: $.ASN1Encoder<EventSpecificInformationSMS>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationSMS) {
        _cached_encoder_for_EventSpecificInformationSMS = $._encode_choice<EventSpecificInformationSMS>({
    "o_smsFailureSpecificInfo": $._encode_implicit(_TagClass.context, 0, () => _encode_EventSpecificInformationSMS_o_smsFailureSpecificInfo, $.BER),
    "o_smsSubmissionSpecificInfo": $._encode_implicit(_TagClass.context, 1, () => _encode_EventSpecificInformationSMS_o_smsSubmissionSpecificInfo, $.BER),
    "t_smsFailureSpecificInfo": $._encode_implicit(_TagClass.context, 2, () => _encode_EventSpecificInformationSMS_t_smsFailureSpecificInfo, $.BER),
    "t_smsDeliverySpecificInfo": $._encode_implicit(_TagClass.context, 3, () => _encode_EventSpecificInformationSMS_t_smsDeliverySpecificInfo, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_EventSpecificInformationSMS(value, elGetter);
}
