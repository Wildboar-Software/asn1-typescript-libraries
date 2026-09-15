import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { SplitLegArg, _decode_SplitLegArg, _encode_SplitLegArg } from "../CAP-gsmSSF-gsmSCF-ops-args/SplitLegArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unknownLegID } from "../CAP-errortypes/unknownLegID.oa.mjs";
import { opcode_splitLeg } from "../CAP-operationcodes/opcode-splitLeg.va.mjs";

/**
 * @summary splitLeg
 * @description
 *
 * gsmSCF separates one party from its source Call Segment and places it in a
 * new target Call Segment in the same CSA. Return Result is sent immediately
 * after successful execution. gsmSCF → gsmSSF. Confirmed (`RETURN RESULT
 * TRUE`). Local opcode 95. Timer `Tsl` (short: 1 s–10 s; operator-defined
 * within range). (3GPP TS 29.078 V19.0.0 clauses 6.1.1 and 11.31).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * splitLeg {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	SplitLegArg {bound}
 * 	RETURN RESULT	TRUE
 * 	ERRORS		{missingParameter |
 * 			unexpectedComponentSequence |
 * 			unexpectedParameter |
 * 			unexpectedDataValue |
 * 			systemFailure |
 * 			taskRefused |
 * 			unknownLegID}
 * 	CODE		opcode-splitLeg}
 * ```
 *
 * @constant
 * @type {OPERATION<SplitLegArg>}
 * @implements {OPERATION<SplitLegArg>}
 */
export
const splitLeg: OPERATION<SplitLegArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SplitLegArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_SplitLegArg,
        "&ResultType": undefined,
    },
    "&returnResult": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, unexpectedComponentSequence, unexpectedParameter, unexpectedDataValue, systemFailure, taskRefused, unknownLegID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_splitLeg /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
