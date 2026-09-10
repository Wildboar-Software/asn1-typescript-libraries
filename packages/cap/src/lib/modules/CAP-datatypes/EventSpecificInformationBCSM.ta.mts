import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EventSpecificInformationBCSM_routeSelectFailureSpecificInfo, _decode_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo, _encode_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo } from "./EventSpecificInformationBCSM-routeSelectFailureSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo, _decode_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo, _encode_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo } from "./EventSpecificInformationBCSM-oCalledPartyBusySpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_oNoAnswerSpecificInfo, _decode_EventSpecificInformationBCSM_oNoAnswerSpecificInfo, _encode_EventSpecificInformationBCSM_oNoAnswerSpecificInfo } from "./EventSpecificInformationBCSM-oNoAnswerSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_oAnswerSpecificInfo, _decode_EventSpecificInformationBCSM_oAnswerSpecificInfo, _encode_EventSpecificInformationBCSM_oAnswerSpecificInfo } from "./EventSpecificInformationBCSM-oAnswerSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_oMidCallSpecificInfo, _decode_EventSpecificInformationBCSM_oMidCallSpecificInfo, _encode_EventSpecificInformationBCSM_oMidCallSpecificInfo } from "./EventSpecificInformationBCSM-oMidCallSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_oDisconnectSpecificInfo, _decode_EventSpecificInformationBCSM_oDisconnectSpecificInfo, _encode_EventSpecificInformationBCSM_oDisconnectSpecificInfo } from "./EventSpecificInformationBCSM-oDisconnectSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_tBusySpecificInfo, _decode_EventSpecificInformationBCSM_tBusySpecificInfo, _encode_EventSpecificInformationBCSM_tBusySpecificInfo } from "./EventSpecificInformationBCSM-tBusySpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_tNoAnswerSpecificInfo, _decode_EventSpecificInformationBCSM_tNoAnswerSpecificInfo, _encode_EventSpecificInformationBCSM_tNoAnswerSpecificInfo } from "./EventSpecificInformationBCSM-tNoAnswerSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_tAnswerSpecificInfo, _decode_EventSpecificInformationBCSM_tAnswerSpecificInfo, _encode_EventSpecificInformationBCSM_tAnswerSpecificInfo } from "./EventSpecificInformationBCSM-tAnswerSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_tMidCallSpecificInfo, _decode_EventSpecificInformationBCSM_tMidCallSpecificInfo, _encode_EventSpecificInformationBCSM_tMidCallSpecificInfo } from "./EventSpecificInformationBCSM-tMidCallSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_tDisconnectSpecificInfo, _decode_EventSpecificInformationBCSM_tDisconnectSpecificInfo, _encode_EventSpecificInformationBCSM_tDisconnectSpecificInfo } from "./EventSpecificInformationBCSM-tDisconnectSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_oTermSeizedSpecificInfo, _decode_EventSpecificInformationBCSM_oTermSeizedSpecificInfo, _encode_EventSpecificInformationBCSM_oTermSeizedSpecificInfo } from "./EventSpecificInformationBCSM-oTermSeizedSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_callAcceptedSpecificInfo, _decode_EventSpecificInformationBCSM_callAcceptedSpecificInfo, _encode_EventSpecificInformationBCSM_callAcceptedSpecificInfo } from "./EventSpecificInformationBCSM-callAcceptedSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_oAbandonSpecificInfo, _decode_EventSpecificInformationBCSM_oAbandonSpecificInfo, _encode_EventSpecificInformationBCSM_oAbandonSpecificInfo } from "./EventSpecificInformationBCSM-oAbandonSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo, _decode_EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo, _encode_EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo } from "./EventSpecificInformationBCSM-oChangeOfPositionSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo, _decode_EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo, _encode_EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo } from "./EventSpecificInformationBCSM-tChangeOfPositionSpecificInfo.ta.mjs";
import { DpSpecificInfoAlt, _decode_DpSpecificInfoAlt, _encode_DpSpecificInfoAlt } from "./DpSpecificInfoAlt.ta.mjs";

