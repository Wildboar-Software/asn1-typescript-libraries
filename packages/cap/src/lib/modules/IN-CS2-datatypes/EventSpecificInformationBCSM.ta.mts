/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { EventSpecificInformationBCSM_collectedInfoSpecificInfo, _decode_EventSpecificInformationBCSM_collectedInfoSpecificInfo, _encode_EventSpecificInformationBCSM_collectedInfoSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-collectedInfoSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_collectedInfoSpecificInfo, _decode_EventSpecificInformationBCSM_collectedInfoSpecificInfo, _encode_EventSpecificInformationBCSM_collectedInfoSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-collectedInfoSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_analysedInfoSpecificInfo, _decode_EventSpecificInformationBCSM_analysedInfoSpecificInfo, _encode_EventSpecificInformationBCSM_analysedInfoSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-analysedInfoSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_analysedInfoSpecificInfo, _decode_EventSpecificInformationBCSM_analysedInfoSpecificInfo, _encode_EventSpecificInformationBCSM_analysedInfoSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-analysedInfoSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_routeSelectFailureSpecificInfo, _decode_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo, _encode_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-routeSelectFailureSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_routeSelectFailureSpecificInfo, _decode_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo, _encode_EventSpecificInformationBCSM_routeSelectFailureSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-routeSelectFailureSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo, _decode_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo, _encode_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-oCalledPartyBusySpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo, _decode_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo, _encode_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-oCalledPartyBusySpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_oNoAnswerSpecificInfo, _decode_EventSpecificInformationBCSM_oNoAnswerSpecificInfo, _encode_EventSpecificInformationBCSM_oNoAnswerSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-oNoAnswerSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_oNoAnswerSpecificInfo, _decode_EventSpecificInformationBCSM_oNoAnswerSpecificInfo, _encode_EventSpecificInformationBCSM_oNoAnswerSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-oNoAnswerSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_oAnswerSpecificInfo, _decode_EventSpecificInformationBCSM_oAnswerSpecificInfo, _encode_EventSpecificInformationBCSM_oAnswerSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-oAnswerSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_oAnswerSpecificInfo, _decode_EventSpecificInformationBCSM_oAnswerSpecificInfo, _encode_EventSpecificInformationBCSM_oAnswerSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-oAnswerSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_oMidCallSpecificInfo, _decode_EventSpecificInformationBCSM_oMidCallSpecificInfo, _encode_EventSpecificInformationBCSM_oMidCallSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-oMidCallSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_oMidCallSpecificInfo, _decode_EventSpecificInformationBCSM_oMidCallSpecificInfo, _encode_EventSpecificInformationBCSM_oMidCallSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-oMidCallSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_oDisconnectSpecificInfo, _decode_EventSpecificInformationBCSM_oDisconnectSpecificInfo, _encode_EventSpecificInformationBCSM_oDisconnectSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-oDisconnectSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_oDisconnectSpecificInfo, _decode_EventSpecificInformationBCSM_oDisconnectSpecificInfo, _encode_EventSpecificInformationBCSM_oDisconnectSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-oDisconnectSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_tBusySpecificInfo, _decode_EventSpecificInformationBCSM_tBusySpecificInfo, _encode_EventSpecificInformationBCSM_tBusySpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-tBusySpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_tBusySpecificInfo, _decode_EventSpecificInformationBCSM_tBusySpecificInfo, _encode_EventSpecificInformationBCSM_tBusySpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-tBusySpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_tNoAnswerSpecificInfo, _decode_EventSpecificInformationBCSM_tNoAnswerSpecificInfo, _encode_EventSpecificInformationBCSM_tNoAnswerSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-tNoAnswerSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_tNoAnswerSpecificInfo, _decode_EventSpecificInformationBCSM_tNoAnswerSpecificInfo, _encode_EventSpecificInformationBCSM_tNoAnswerSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-tNoAnswerSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_tAnswerSpecificInfo, _decode_EventSpecificInformationBCSM_tAnswerSpecificInfo, _encode_EventSpecificInformationBCSM_tAnswerSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-tAnswerSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_tAnswerSpecificInfo, _decode_EventSpecificInformationBCSM_tAnswerSpecificInfo, _encode_EventSpecificInformationBCSM_tAnswerSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-tAnswerSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_tMidCallSpecificInfo, _decode_EventSpecificInformationBCSM_tMidCallSpecificInfo, _encode_EventSpecificInformationBCSM_tMidCallSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-tMidCallSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_tMidCallSpecificInfo, _decode_EventSpecificInformationBCSM_tMidCallSpecificInfo, _encode_EventSpecificInformationBCSM_tMidCallSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-tMidCallSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_tDisconnectSpecificInfo, _decode_EventSpecificInformationBCSM_tDisconnectSpecificInfo, _encode_EventSpecificInformationBCSM_tDisconnectSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-tDisconnectSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_tDisconnectSpecificInfo, _decode_EventSpecificInformationBCSM_tDisconnectSpecificInfo, _encode_EventSpecificInformationBCSM_tDisconnectSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-tDisconnectSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_oTermSeizedSpecificInfo, _decode_EventSpecificInformationBCSM_oTermSeizedSpecificInfo, _encode_EventSpecificInformationBCSM_oTermSeizedSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-oTermSeizedSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCSM_oTermSeizedSpecificInfo, _decode_EventSpecificInformationBCSM_oTermSeizedSpecificInfo, _encode_EventSpecificInformationBCSM_oTermSeizedSpecificInfo } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-oTermSeizedSpecificInfo.ta.mjs";
import { EventSpecificInformationBCSM_oSuspended, _decode_EventSpecificInformationBCSM_oSuspended, _encode_EventSpecificInformationBCSM_oSuspended } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-oSuspended.ta.mjs";
// export { EventSpecificInformationBCSM_oSuspended, _decode_EventSpecificInformationBCSM_oSuspended, _encode_EventSpecificInformationBCSM_oSuspended } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-oSuspended.ta.mjs";
import { EventSpecificInformationBCSM_tSuspended, _decode_EventSpecificInformationBCSM_tSuspended, _encode_EventSpecificInformationBCSM_tSuspended } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-tSuspended.ta.mjs";
// export { EventSpecificInformationBCSM_tSuspended, _decode_EventSpecificInformationBCSM_tSuspended, _encode_EventSpecificInformationBCSM_tSuspended } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-tSuspended.ta.mjs";
import { EventSpecificInformationBCSM_origAttemptAuthorized, _decode_EventSpecificInformationBCSM_origAttemptAuthorized, _encode_EventSpecificInformationBCSM_origAttemptAuthorized } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-origAttemptAuthorized.ta.mjs";
// export { EventSpecificInformationBCSM_origAttemptAuthorized, _decode_EventSpecificInformationBCSM_origAttemptAuthorized, _encode_EventSpecificInformationBCSM_origAttemptAuthorized } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-origAttemptAuthorized.ta.mjs";
import { EventSpecificInformationBCSM_oReAnswer, _decode_EventSpecificInformationBCSM_oReAnswer, _encode_EventSpecificInformationBCSM_oReAnswer } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-oReAnswer.ta.mjs";
// export { EventSpecificInformationBCSM_oReAnswer, _decode_EventSpecificInformationBCSM_oReAnswer, _encode_EventSpecificInformationBCSM_oReAnswer } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-oReAnswer.ta.mjs";
import { EventSpecificInformationBCSM_tReAnswer, _decode_EventSpecificInformationBCSM_tReAnswer, _encode_EventSpecificInformationBCSM_tReAnswer } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-tReAnswer.ta.mjs";
// export { EventSpecificInformationBCSM_tReAnswer, _decode_EventSpecificInformationBCSM_tReAnswer, _encode_EventSpecificInformationBCSM_tReAnswer } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-tReAnswer.ta.mjs";
import { EventSpecificInformationBCSM_facilitySelectedAndAvailable, _decode_EventSpecificInformationBCSM_facilitySelectedAndAvailable, _encode_EventSpecificInformationBCSM_facilitySelectedAndAvailable } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-facilitySelectedAndAvailable.ta.mjs";
// export { EventSpecificInformationBCSM_facilitySelectedAndAvailable, _decode_EventSpecificInformationBCSM_facilitySelectedAndAvailable, _encode_EventSpecificInformationBCSM_facilitySelectedAndAvailable } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-facilitySelectedAndAvailable.ta.mjs";
import { EventSpecificInformationBCSM_callAccepted, _decode_EventSpecificInformationBCSM_callAccepted, _encode_EventSpecificInformationBCSM_callAccepted } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-callAccepted.ta.mjs";
// export { EventSpecificInformationBCSM_callAccepted, _decode_EventSpecificInformationBCSM_callAccepted, _encode_EventSpecificInformationBCSM_callAccepted } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-callAccepted.ta.mjs";
import { EventSpecificInformationBCSM_oAbandon, _decode_EventSpecificInformationBCSM_oAbandon, _encode_EventSpecificInformationBCSM_oAbandon } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-oAbandon.ta.mjs";
// export { EventSpecificInformationBCSM_oAbandon, _decode_EventSpecificInformationBCSM_oAbandon, _encode_EventSpecificInformationBCSM_oAbandon } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-oAbandon.ta.mjs";
import { EventSpecificInformationBCSM_tAbandon, _decode_EventSpecificInformationBCSM_tAbandon, _encode_EventSpecificInformationBCSM_tAbandon } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-tAbandon.ta.mjs";
// export { EventSpecificInformationBCSM_tAbandon, _decode_EventSpecificInformationBCSM_tAbandon, _encode_EventSpecificInformationBCSM_tAbandon } from "../IN-CS2-datatypes/EventSpecificInformationBCSM-tAbandon.ta.mjs";


