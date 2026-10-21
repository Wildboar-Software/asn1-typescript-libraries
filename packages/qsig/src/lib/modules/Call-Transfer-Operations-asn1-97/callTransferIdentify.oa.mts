/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { DummyArg, _decode_DummyArg, _encode_DummyArg } from "../Call-Transfer-Operations-asn1-97/DummyArg.ta.mjs";
import { CTIdentifyRes, _decode_CTIdentifyRes, _encode_CTIdentifyRes } from "../Call-Transfer-Operations-asn1-97/CTIdentifyRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { invalidCallState } from "../General-Error-List/invalidCallState.oa.mjs";
import { unspecified } from "../Call-Transfer-Operations-asn1-97/unspecified.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";

/**
 * @summary callTransferIdentify
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callTransferIdentify OPERATION ::= {
 *     ARGUMENT DummyArg
 *     RESULT CTIdentifyRes
 *     ERRORS {
 *         notAvailable
 *         | invalidCallState
 *         | unspecified
 *         | supplementaryServiceInteractionNotAllowed
 *     }
 *     CODE local: 7
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DummyArg, CTIdentifyRes>}
 * @implements {OPERATION<DummyArg, CTIdentifyRes>}
 */
export
const callTransferIdentify: OPERATION<DummyArg, CTIdentifyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DummyArg,
        "&ResultType": _decode_CTIdentifyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_DummyArg,
        "&ResultType": _encode_CTIdentifyRes,
    },
    "&Errors": [ notAvailable, invalidCallState, unspecified, supplementaryServiceInteractionNotAllowed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 7 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
