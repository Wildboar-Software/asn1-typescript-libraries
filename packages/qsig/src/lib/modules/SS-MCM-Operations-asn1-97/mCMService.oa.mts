/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { MCMServiceArg, _decode_MCMServiceArg, _encode_MCMServiceArg } from "../SS-MCM-Operations-asn1-97/MCMServiceArg.ta.mjs";
import { MCMDummyRes, _decode_MCMDummyRes, _encode_MCMDummyRes } from "../SS-MCM-Operations-asn1-97/MCMDummyRes.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
import { mCMModeNotProvided } from "../SS-MCM-Operations-asn1-97/mCMModeNotProvided.oa.mjs";
import { unspecified } from "../SS-MCM-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary mCMService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mCMService OPERATION ::= {
 *     ARGUMENT MCMServiceArg
 *     RESULT MCMDummyRes
 *     ERRORS {
 *         userNotSubscribed
 *         | invalidServedUserNr
 *         | basicServiceNotProvided
 *         | mCMModeNotProvided
 *         | unspecified
 *     }
 *     CODE local: 116
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MCMServiceArg, MCMDummyRes>}
 * @implements {OPERATION<MCMServiceArg, MCMDummyRes>}
 */
export
const mCMService: OPERATION<MCMServiceArg, MCMDummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MCMServiceArg,
        "&ResultType": _decode_MCMDummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_MCMServiceArg,
        "&ResultType": _encode_MCMDummyRes,
    },
    "&Errors": [ userNotSubscribed, invalidServedUserNr, basicServiceNotProvided, mCMModeNotProvided, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 116 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
