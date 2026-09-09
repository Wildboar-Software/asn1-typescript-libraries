import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { DisconnectLegArg, _decode_DisconnectLegArg, _encode_DisconnectLegArg } from "../CAP-gsmSSF-gsmSCF-ops-args/DisconnectLegArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { unknownLegID } from "../CAP-errortypes/unknownLegID.oa.mjs";
import { opcode_disconnectLeg } from "../CAP-operationcodes/opcode-disconnectLeg.va.mjs";

/**
 * @summary disconnectLeg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * disconnectLeg OPERATION ::= {
 * 	ARGUMENT	DisconnectLegArg {bound}
 * 	RETURN RESULT	TRUE
 * 	ERRORS		{missingParameter |
 * 			systemFailure |
 * 			taskRefused |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter |
 * 			unknownLegID}
 * 	CODE		opcode-disconnectLeg}
 * ```
 *
 * @constant
 * @type {OPERATION<DisconnectLegArg>}
 * @implements {OPERATION<DisconnectLegArg>}
 */
export
const disconnectLeg: OPERATION<DisconnectLegArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DisconnectLegArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_DisconnectLegArg,
        "&ResultType": undefined,
    },
    "&returnResult": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownLegID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_disconnectLeg /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
