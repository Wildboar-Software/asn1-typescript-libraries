import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { EntityReleasedGPRSArg, _decode_EntityReleasedGPRSArg, _encode_EntityReleasedGPRSArg } from "../CAP-gprsSSF-gsmSCF-ops-args/EntityReleasedGPRSArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unknownPDPID } from "../CAP-errortypes/unknownPDPID.oa.mjs";
import { opcode_entityReleasedGPRS } from "../CAP-operationcodes/opcode-entityReleasedGPRS.va.mjs";

/**
 * @summary entityReleasedGPRS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * entityReleasedGPRS OPERATION ::= {
 * 	ARGUMENT	EntityReleasedGPRSArg {bound}
 * 	RETURN RESULT	TRUE
 * 	ERRORS		{missingParameter |
 * 			taskRefused |
 * 			unknownPDPID}
 * 	CODE		opcode-entityReleasedGPRS}
 * ```
 *
 * @constant
 * @type {OPERATION<EntityReleasedGPRSArg>}
 * @implements {OPERATION<EntityReleasedGPRSArg>}
 */
export
const entityReleasedGPRS: OPERATION<EntityReleasedGPRSArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EntityReleasedGPRSArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_EntityReleasedGPRSArg,
        "&ResultType": undefined,
    },
    "&returnResult": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, taskRefused, unknownPDPID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_entityReleasedGPRS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