/**
 * @summary EventSpecificInformationBCSM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EventSpecificInformationBCSM {PARAMETERS-BOUND : bound} ::= CHOICE {
 *  routeSelectFailureSpecificInfo	[2] SEQUENCE {
 *  failureCause			[0] Cause {bound}			OPTIONAL,
 *  ...
 *  },
 *  oCalledPartyBusySpecificInfo	[3] SEQUENCE {
 *  busyCause				[0] Cause {bound}			OPTIONAL,
 *  ...
 *  },
 *  oNoAnswerSpecificInfo		[4] SEQUENCE {
 *  
 *  ...
 *  },
 *  oAnswerSpecificInfo			[5] SEQUENCE {
 *  destinationAddress			[50] CalledPartyNumber {bound}		OPTIONAL,
 *  or-Call				[51] NULL				OPTIONAL,
 *  forwardedCall			[52] NULL				OPTIONAL,
 *  chargeIndicator			[53] ChargeIndicator			OPTIONAL,
 *  ext-basicServiceCode		[54] Ext-BasicServiceCode		OPTIONAL,
 *  ext-basicServiceCode2		[55] Ext-BasicServiceCode		OPTIONAL,
 *  ...
 *  },
 *  oMidCallSpecificInfo		[6] SEQUENCE {
 *  midCallEvents			[1] CHOICE {
 *  dTMFDigitsCompleted			[3] Digits {bound},
 *  dTMFDigitsTimeOut			[4] Digits {bound}
 *  }									OPTIONAL,
 *  ...
 *  },
 *  oDisconnectSpecificInfo		[7] SEQUENCE {
 *  releaseCause			[0] Cause {bound}			OPTIONAL,
 *  ...
 *  },
 *  tBusySpecificInfo			[8] SEQUENCE {
 *  busyCause				[0] Cause {bound}			OPTIONAL,
 *  callForwarded			[50] NULL				OPTIONAL,
 *  routeNotPermitted			[51] NULL				OPTIONAL,
 *  forwardingDestinationNumber		[52] CalledPartyNumber {bound}		OPTIONAL,
 *  ...
 *  },
 *  tNoAnswerSpecificInfo		[9] SEQUENCE {
 *  callForwarded			[50] NULL				OPTIONAL,
 *  forwardingDestinationNumber		[52] CalledPartyNumber {bound}		OPTIONAL,
 *  ...
 *  },
 *  tAnswerSpecificInfo			[10] SEQUENCE {
 *  destinationAddress			[50] CalledPartyNumber {bound}		OPTIONAL,
 *  or-Call				[51] NULL				OPTIONAL,
 *  forwardedCall			[52] NULL				OPTIONAL,
 *  chargeIndicator			[53] ChargeIndicator			OPTIONAL,
 *  ext-basicServiceCode		[54] Ext-BasicServiceCode		OPTIONAL,
 *  ext-basicServiceCode2		[55] Ext-BasicServiceCode		OPTIONAL,
 *  ...
 *  },
 *  tMidCallSpecificInfo		[11] SEQUENCE {
 *  midCallEvents			[1] CHOICE {
 *  dTMFDigitsCompleted			[3] Digits {bound},
 *  dTMFDigitsTimeOut			[4] Digits {bound}
 *  }									OPTIONAL,
 *  ...
 *  },
 *  tDisconnectSpecificInfo		[12] SEQUENCE {
 *  releaseCause			[0] Cause {bound}			OPTIONAL,
 *  ...
 *  },
 *  oTermSeizedSpecificInfo		[13] SEQUENCE {
 *  locationInformation			[50] LocationInformation		OPTIONAL,
 *  ...
 *  },
 *  callAcceptedSpecificInfo		[20] SEQUENCE {
 *  locationInformation			[50] LocationInformation		OPTIONAL,
 *  ...
 *  },
 *  oAbandonSpecificInfo		[21] SEQUENCE {
 *  routeNotPermitted			[50] NULL				OPTIONAL,
 *  ...
 *  },
 *  oChangeOfPositionSpecificInfo	[50] SEQUENCE {
 *  locationInformation			[50] LocationInformation		OPTIONAL,
 *  ...,
 *  metDPCriteriaList                   [51] MetDPCriteriaList {bound}		OPTIONAL
 *  },
 *  tChangeOfPositionSpecificInfo	[51] SEQUENCE {
 *  locationInformation			[50] LocationInformation		OPTIONAL,
 *  ...,
 *  metDPCriteriaList                   [51] MetDPCriteriaList {bound}		OPTIONAL
 *  },
 *  dpSpecificInfoAlt		   [52] DpSpecificInfoAlt {bound}
 *  }
 * ```
 *
 */
