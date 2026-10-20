/* eslint-disable */
import {
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { NotificationProvidedArg, _decode_NotificationProvidedArg, _encode_NotificationProvidedArg } from "../IN-CS3-SCF-SCF-ops-args/NotificationProvidedArg.ta.mjs";
// export { NotificationProvidedArg, _decode_NotificationProvidedArg, _encode_NotificationProvidedArg } from "../IN-CS3-SCF-SCF-ops-args/NotificationProvidedArg.ta.mjs";
import { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
import { systemFailure } from "../IN-CS3-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS3-errortypes/systemFailure.oa.mjs";
import { scfTaskRefused } from "../IN-CS3-errortypes/scfTaskRefused.oa.mjs";
// export { scfTaskRefused } from "../IN-CS3-errortypes/scfTaskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
import { missingCustomerRecord } from "../IN-CS3-errortypes/missingCustomerRecord.oa.mjs";
// export { missingCustomerRecord } from "../IN-CS3-errortypes/missingCustomerRecord.oa.mjs";
import { parameterOutOfRange } from "../IN-CS3-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-CS3-errortypes/parameterOutOfRange.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
// export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { opcode_notificationProvided } from "../IN-CS3-operationcodes/opcode-notificationProvided.va.mjs";
// export { opcode_notificationProvided } from "../IN-CS3-operationcodes/opcode-notificationProvided.va.mjs";


/**
 * @summary notificationProvided
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * notificationProvided OPERATION ::= {
 *   ARGUMENT         NotificationProvidedArg
 *   RESULT
 *     NULL --EDITOR: &ResultType has to be defined because it is used in scfChained
 *   RETURN RESULT    FALSE
 *   ERRORS
 *     {missingParameter | systemFailure | scfTaskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter |
 *       missingCustomerRecord | parameterOutOfRange | securityError}
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-notificationProvided
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<NotificationProvidedArg, NULL>}
 * @implements {OPERATION<NotificationProvidedArg, NULL>}
 */
export
const notificationProvided: OPERATION<NotificationProvidedArg, NULL> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_NotificationProvidedArg,
        "&ResultType": $._decodeNull,
    },
    encoderFor: {
        "&ArgumentType": _encode_NotificationProvidedArg,
        "&ResultType": $._encodeNull,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, systemFailure, scfTaskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, missingCustomerRecord, parameterOutOfRange, securityError, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_notificationProvided /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
