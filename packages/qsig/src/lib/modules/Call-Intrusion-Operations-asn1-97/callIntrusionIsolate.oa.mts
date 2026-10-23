/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { DummyArg, _decode_DummyArg, _encode_DummyArg } from "../Call-Intrusion-Operations-asn1-97/DummyArg.ta.mjs";
import { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../Call-Intrusion-Operations-asn1-97/DummyRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { unspecified } from "../Call-Intrusion-Operations-asn1-97/unspecified.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";

/**
 * @summary callIntrusionIsolate
 * @description
 *
 * After a conference intrusion, disconnects the unwanted user
 * (ECMA-203 §6.6.1.2, §6.6.2.2). Optional. The Originating PINX
 * sends the invoke in FACILITY from CI-Orig-Invoked and starts
 * timer T2 (at least 30 s, §6.10.2). Local code 45. The Terminating
 * PINX leaves the calling and called users connected, returns a
 * result, sends `isolationThroughIntrusion` to the unwanted user,
 * and enters CI-Dest-Isolated. If isolation is not possible it
 * returns an error and stays in CI-Dest-Invoked. The ERRORS set is
 * `notAvailable`, `unspecified`, and
 * `supplementaryServiceInteractionNotAllowed` (§6.3.1). §6.6.2.2
 * does not say which of those is sent.
 *
 * §6.6.1.2.2 names the return error `callIntrusionIsolationRequest`.
 * The operation defined in §6.3.1 is `callIntrusionIsolate`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callIntrusionIsolate OPERATION ::= {
 *     ARGUMENT DummyArg
 *     RESULT DummyRes
 *     ERRORS {
 *         notAvailable
 *         | unspecified
 *         | supplementaryServiceInteractionNotAllowed
 *     }
 *     CODE local: 45
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DummyArg, DummyRes>}
 * @implements {OPERATION<DummyArg, DummyRes>}
 */
export
const callIntrusionIsolate: OPERATION<DummyArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DummyArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_DummyArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ notAvailable, unspecified, supplementaryServiceInteractionNotAllowed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 45 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
