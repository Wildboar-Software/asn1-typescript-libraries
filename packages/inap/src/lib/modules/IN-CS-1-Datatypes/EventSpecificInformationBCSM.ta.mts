/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EventSpecificInformationBCSM_collectedInfoSpecificInfo, _decode_EventSpecificInformationBCSM_collectedInfoSpecificInfo, _encode_EventSpecificInformationBCSM_collectedInfoSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-collectedInfoSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_collectedInfoSpecificInfo, _decode_EventSpecificInformationBCSM_collectedInfoSpecificInfo, _encode_EventSpecificInformationBCSM_collectedInfoSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-collectedInfoSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_analyzedInfoSpecificInfo, _decode_EventSpecificInformationBCSM_analyzedInfoSpecificInfo, _encode_EventSpecificInformationBCSM_analyzedInfoSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-analyzedInfoSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_analyzedInfoSpecificInfo, _decode_EventSpecificInformationBCSM_analyzedInfoSpecificInfo, _encode_EventSpecificInformationBCSM_analyzedInfoSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-analyzedInfoSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_routeSelectFailureSpecificInfo, _decode_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo, _encode_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-routeSelectFailureSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_routeSelectFailureSpecificInfo, _decode_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo, _encode_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-routeSelectFailureSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo, _decode_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo, _encode_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-oCalledPartyBusySpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo, _decode_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo, _encode_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-oCalledPartyBusySpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_oNoAnswerSpecificInfo, _decode_EventSpecificInformationBCSM_oNoAnswerSpecificInfo, _encode_EventSpecificInformationBCSM_oNoAnswerSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-oNoAnswerSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_oNoAnswerSpecificInfo, _decode_EventSpecificInformationBCSM_oNoAnswerSpecificInfo, _encode_EventSpecificInformationBCSM_oNoAnswerSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-oNoAnswerSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_oAnswerSpecificInfo, _decode_EventSpecificInformationBCSM_oAnswerSpecificInfo, _encode_EventSpecificInformationBCSM_oAnswerSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-oAnswerSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_oAnswerSpecificInfo, _decode_EventSpecificInformationBCSM_oAnswerSpecificInfo, _encode_EventSpecificInformationBCSM_oAnswerSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-oAnswerSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_oMidCallSpecificInfo, _decode_EventSpecificInformationBCSM_oMidCallSpecificInfo, _encode_EventSpecificInformationBCSM_oMidCallSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-oMidCallSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_oMidCallSpecificInfo, _decode_EventSpecificInformationBCSM_oMidCallSpecificInfo, _encode_EventSpecificInformationBCSM_oMidCallSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-oMidCallSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_oDisconnectSpecificInfo, _decode_EventSpecificInformationBCSM_oDisconnectSpecificInfo, _encode_EventSpecificInformationBCSM_oDisconnectSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-oDisconnectSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_oDisconnectSpecificInfo, _decode_EventSpecificInformationBCSM_oDisconnectSpecificInfo, _encode_EventSpecificInformationBCSM_oDisconnectSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-oDisconnectSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_tBusySpecificInfo, _decode_EventSpecificInformationBCSM_tBusySpecificInfo, _encode_EventSpecificInformationBCSM_tBusySpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-tBusySpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_tBusySpecificInfo, _decode_EventSpecificInformationBCSM_tBusySpecificInfo, _encode_EventSpecificInformationBCSM_tBusySpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-tBusySpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_tNoAnswerSpecificInfo, _decode_EventSpecificInformationBCSM_tNoAnswerSpecificInfo, _encode_EventSpecificInformationBCSM_tNoAnswerSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-tNoAnswerSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_tNoAnswerSpecificInfo, _decode_EventSpecificInformationBCSM_tNoAnswerSpecificInfo, _encode_EventSpecificInformationBCSM_tNoAnswerSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-tNoAnswerSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_tAnswerSpecificInfo, _decode_EventSpecificInformationBCSM_tAnswerSpecificInfo, _encode_EventSpecificInformationBCSM_tAnswerSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-tAnswerSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_tAnswerSpecificInfo, _decode_EventSpecificInformationBCSM_tAnswerSpecificInfo, _encode_EventSpecificInformationBCSM_tAnswerSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-tAnswerSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_tMidCallSpecificInfo, _decode_EventSpecificInformationBCSM_tMidCallSpecificInfo, _encode_EventSpecificInformationBCSM_tMidCallSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-tMidCallSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_tMidCallSpecificInfo, _decode_EventSpecificInformationBCSM_tMidCallSpecificInfo, _encode_EventSpecificInformationBCSM_tMidCallSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-tMidCallSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_tDisconnectSpecificInfo, _decode_EventSpecificInformationBCSM_tDisconnectSpecificInfo, _encode_EventSpecificInformationBCSM_tDisconnectSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-tDisconnectSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_tDisconnectSpecificInfo, _decode_EventSpecificInformationBCSM_tDisconnectSpecificInfo, _encode_EventSpecificInformationBCSM_tDisconnectSpecificInfo } from "../IN-CS-1-Datatypes/EventSpecificInformationBCSM-tDisconnectSpecificInfo.ta.mjs";


