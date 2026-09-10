import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Digits, _decode_Digits, _encode_Digits } from "./Digits.ta.mjs";

/**
 * @summary EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CHOICE {
 *  dTMFDigitsCompleted			[3] Digits {bound},
 *  dTMFDigitsTimeOut			[4] Digits {bound}
 *  }
 * ```
 *
 */
export type EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents =
{ dTMFDigitsCompleted: Digits }
    | { dTMFDigitsTimeOut: Digits };

let _cached_decoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents: $.ASN1Decoder<EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents> | null = null;
export function _decode_EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents (el: _Element): EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents) {
        _cached_decoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents = $._decode_inextensible_choice<EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents>({
    "CONTEXT 3": [ "dTMFDigitsCompleted", $._decode_implicit<Digits>(() => _decode_Digits) ],
    "CONTEXT 4": [ "dTMFDigitsTimeOut", $._decode_implicit<Digits>(() => _decode_Digits) ]
        });
    }
    return _cached_decoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents: $.ASN1Encoder<EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents> | null = null;
export function _encode_EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents (value: EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents) {
        _cached_encoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents = $._encode_choice<EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents>({
    "dTMFDigitsCompleted": $._encode_implicit(_TagClass.context, 3, () => _encode_Digits, $.BER),
    "dTMFDigitsTimeOut": $._encode_implicit(_TagClass.context, 4, () => _encode_Digits, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_EventSpecificInformationBCSM_tMidCallSpecificInfo_midCallEvents(value, elGetter);
}
