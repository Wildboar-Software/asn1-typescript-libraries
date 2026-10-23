/* eslint-disable */
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ReferralParameter, _decode_ReferralParameter, _encode_ReferralParameter } from "../IN-CS3-errortypes/ReferralParameter.ta.mjs";
// export { ReferralParameter, _decode_ReferralParameter, _encode_ReferralParameter } from "../IN-CS3-errortypes/ReferralParameter.ta.mjs";
import { errcode_scfReferral } from "../IN-CS3-errorcodes/errcode-scfReferral.va.mjs";
// export { errcode_scfReferral } from "../IN-CS3-errorcodes/errcode-scfReferral.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary scfReferral
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scfReferral ERROR ::= {
 *   PARAMETER  ReferralParameter
 *   CODE       errcode-scfReferral
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<ReferralParameter>}
 * @implements {ERROR<ReferralParameter>}
 */
export
const scfReferral: ERROR<ReferralParameter> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_ReferralParameter,
    },
    encoderFor: {
        "&ParameterType": _encode_ReferralParameter,
    },
    "&errorCode": errcode_scfReferral /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