export type EventSpecificInformationBCSM =
{ routeSelectFailureSpecificInfo: EventSpecificInformationBCSM_routeSelectFailureSpecificInfo }
    | { oCalledPartyBusySpecificInfo: EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo }
    | { oNoAnswerSpecificInfo: EventSpecificInformationBCSM_oNoAnswerSpecificInfo }
    | { oAnswerSpecificInfo: EventSpecificInformationBCSM_oAnswerSpecificInfo }
    | { oMidCallSpecificInfo: EventSpecificInformationBCSM_oMidCallSpecificInfo }
    | { oDisconnectSpecificInfo: EventSpecificInformationBCSM_oDisconnectSpecificInfo }
    | { tBusySpecificInfo: EventSpecificInformationBCSM_tBusySpecificInfo }
    | { tNoAnswerSpecificInfo: EventSpecificInformationBCSM_tNoAnswerSpecificInfo }
    | { tAnswerSpecificInfo: EventSpecificInformationBCSM_tAnswerSpecificInfo }
    | { tMidCallSpecificInfo: EventSpecificInformationBCSM_tMidCallSpecificInfo }
    | { tDisconnectSpecificInfo: EventSpecificInformationBCSM_tDisconnectSpecificInfo }
    | { oTermSeizedSpecificInfo: EventSpecificInformationBCSM_oTermSeizedSpecificInfo }
    | { callAcceptedSpecificInfo: EventSpecificInformationBCSM_callAcceptedSpecificInfo }
    | { oAbandonSpecificInfo: EventSpecificInformationBCSM_oAbandonSpecificInfo }
    | { oChangeOfPositionSpecificInfo: EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo }
    | { tChangeOfPositionSpecificInfo: EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo }
    | { dpSpecificInfoAlt: DpSpecificInfoAlt };

