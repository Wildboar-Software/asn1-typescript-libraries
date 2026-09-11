import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { SendChargingInformationArg, _decode_SendChargingInformationArg, _encode_SendChargingInformationArg } from "../CAP-gsmSSF-gsmSCF-ops-args/SendChargingInformationArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unknownLegID } from "../CAP-errortypes/unknownLegID.oa.mjs";
import { opcode_sendChargingInformation } from "../CAP-operationcodes/opcode-sendChargingInformation.va.mjs";

/**
 * @summary sendChargingInformation
 * @description
 *
 * gsmSCF instructs gsmSSF on Advice of Charge information (e-parameters) to
 * send to the MS. May be invoked multiple times. For MO and MT in the VMSC; for
 * MT, CSE e-parameters are not used by the MS if call forwarding or a follow-on
 * call occurs. gsmSCF → gsmSSF. Unconfirmed (`RETURN RESULT FALSE`). Local
 * opcode 46. Timer `Tsci` (short: 1 s–10 s; operator-defined within range).
 * (3GPP TS 29.078 V19.0.0 clauses 6.1.1 and 11.29).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sendChargingInformation {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	SendChargingInformationArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingParameter |
 * 			unexpectedComponentSequence |
 * 			unexpectedParameter |
 * 			parameterOutOfRange |
 * 			systemFailure |
 * 			taskRefused |
 * 			unexpectedDataValue |
 * 			unknownLegID}
 * 	CODE		opcode-sendChargingInformation}
 * ```
 *
 * @constant
 * @type {OPERATION<SendChargingInformationArg>}
 * @implements {OPERATION<SendChargingInformationArg>}
 */
export
const sendChargingInformation: OPERATION<SendChargingInformationArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SendChargingInformationArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_SendChargingInformationArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, unexpectedComponentSequence, unexpectedParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedDataValue, unknownLegID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_sendChargingInformation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
