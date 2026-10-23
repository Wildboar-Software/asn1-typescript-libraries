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
 * Delete the previous visitor-area entry (ECMA-302 §6.5.4, §6.5.6). The Home
 * PINX sends it to the previous Visitor PINX after `locUpdate` changes the
 * visitor area. ROSE local CODE 51. The result is `DummyRes`. The previous
 * Visitor PINX deletes the VDB entry for `wtmUserId` and, if present,
 * `basicService`, and still returns a result if the user is already absent
 * (§6.5.6). It returns `temporarilyUnavailable` when the VDB is temporarily
 * unavailable. Timer T4, at least 15 s, runs at the Home PINX in HomeDelete
 * (§6.10.4). Expiry or a return error may lead to management action to correct
 * that VDB (§6.5.4.2 note 8). `unspecified` is also listed; clause 6 is silent
 * on when to return it. If SS-MWI applies, stored `mwiActivate` APDUs may ride
 * with the return result (§6.9.20).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-302/
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
