import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { PlayAnnouncementArg, _decode_PlayAnnouncementArg, _encode_PlayAnnouncementArg } from "../CAP-gsmSCF-gsmSRF-ops-args/PlayAnnouncementArg.ta.mjs";
import { canceled } from "../CAP-errortypes/canceled.oa.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { unavailableResource } from "../CAP-errortypes/unavailableResource.oa.mjs";
import { unknownCSID } from "../CAP-errortypes/unknownCSID.oa.mjs";
import { specializedResourceReport } from "../CAP-gsmSCF-gsmSRF-ops-args/specializedResourceReport.oa.mjs";
import { opcode_playAnnouncement } from "../CAP-operationcodes/opcode-playAnnouncement.va.mjs";

/**
 * @summary playAnnouncement
 * @description
 *
 * Inband interaction with a CS user: play an announcement or tone.
 * Used after Establish Temporary Connection (assist with a second
 * gsmSSF) or Connect To Resource (no assist). Linked operation:
 * SpecializedResourceReport. (3GPP TS 29.078 V19.0.0 clause 11.23).
 *
 * Direction: gsmSCF → gsmSRF. Confirmed (class 2). Local opcode 47.
 * Timer Tpa (Long; 1 s–30 min, operator-defined). The timer must
 * last long enough to correlate the linked SpecializedResourceReport.
 *
 * Cancel before or during processing reports `canceled`. For MS
 * inband interaction the gsmSRF is usually collocated with the
 * gsmSSF for standard tones/announcements; for ISDN it is always
 * collocated. (3GPP TS 29.078 V19.0.0 clauses 6.2 and 11.23).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * playAnnouncement {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	PlayAnnouncementArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{canceled |
 * 			missingParameter |
 * 			parameterOutOfRange |
 * 			systemFailure |
 * 			taskRefused |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter |
 * 			unavailableResource |
 * 			unknownCSID}
 * 	LINKED		{specializedResourceReport}
 * 	CODE		opcode-playAnnouncement}
 * ```
 *
 * @constant
 * @type {OPERATION<PlayAnnouncementArg>}
 * @implements {OPERATION<PlayAnnouncementArg>}
 */
export
const playAnnouncement: OPERATION<PlayAnnouncementArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PlayAnnouncementArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_PlayAnnouncementArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ canceled, missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unavailableResource, unknownCSID, ] /* OBJECT_FIELD_SETTING */,
    "&Linked": [ specializedResourceReport, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_playAnnouncement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
