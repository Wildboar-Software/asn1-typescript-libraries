/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { LocDelArg, _decode_LocDelArg, _encode_LocDelArg } from "../WTM-Location-Registration-Operations-asn1-97/LocDelArg.ta.mjs";
import { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../WTM-Location-Registration-Operations-asn1-97/DummyRes.ta.mjs";
import { temporarilyUnavailable } from "../WTM-Location-Registration-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { unspecified } from "../WTM-Location-Registration-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary locDelete
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * locDelete OPERATION ::= {
 *     -- Sent from the Home PINX to the previous Visitor PINX.
 *     ARGUMENT LocDelArg
 *     RESULT DummyRes
 *     ERRORS { temporarilyUnavailable | unspecified }
 *     CODE local: 51
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<LocDelArg, DummyRes>}
 * @implements {OPERATION<LocDelArg, DummyRes>}
 */
export
const locDelete: OPERATION<LocDelArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_LocDelArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_LocDelArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ temporarilyUnavailable, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 51 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