/**
 * @summary EventSpecificInformationBCSM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM  ::=  CHOICE {
 *   collectedInfoSpecificInfo
 *     [0]  SEQUENCE {calledPartynumber  [0]  CalledPartyNumber,
 *                    ...},
 *   analyzedInfoSpecificInfo
 *     [1]  SEQUENCE {calledPartynumber  [0]  CalledPartyNumber,
 *                    ...},
 *   routeSelectFailureSpecificInfo
 *     [2]  SEQUENCE {failureCause  [0]  Cause OPTIONAL,
 *                    ...},
 *   oCalledPartyBusySpecificInfo
 *     [3]  SEQUENCE {busyCause  [0]  Cause OPTIONAL,
 *                    ...},
 *   oNoAnswerSpecificInfo
 *     [4]  SEQUENCE {-- no specific info defined
 *                    ...},
 *   oAnswerSpecificInfo
 *     [5]  SEQUENCE {-- no specific info defined
 *                    ...},
 *   oMidCallSpecificInfo
 *     [6]  SEQUENCE {connectTime  [0]  Integer4 OPTIONAL,
 *                    ...},
 *   oDisconnectSpecificInfo
 *     [7]  SEQUENCE {releaseCause  [0]  Cause OPTIONAL,
 *                    connectTime   [1]  Integer4 OPTIONAL,
 *                    ...},
 *   tBusySpecificInfo
 *     [8]  SEQUENCE {busyCause  [0]  Cause OPTIONAL,
 *                    ...},
 *   tNoAnswerSpecificInfo
 *     [9]  SEQUENCE {-- no specific info defined
 *                    ...},
 *   tAnswerSpecificInfo
 *     [10]  SEQUENCE {-- no specific info defined
 *                     ...},
 *   tMidCallSpecificInfo
 *     [11]  SEQUENCE {connectTime  [0]  Integer4 OPTIONAL,
 *                     ...},
 *   tDisconnectSpecificInfo
 *     [12]  SEQUENCE {releaseCause  [0]  Cause OPTIONAL,
 *                     connectTime   [1]  Integer4 OPTIONAL,
 *                     ...}
 * }
 * ```
 */
export
type EventSpecificInformationBCSM =
    { collectedInfoSpecificInfo: EventSpecificInformationBCSM_collectedInfoSpecificInfo } /* CHOICE_ALT_ROOT */
    | { analyzedInfoSpecificInfo: EventSpecificInformationBCSM_analyzedInfoSpecificInfo } /* CHOICE_ALT_ROOT */
    | { routeSelectFailureSpecificInfo: EventSpecificInformationBCSM_routeSelectFailureSpecificInfo } /* CHOICE_ALT_ROOT */
    | { oCalledPartyBusySpecificInfo: EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo } /* CHOICE_ALT_ROOT */
    | { oNoAnswerSpecificInfo: EventSpecificInformationBCSM_oNoAnswerSpecificInfo } /* CHOICE_ALT_ROOT */
    | { oAnswerSpecificInfo: EventSpecificInformationBCSM_oAnswerSpecificInfo } /* CHOICE_ALT_ROOT */
    | { oMidCallSpecificInfo: EventSpecificInformationBCSM_oMidCallSpecificInfo } /* CHOICE_ALT_ROOT */
    | { oDisconnectSpecificInfo: EventSpecificInformationBCSM_oDisconnectSpecificInfo } /* CHOICE_ALT_ROOT */
    | { tBusySpecificInfo: EventSpecificInformationBCSM_tBusySpecificInfo } /* CHOICE_ALT_ROOT */
    | { tNoAnswerSpecificInfo: EventSpecificInformationBCSM_tNoAnswerSpecificInfo } /* CHOICE_ALT_ROOT */
    | { tAnswerSpecificInfo: EventSpecificInformationBCSM_tAnswerSpecificInfo } /* CHOICE_ALT_ROOT */
    | { tMidCallSpecificInfo: EventSpecificInformationBCSM_tMidCallSpecificInfo } /* CHOICE_ALT_ROOT */
    | { tDisconnectSpecificInfo: EventSpecificInformationBCSM_tDisconnectSpecificInfo } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EventSpecificInformationBCSM: $.ASN1Decoder<EventSpecificInformationBCSM> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM (el: _Element): EventSpecificInformationBCSM {
    if (!_cached_decoder_for_EventSpecificInformationBCSM) { _cached_decoder_for_EventSpecificInformationBCSM = $._decode_inextensible_choice<EventSpecificInformationBCSM>({
    "CONTEXT 0": [ "collectedInfoSpecificInfo", $._decode_implicit<EventSpecificInformationBCSM_collectedInfoSpecificInfo>(() => _decode_EventSpecificInformationBCSM_collectedInfoSpecificInfo) ],
    "CONTEXT 1": [ "analyzedInfoSpecificInfo", $._decode_implicit<EventSpecificInformationBCSM_analyzedInfoSpecificInfo>(() => _decode_EventSpecificInformationBCSM_analyzedInfoSpecificInfo) ],
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
    "CONTEXT 12": [ "tDisconnectSpecificInfo", $._decode_implicit<EventSpecificInformationBCSM_tDisconnectSpecificInfo>(() => _decode_EventSpecificInformationBCSM_tDisconnectSpecificInfo) ]
}); }
    return _cached_decoder_for_EventSpecificInformationBCSM(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM: $.ASN1Encoder<EventSpecificInformationBCSM> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM (value: EventSpecificInformationBCSM, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM) { _cached_encoder_for_EventSpecificInformationBCSM = $._encode_choice<EventSpecificInformationBCSM>({
    "collectedInfoSpecificInfo": $._encode_implicit(_TagClass.context, 0, () => _encode_EventSpecificInformationBCSM_collectedInfoSpecificInfo, $.BER),
    "analyzedInfoSpecificInfo": $._encode_implicit(_TagClass.context, 1, () => _encode_EventSpecificInformationBCSM_analyzedInfoSpecificInfo, $.BER),
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
}, $.BER); }
    return _cached_encoder_for_EventSpecificInformationBCSM(value, elGetter);
}


/* eslint-enable */
