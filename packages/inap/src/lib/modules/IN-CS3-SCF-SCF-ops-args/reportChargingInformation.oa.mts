import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
/* eslint-disable */
import {
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ReportChargingInformationArg, _decode_ReportChargingInformationArg, _encode_ReportChargingInformationArg } from "../IN-CS3-SCF-SCF-ops-args/ReportChargingInformationArg.ta.mjs";
// export { ReportChargingInformationArg, _decode_ReportChargingInformationArg, _encode_ReportChargingInformationArg } from "../IN-CS3-SCF-SCF-ops-args/ReportChargingInformationArg.ta.mjs";
import { missingCustomerRecord } from "../IN-CS3-errortypes/missingCustomerRecord.oa.mjs";
// export { missingCustomerRecord } from "../IN-CS3-errortypes/missingCustomerRecord.oa.mjs";
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
import { parameterOutOfRange } from "../IN-CS3-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-CS3-errortypes/parameterOutOfRange.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
// export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { opcode_reportChargingInformation } from "../IN-CS3-operationcodes/opcode-reportChargingInformation.va.mjs";
// export { opcode_reportChargingInformation } from "../IN-CS3-operationcodes/opcode-reportChargingInformation.va.mjs";


/**
 * @summary reportChargingInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * reportChargingInformation OPERATION ::= {
 *   ARGUMENT         ReportChargingInformationArg
 *   RESULT
 *     NULL --EDITOR: &ResultType has to be defined because it is used in scfChained
 *   RETURN RESULT    FALSE
 *   ERRORS
 *     {missingCustomerRecord | missingParameter | systemFailure | scfTaskRefused
 *       | unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter
 *       | parameterOutOfRange | securityError}
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-reportChargingInformation
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ReportChargingInformationArg, NULL>}
 * @implements {OPERATION<ReportChargingInformationArg, NULL>}
 */
export
const reportChargingInformation: OPERATION<ReportChargingInformationArg, NULL> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReportChargingInformationArg,
        "&ResultType": $._decodeNull,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReportChargingInformationArg,
        "&ResultType": $._encodeNull,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingCustomerRecord, missingParameter, systemFailure, scfTaskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, parameterOutOfRange, securityError, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_reportChargingInformation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