let _cached_decoder_for_EventSpecificInformationBCSM: $.ASN1Decoder<EventSpecificInformationBCSM> | null = null;
export function _decode_EventSpecificInformationBCSM (el: _Element): EventSpecificInformationBCSM {
    if (!_cached_decoder_for_EventSpecificInformationBCSM) {
        _cached_decoder_for_EventSpecificInformationBCSM = $._decode_inextensible_choice<EventSpecificInformationBCSM>({
    "CONTEXT 2": [ "routeSelectFailureSpecificInfo", $._decode_implicit<EventSpecificInformationBCSM_routeSelectFailureSpecificInfo>(() => _decode_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo) ],
    "CONTEXT 3": [ "oCalledPartyBusySpecificInfo", $._decode_implicit<EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo>(() => _decode_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo) ],
    "CONTEXT 4": [ "oNoAnswerSpecificInfo", $._decode_implicit<EventSpecificInformationBCSM_oNoAnswerSpecificInfo>(() => _decode_EventSpecificInformationBCSM_oNoAnswerSpecificInfo) ],
    "CONTEXT 5": [ "oAnswerSpecificInfo", $._decode_implicit<EventSpecificInformationBCSM_oAnswerSpecificInfo>(() => _decode_EventSpecificInformationBCSM_oAnswerSpecificInfo) ],
    "CONTEXT 6": [ "oMidCallSpecificInfo", $._decode_implicit<EventSpecificInformationBCSM_oMidCallSpecificInfo>(() => _decode_EventSpecificInformationBCSM_oMidCallSpecificInfo) ],
    "CONTEXT 7": [ "oDisconnectSpecificInfo", $._decode_implicit<EventSpecificInformationBCSM_oDisconnectSpecificInfo>(() => _decode_EventSpecificInformationBCSM_oDisconnectSpecificInfo) ],
    "CONTEXT 8": [ "tBusySpecificInfo", $._decode_implicit<EventSpecificInformationBCSM_tBusySpecificInfo>(() => _decode_EventSpecificInformationBCSM_tBusySpecificInfo) ],
    "CONTEXT 9": [ "tNoAnswerSpecificInfo", $._decode_implicit<EventSpecificInformationBCSM_tNoAnswerSpecificInfo>(() => _decode_EventSpecificInformationBCSM_tNoAnswerSpecificInfo) ],
    "CONTEXT 10": [ "tAnswerSpecificInfo", $._decode_implicit<EventSpecificInformationBCSM_tAnswerSpecificInfo>(() => _decode_EventSpecificInformationBCSM_tAnswerSpecificInfo) ],
    "CONTEXT 11": [ "tMidCallSpecificInfo", $._decode_implicit<EventSpecificInformationBCSM_tMidCallSpecificInfo>(() => _decode_EventSpecificInformationBCSM_tMidCallSpecificInfo) ],
    "CONTEXT 12": [ "tDisconnectSpecificInfo", $._decode_implicit<EventSpecificInformationBCSM_tDisconnectSpecificInfo>(() => _decode_EventSpecificInformationBCSM_tDisconnectSpecificInfo) ],
    "CONTEXT 13": [ "oTermSeizedSpecificInfo", $._decode_implicit<EventSpecificInformationBCSM_oTermSeizedSpecificInfo>(() => _decode_EventSpecificInformationBCSM_oTermSeizedSpecificInfo) ],
    "CONTEXT 20": [ "callAcceptedSpecificInfo", $._decode_implicit<EventSpecificInformationBCSM_callAcceptedSpecificInfo>(() => _decode_EventSpecificInformationBCSM_callAcceptedSpecificInfo) ],
    "CONTEXT 21": [ "oAbandonSpecificInfo", $._decode_implicit<EventSpecificInformationBCSM_oAbandonSpecificInfo>(() => _decode_EventSpecificInformationBCSM_oAbandonSpecificInfo) ],
    "CONTEXT 50": [ "oChangeOfPositionSpecificInfo", $._decode_implicit<EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo>(() => _decode_EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo) ],
    "CONTEXT 51": [ "tChangeOfPositionSpecificInfo", $._decode_implicit<EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo>(() => _decode_EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo) ],
    "CONTEXT 52": [ "dpSpecificInfoAlt", $._decode_implicit<DpSpecificInfoAlt>(() => _decode_DpSpecificInfoAlt) ]
        });
    }
    return _cached_decoder_for_EventSpecificInformationBCSM(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM: $.ASN1Encoder<EventSpecificInformationBCSM> | null = null;
export function _encode_EventSpecificInformationBCSM (value: EventSpecificInformationBCSM, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM) {
        _cached_encoder_for_EventSpecificInformationBCSM = $._encode_choice<EventSpecificInformationBCSM>({
    "routeSelectFailureSpecificInfo": $._encode_implicit(_TagClass.context, 2, () => _encode_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo, $.BER),
    "oCalledPartyBusySpecificInfo": $._encode_implicit(_TagClass.context, 3, () => _encode_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo, $.BER),
    "oNoAnswerSpecificInfo": $._encode_implicit(_TagClass.context, 4, () => _encode_EventSpecificInformationBCSM_oNoAnswerSpecificInfo, $.BER),
    "oAnswerSpecificInfo": $._encode_implicit(_TagClass.context, 5, () => _encode_EventSpecificInformationBCSM_oAnswerSpecificInfo, $.BER),
    "oMidCallSpecificInfo": $._encode_implicit(_TagClass.context, 6, () => _encode_EventSpecificInformationBCSM_oMidCallSpecificInfo, $.BER),
    "oDisconnectSpecificInfo": $._encode_implicit(_TagClass.context, 7, () => _encode_EventSpecificInformationBCSM_oDisconnectSpecificInfo, $.BER),
    "tBusySpecificInfo": $._encode_implicit(_TagClass.context, 8, () => _encode_EventSpecificInformationBCSM_tBusySpecificInfo, $.BER),
    "tNoAnswerSpecificInfo": $._encode_implicit(_TagClass.context, 9, () => _encode_EventSpecificInformationBCSM_tNoAnswerSpecificInfo, $.BER),
    "tAnswerSpecificInfo": $._encode_implicit(_TagClass.context, 10, () => _encode_EventSpecificInformationBCSM_tAnswerSpecificInfo, $.BER),
    "tMidCallSpecificInfo": $._encode_implicit(_TagClass.context, 11, () => _encode_EventSpecificInformationBCSM_tMidCallSpecificInfo, $.BER),
    "tDisconnectSpecificInfo": $._encode_implicit(_TagClass.context, 12, () => _encode_EventSpecificInformationBCSM_tDisconnectSpecificInfo, $.BER),
    "oTermSeizedSpecificInfo": $._encode_implicit(_TagClass.context, 13, () => _encode_EventSpecificInformationBCSM_oTermSeizedSpecificInfo, $.BER),
    "callAcceptedSpecificInfo": $._encode_implicit(_TagClass.context, 20, () => _encode_EventSpecificInformationBCSM_callAcceptedSpecificInfo, $.BER),
    "oAbandonSpecificInfo": $._encode_implicit(_TagClass.context, 21, () => _encode_EventSpecificInformationBCSM_oAbandonSpecificInfo, $.BER),
    "oChangeOfPositionSpecificInfo": $._encode_implicit(_TagClass.context, 50, () => _encode_EventSpecificInformationBCSM_oChangeOfPositionSpecificInfo, $.BER),
    "tChangeOfPositionSpecificInfo": $._encode_implicit(_TagClass.context, 51, () => _encode_EventSpecificInformationBCSM_tChangeOfPositionSpecificInfo, $.BER),
    "dpSpecificInfoAlt": $._encode_implicit(_TagClass.context, 52, () => _encode_DpSpecificInfoAlt, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_EventSpecificInformationBCSM(value, elGetter);
}
