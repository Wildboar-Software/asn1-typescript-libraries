/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { PlayAnnouncementArg, _decode_PlayAnnouncementArg, _encode_PlayAnnouncementArg } from "../IN-CS3-SCF-SRF-ops-args/PlayAnnouncementArg.ta.mjs";
// export { PlayAnnouncementArg, _decode_PlayAnnouncementArg, _encode_PlayAnnouncementArg } from "../IN-CS3-SCF-SRF-ops-args/PlayAnnouncementArg.ta.mjs";
import { canceled } from "../IN-CS3-errortypes/canceled.oa.mjs";
// export { canceled } from "../IN-CS3-errortypes/canceled.oa.mjs";
import { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../IN-CS3-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-CS3-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../IN-CS3-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS3-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../IN-CS3-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-CS3-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
import { unavailableResource } from "../IN-CS3-errortypes/unavailableResource.oa.mjs";
// export { unavailableResource } from "../IN-CS3-errortypes/unavailableResource.oa.mjs";
import { unknownLegID } from "../IN-CS3-errortypes/unknownLegID.oa.mjs";
// export { unknownLegID } from "../IN-CS3-errortypes/unknownLegID.oa.mjs";
import { specializedResourceReport } from "../IN-CS3-SCF-SRF-ops-args/specializedResourceReport.oa.mjs";
// export { specializedResourceReport } from "../IN-CS3-SCF-SRF-ops-args/specializedResourceReport.oa.mjs";
import { opcode_playAnnouncement } from "../IN-CS3-operationcodes/opcode-playAnnouncement.va.mjs";
// export { opcode_playAnnouncement } from "../IN-CS3-operationcodes/opcode-playAnnouncement.va.mjs";


/**
 * @summary playAnnouncement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * playAnnouncement OPERATION ::= {
 *   ARGUMENT         PlayAnnouncementArg
 *   RETURN RESULT    FALSE
 *   ERRORS
 *     {canceled | missingParameter | parameterOutOfRange | systemFailure |
 *       taskRefused | unexpectedComponentSequence | unexpectedDataValue |
 *       unexpectedParameter | unavailableResource | unknownLegID}
 *   LINKED           {specializedResourceReport}
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-playAnnouncement
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
    "&Errors": [ canceled, missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unavailableResource, unknownLegID, ] /* OBJECT_FIELD_SETTING */,
    "&Linked": [ specializedResourceReport, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_playAnnouncement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
