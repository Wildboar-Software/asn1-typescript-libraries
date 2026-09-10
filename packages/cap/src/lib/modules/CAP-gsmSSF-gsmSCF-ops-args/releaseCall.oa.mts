import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ReleaseCallArg, _decode_ReleaseCallArg, _encode_ReleaseCallArg } from "../CAP-gsmSSF-gsmSCF-ops-args/ReleaseCallArg.ta.mjs";
import { opcode_releaseCall } from "../CAP-operationcodes/opcode-releaseCall.va.mjs";

/**
 * @summary releaseCall
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * releaseCall {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	ReleaseCallArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ALWAYS RESPONDS	FALSE
 * 	CODE		opcode-releaseCall}
 * ```
 *
 * @constant
 * @type {OPERATION<ReleaseCallArg>}
 * @implements {OPERATION<ReleaseCallArg>}
 */
export
const releaseCall: OPERATION<ReleaseCallArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReleaseCallArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReleaseCallArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_releaseCall /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
