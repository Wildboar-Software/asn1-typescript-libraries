import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ConnectToResourceArg, _decode_ConnectToResourceArg, _encode_ConnectToResourceArg } from "../CAP-gsmSSF-gsmSCF-ops-args/ConnectToResourceArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { unknownCSID } from "../CAP-errortypes/unknownCSID.oa.mjs";
import { opcode_connectToResource } from "../CAP-operationcodes/opcode-connectToResource.va.mjs";

/**
 * @summary connectToResource
 * @description
 *
 * gsmSCF connects a call segment from gsmSSF to a specialized resource. After
 * success, gsmSSF relays gsmSRF operations and responses. gsmSCF → gsmSSF.
 * Unconfirmed (`RETURN RESULT FALSE`). Local opcode 19. Timer `Tctr` (short: 1
 * s–10 s; operator-defined within range). (3GPP TS 29.078 V19.0.0 clauses 6.1.1
 * and 11.10).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * connectToResource {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	ConnectToResourceArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingParameter |
 * 			systemFailure |
 * 			taskRefused |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter |
 * 			unknownCSID}
 * 	CODE		opcode-connectToResource}
 * ```
 *
 * @constant
 * @type {OPERATION<ConnectToResourceArg>}
 * @implements {OPERATION<ConnectToResourceArg>}
 */
export
const connectToResource: OPERATION<ConnectToResourceArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ConnectToResourceArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ConnectToResourceArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownCSID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_connectToResource /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
