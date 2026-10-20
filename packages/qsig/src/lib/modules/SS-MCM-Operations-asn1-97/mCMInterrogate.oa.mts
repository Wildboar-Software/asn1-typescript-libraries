/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { MCMInterrogateArg, _decode_MCMInterrogateArg, _encode_MCMInterrogateArg } from "../SS-MCM-Operations-asn1-97/MCMInterrogateArg.ta.mjs";
// export { MCMInterrogateArg, _decode_MCMInterrogateArg, _encode_MCMInterrogateArg } from "../SS-MCM-Operations-asn1-97/MCMInterrogateArg.ta.mjs";
import { MCMInterrogateRes, _decode_MCMInterrogateRes, _encode_MCMInterrogateRes } from "../SS-MCM-Operations-asn1-97/MCMInterrogateRes.ta.mjs";
// export { MCMInterrogateRes, _decode_MCMInterrogateRes, _encode_MCMInterrogateRes } from "../SS-MCM-Operations-asn1-97/MCMInterrogateRes.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
// export { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
// export { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
// export { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
import { mCMModeNotProvided } from "../SS-MCM-Operations-asn1-97/mCMModeNotProvided.oa.mjs";
// export { mCMModeNotProvided } from "../SS-MCM-Operations-asn1-97/mCMModeNotProvided.oa.mjs";
import { unspecified } from "../SS-MCM-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../SS-MCM-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary mCMInterrogate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mCMInterrogate OPERATION ::= {
 *     ARGUMENT MCMInterrogateArg
 *     RESULT MCMInterrogateRes
 *     ERRORS {
 *         userNotSubscribed
 *         | invalidServedUserNr
 *         | basicServiceNotProvided
 *         | mCMModeNotProvided
 *         | unspecified
 *     }
 *     CODE local: 117
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MCMInterrogateArg, MCMInterrogateRes>}
 * @implements {OPERATION<MCMInterrogateArg, MCMInterrogateRes>}
 */
export
const mCMInterrogate: OPERATION<MCMInterrogateArg, MCMInterrogateRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MCMInterrogateArg,
        "&ResultType": _decode_MCMInterrogateRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_MCMInterrogateArg,
        "&ResultType": _encode_MCMInterrogateRes,
    },
    "&Errors": [ userNotSubscribed, invalidServedUserNr, basicServiceNotProvided, mCMModeNotProvided, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 117 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
