import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { EstablishTemporaryConnectionArg, _decode_EstablishTemporaryConnectionArg, _encode_EstablishTemporaryConnectionArg } from "../CAP-gsmSSF-gsmSCF-ops-args/EstablishTemporaryConnectionArg.ta.mjs";
import { eTCFailed } from "../CAP-errortypes/eTCFailed.oa.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { unknownCSID } from "../CAP-errortypes/unknownCSID.oa.mjs";
import { opcode_establishTemporaryConnection } from "../CAP-operationcodes/opcode-establishTemporaryConnection.va.mjs";

/**
 * @summary establishTemporaryConnection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * establishTemporaryConnection {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	EstablishTemporaryConnectionArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{eTCFailed |
 * 			missingParameter |
 * 			systemFailure |
 * 			taskRefused |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter |
 * 			unknownCSID}
 * 	CODE		opcode-establishTemporaryConnection}
 * ```
 *
 * @constant
 * @type {OPERATION<EstablishTemporaryConnectionArg>}
 * @implements {OPERATION<EstablishTemporaryConnectionArg>}
 */
export
const establishTemporaryConnection: OPERATION<EstablishTemporaryConnectionArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EstablishTemporaryConnectionArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_EstablishTemporaryConnectionArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ eTCFailed, missingParameter, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownCSID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_establishTemporaryConnection /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
