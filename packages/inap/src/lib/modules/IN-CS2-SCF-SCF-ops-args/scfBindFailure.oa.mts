/* eslint-disable */
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { FailureReason, _decode_FailureReason, _encode_FailureReason } from "../IN-CS2-SCF-SCF-ops-args/FailureReason.ta.mjs";
// export { FailureReason, _decode_FailureReason, _encode_FailureReason } from "../IN-CS2-SCF-SCF-ops-args/FailureReason.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary scfBindFailure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scfBindFailure ERROR ::= {PARAMETER  FailureReason
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<FailureReason>}
 * @implements {ERROR<FailureReason>}
 */
export
const scfBindFailure: ERROR<FailureReason> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_FailureReason,
    },
    encoderFor: {
        "&ParameterType": _encode_FailureReason,
    },
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
