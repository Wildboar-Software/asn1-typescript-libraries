/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { PlayAnnouncementArg, _decode_PlayAnnouncementArg, _encode_PlayAnnouncementArg } from "../IN-CS2-SCF-SRF-ops-args/PlayAnnouncementArg.ta.mjs";
// export { PlayAnnouncementArg, _decode_PlayAnnouncementArg, _encode_PlayAnnouncementArg } from "../IN-CS2-SCF-SRF-ops-args/PlayAnnouncementArg.ta.mjs";
import { cancelled } from "../IN-CS2-errortypes/cancelled.oa.mjs";
// export { cancelled } from "../IN-CS2-errortypes/cancelled.oa.mjs";
import { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../IN-CS2-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-CS2-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../IN-CS2-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS2-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../IN-CS2-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-CS2-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS2-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS2-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-CS2-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS2-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS2-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS2-errortypes/unexpectedParameter.oa.mjs";
import { unavailableResource } from "../IN-CS2-errortypes/unavailableResource.oa.mjs";
// export { unavailableResource } from "../IN-CS2-errortypes/unavailableResource.oa.mjs";
import { specializedResourceReport } from "../IN-CS2-SCF-SRF-ops-args/specializedResourceReport.oa.mjs";
// export { specializedResourceReport } from "../IN-CS2-SCF-SRF-ops-args/specializedResourceReport.oa.mjs";
import { opcode_playAnnouncement } from "../IN-CS2-operationcodes/opcode-playAnnouncement.va.mjs";
// export { opcode_playAnnouncement } from "../IN-CS2-operationcodes/opcode-playAnnouncement.va.mjs";


/**
 * @summary playAnnouncement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * playAnnouncement OPERATION ::= {
 *   ARGUMENT       PlayAnnouncementArg
 *   RETURN RESULT  FALSE
 *   ERRORS
 *     {cancelled | missingParameter | parameterOutOfRange | systemFailure |
 *       taskRefused | unexpectedComponentSequence | unexpectedDataValue |
 *       unexpectedParameter | unavailableResource}
 *   LINKED         {specializedResourceReport}
 *   CODE           opcode-playAnnouncement
 * }
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
    "&Errors": [ cancelled, missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unavailableResource, ] /* OBJECT_FIELD_SETTING */,
    "&Linked": [ specializedResourceReport, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_playAnnouncement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
