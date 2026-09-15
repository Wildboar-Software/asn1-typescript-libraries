import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { FurnishChargingInformationArg, _decode_FurnishChargingInformationArg, _encode_FurnishChargingInformationArg } from "../CAP-gsmSSF-gsmSCF-ops-args/FurnishChargingInformationArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { unknownLegID } from "../CAP-errortypes/unknownLegID.oa.mjs";
import { opcode_furnishChargingInformation } from "../CAP-operationcodes/opcode-furnishChargingInformation.va.mjs";

/**
 * @summary furnishChargingInformation
 * @description
 *
 * gsmSCF writes CAMEL-specific free-format charging data into a logical call
 * record for off-line charging. The first FCI for a leg creates the record;
 * later FCIs append or overwrite per `appendFreeFormatData`. gsmSCF → gsmSSF.
 * Unconfirmed (`RETURN RESULT FALSE`). Local opcode 34. Timer `Tfci` (short: 1
 * s–10 s; operator-defined within range). (3GPP TS 29.078 V19.0.0 clauses 6.1.1
 * and 11.19).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * furnishChargingInformation {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	FurnishChargingInformationArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingParameter |
 * 			taskRefused |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter |
 * 			unknownLegID}
 * 	CODE		opcode-furnishChargingInformation}
 * ```
 *
 * @constant
 * @type {OPERATION<FurnishChargingInformationArg>}
 * @implements {OPERATION<FurnishChargingInformationArg>}
 */
export
const furnishChargingInformation: OPERATION<FurnishChargingInformationArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_FurnishChargingInformationArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_FurnishChargingInformationArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownLegID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_furnishChargingInformation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
