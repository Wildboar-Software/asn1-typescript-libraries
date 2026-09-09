import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { FurnishChargingInformationGPRSArg, _decode_FurnishChargingInformationGPRSArg, _encode_FurnishChargingInformationGPRSArg } from "../CAP-gprsSSF-gsmSCF-ops-args/FurnishChargingInformationGPRSArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { unknownPDPID } from "../CAP-errortypes/unknownPDPID.oa.mjs";
import { opcode_furnishChargingInformationGPRS } from "../CAP-operationcodes/opcode-furnishChargingInformationGPRS.va.mjs";

/**
 * @summary furnishChargingInformationGPRS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * furnishChargingInformationGPRS OPERATION ::= {
 * 	ARGUMENT	FurnishChargingInformationGPRSArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingParameter |
 * 			taskRefused |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter |
 * 			unknownPDPID}
 * 	CODE		opcode-furnishChargingInformationGPRS}
 * ```
 *
 * @constant
 * @type {OPERATION<FurnishChargingInformationGPRSArg>}
 * @implements {OPERATION<FurnishChargingInformationGPRSArg>}
 */
export
const furnishChargingInformationGPRS: OPERATION<FurnishChargingInformationGPRSArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_FurnishChargingInformationGPRSArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_FurnishChargingInformationGPRSArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownPDPID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_furnishChargingInformationGPRS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