/**
 * @summary EventSpecificInformationBCSM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM{PARAMETERS-BOUND:bound}  ::=  CHOICE {
 *   collectedInfoSpecificInfo
 *     [0]  SEQUENCE {calledPartynumber  [0]  CalledPartyNumber{bound},
 *                    ...},
 *   analysedInfoSpecificInfo
 *     [1]  SEQUENCE {calledPartynumber  [0]  CalledPartyNumber{bound},
 *                    ...},
 *   routeSelectFailureSpecificInfo
 *     [2]  SEQUENCE {failureCause  [0]  Cause{bound} OPTIONAL,
 *                    ...},
 *   oCalledPartyBusySpecificInfo
 *     [3]  SEQUENCE {busyCause  [0]  Cause{bound} OPTIONAL,
 *                    ...},
 *   oNoAnswerSpecificInfo
 *     [4]  SEQUENCE {-- no specific info defined
 *                    ...},
 *   oAnswerSpecificInfo
 *     [5]  SEQUENCE {backwardGVNS  [0]  BackwardGVNS{bound} OPTIONAL,
 *                    ...},
 *   oMidCallSpecificInfo
 *     [6]  SEQUENCE {connectTime   [0]  Integer4 OPTIONAL,
 *                    oMidCallInfo  [1]  MidCallInfo{bound} OPTIONAL,
 *                    ...},
 *   oDisconnectSpecificInfo
 *     [7]  SEQUENCE {releaseCause  [0]  Cause{bound} OPTIONAL,
 *                    connectTime   [1]  Integer4 OPTIONAL,
 *                    ...},
 *   tBusySpecificInfo
 *     [8]  SEQUENCE {busyCause  [0]  Cause{bound} OPTIONAL,
 *                    ...},
 *   tNoAnswerSpecificInfo
 *     [9]  SEQUENCE {-- no specific info defined
 *                    ...},
 *   tAnswerSpecificInfo
 *     [10]  SEQUENCE {-- no specific info defined
 *                     ...},
 *   tMidCallSpecificInfo
 *     [11]  SEQUENCE {connectTime   [0]  Integer4 OPTIONAL,
 *                     tMidCallInfo  [1]  MidCallInfo{bound} OPTIONAL,
 *                     ...},
 *   tDisconnectSpecificInfo
 *     [12]  SEQUENCE {releaseCause  [0]  Cause{bound} OPTIONAL,
 *                     connectTime   [1]  Integer4 OPTIONAL,
 *                     ...},
 *   oTermSeizedSpecificInfo
 *     [13]  SEQUENCE {-- no specific info defined
 *                     ...},
 *   oSuspended
 *     [14]  SEQUENCE {-- no specific info defined
 *                     ...},
 *   tSuspended
 *     [15]  SEQUENCE {-- no specific info defined
 *                     ...},
 *   origAttemptAuthorized
 *     [16]  SEQUENCE {-- no specific info defined
 *                     ...},
 *   oReAnswer
 *     [17]  SEQUENCE {-- no specific info defined
 *                     ...},
 *   tReAnswer
 *     [18]  SEQUENCE {-- no specific info defined
 *                     ...},
 *   facilitySelectedAndAvailable
 *     [19]  SEQUENCE {-- no specific info defined
 *                     ...},
 *   callAccepted
 *     [20]  SEQUENCE {-- no specific info defined
 *                     ...},
 *   oAbandon
 *     [21]  SEQUENCE {abandonCause  [0]  Cause{bound} OPTIONAL,
 *                     ...},
 *   tAbandon
 *     [22]  SEQUENCE {abandonCause  [0]  Cause{bound} OPTIONAL,
 *                     ...}
 * }
 * ```
 */
