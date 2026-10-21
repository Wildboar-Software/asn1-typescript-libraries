/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { MWIActivateArg, _decode_MWIActivateArg, _encode_MWIActivateArg } from "../MWI-Operations-asn1-97/MWIActivateArg.ta.mjs";
import { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../MWI-Operations-asn1-97/DummyRes.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
import { unspecified } from "../MWI-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary mWIActivate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mWIActivate OPERATION ::= {
 *     ARGUMENT MWIActivateArg
 *     RESULT DummyRes
 *     ERRORS {
 *         userNotSubscribed
 *         | invalidServedUserNr
 *         | basicServiceNotProvided
 *         | unspecified
 *     }
 *     CODE local: 80
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MWIActivateArg, DummyRes>}
 * @implements {OPERATION<MWIActivateArg, DummyRes>}
 */
export
const mWIActivate: OPERATION<MWIActivateArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MWIActivateArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_MWIActivateArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ userNotSubscribed, invalidServedUserNr, basicServiceNotProvided, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 80 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
