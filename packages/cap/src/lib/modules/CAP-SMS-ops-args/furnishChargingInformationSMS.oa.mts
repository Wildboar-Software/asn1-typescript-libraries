import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { FurnishChargingInformationSMSArg, _decode_FurnishChargingInformationSMSArg, _encode_FurnishChargingInformationSMSArg } from "../CAP-SMS-ops-args/FurnishChargingInformationSMSArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { opcode_furnishChargingInformationSMS } from "../CAP-operationcodes/opcode-furnishChargingInformationSMS.va.mjs";

/**
 * @summary furnishChargingInformationSMS
 * @description
 *
 * Sends charging data to a CAMEL Logical SMS record (offline SM
 * charging). The first invocation creates the record; later ones
 * overwrite or append free-format data per appendFreeFormatData.
 * (3GPP TS 29.078 V19.0.0 clause 12.4).
 *
 * Direction: gsmSCF → smsSSF (MSC or SGSN). Confirmed (class 2).
 * Local opcode 61. Timer Tfcisms (Short; 1–20 s, operator-defined).
 *
 * Valid in Waiting_for_Instructions; no FSM state change. The
 * logical record is associated with one or more physical CDRs
 * (3GPP TS 32.250 / 32.251 / 22.115).
 * (3GPP TS 29.078 V19.0.0 clauses 7.1 and 12.4).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * furnishChargingInformationSMS {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	FurnishChargingInformationSMSArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingParameter |
 * 			taskRefused |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter}
 * 	CODE		opcode-furnishChargingInformationSMS}
 * ```
 *
 * @constant
 * @type {OPERATION<FurnishChargingInformationSMSArg>}
 * @implements {OPERATION<FurnishChargingInformationSMSArg>}
 */
export
const furnishChargingInformationSMS: OPERATION<FurnishChargingInformationSMSArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_FurnishChargingInformationSMSArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_FurnishChargingInformationSMSArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_furnishChargingInformationSMS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