export
type EventSpecificInformationBCSM =
    { collectedInfoSpecificInfo: EventSpecificInformationBCSM_collectedInfoSpecificInfo } /* CHOICE_ALT_ROOT */
    | { analysedInfoSpecificInfo: EventSpecificInformationBCSM_analysedInfoSpecificInfo } /* CHOICE_ALT_ROOT */
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
    | { tDisconnectSpecificInfo: EventSpecificInformationBCSM_tDisconnectSpecificInfo } /* CHOICE_ALT_ROOT */
    | { oTermSeizedSpecificInfo: EventSpecificInformationBCSM_oTermSeizedSpecificInfo } /* CHOICE_ALT_ROOT */
    | { oSuspended: EventSpecificInformationBCSM_oSuspended } /* CHOICE_ALT_ROOT */
    | { tSuspended: EventSpecificInformationBCSM_tSuspended } /* CHOICE_ALT_ROOT */
    | { origAttemptAuthorized: EventSpecificInformationBCSM_origAttemptAuthorized } /* CHOICE_ALT_ROOT */
    | { oReAnswer: EventSpecificInformationBCSM_oReAnswer } /* CHOICE_ALT_ROOT */
    | { tReAnswer: EventSpecificInformationBCSM_tReAnswer } /* CHOICE_ALT_ROOT */
    | { facilitySelectedAndAvailable: EventSpecificInformationBCSM_facilitySelectedAndAvailable } /* CHOICE_ALT_ROOT */
    | { callAccepted: EventSpecificInformationBCSM_callAccepted } /* CHOICE_ALT_ROOT */
    | { oAbandon: EventSpecificInformationBCSM_oAbandon } /* CHOICE_ALT_ROOT */
    | { tAbandon: EventSpecificInformationBCSM_tAbandon } /* CHOICE_ALT_ROOT */;

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
    "CONTEXT 1": [ "analysedInfoSpecificInfo", $._decode_implicit<EventSpecificInformationBCSM_analysedInfoSpecificInfo>(() => _decode_EventSpecificInformationBCSM_analysedInfoSpecificInfo) ],
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
    "CONTEXT 14": [ "oSuspended", $._decode_implicit<EventSpecificInformationBCSM_oSuspended>(() => _decode_EventSpecificInformationBCSM_oSuspended) ],
    "CONTEXT 15": [ "tSuspended", $._decode_implicit<EventSpecificInformationBCSM_tSuspended>(() => _decode_EventSpecificInformationBCSM_tSuspended) ],
    "CONTEXT 16": [ "origAttemptAuthorized", $._decode_implicit<EventSpecificInformationBCSM_origAttemptAuthorized>(() => _decode_EventSpecificInformationBCSM_origAttemptAuthorized) ],
    "CONTEXT 17": [ "oReAnswer", $._decode_implicit<EventSpecificInformationBCSM_oReAnswer>(() => _decode_EventSpecificInformationBCSM_oReAnswer) ],
    "CONTEXT 18": [ "tReAnswer", $._decode_implicit<EventSpecificInformationBCSM_tReAnswer>(() => _decode_EventSpecificInformationBCSM_tReAnswer) ],
    "CONTEXT 19": [ "facilitySelectedAndAvailable", $._decode_implicit<EventSpecificInformationBCSM_facilitySelectedAndAvailable>(() => _decode_EventSpecificInformationBCSM_facilitySelectedAndAvailable) ],
    "CONTEXT 20": [ "callAccepted", $._decode_implicit<EventSpecificInformationBCSM_callAccepted>(() => _decode_EventSpecificInformationBCSM_callAccepted) ],
    "CONTEXT 21": [ "oAbandon", $._decode_implicit<EventSpecificInformationBCSM_oAbandon>(() => _decode_EventSpecificInformationBCSM_oAbandon) ],
    "CONTEXT 22": [ "tAbandon", $._decode_implicit<EventSpecificInformationBCSM_tAbandon>(() => _decode_EventSpecificInformationBCSM_tAbandon) ]
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
    "analysedInfoSpecificInfo": $._encode_implicit(_TagClass.context, 1, () => _encode_EventSpecificInformationBCSM_analysedInfoSpecificInfo, $.BER),
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
    "oSuspended": $._encode_implicit(_TagClass.context, 14, () => _encode_EventSpecificInformationBCSM_oSuspended, $.BER),
    "tSuspended": $._encode_implicit(_TagClass.context, 15, () => _encode_EventSpecificInformationBCSM_tSuspended, $.BER),
    "origAttemptAuthorized": $._encode_implicit(_TagClass.context, 16, () => _encode_EventSpecificInformationBCSM_origAttemptAuthorized, $.BER),
    "oReAnswer": $._encode_implicit(_TagClass.context, 17, () => _encode_EventSpecificInformationBCSM_oReAnswer, $.BER),
    "tReAnswer": $._encode_implicit(_TagClass.context, 18, () => _encode_EventSpecificInformationBCSM_tReAnswer, $.BER),
    "facilitySelectedAndAvailable": $._encode_implicit(_TagClass.context, 19, () => _encode_EventSpecificInformationBCSM_facilitySelectedAndAvailable, $.BER),
    "callAccepted": $._encode_implicit(_TagClass.context, 20, () => _encode_EventSpecificInformationBCSM_callAccepted, $.BER),
    "oAbandon": $._encode_implicit(_TagClass.context, 21, () => _encode_EventSpecificInformationBCSM_oAbandon, $.BER),
    "tAbandon": $._encode_implicit(_TagClass.context, 22, () => _encode_EventSpecificInformationBCSM_tAbandon, $.BER),
}, $.BER); }
    return _cached_encoder_for_EventSpecificInformationBCSM(value, elGetter);
}


/* eslint-enable */
