/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { DummyArg, _decode_DummyArg, _encode_DummyArg } from "../Call-Intrusion-Operations-asn1-97/DummyArg.ta.mjs";
import { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../Call-Intrusion-Operations-asn1-97/DummyRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { unspecified } from "../Call-Intrusion-Operations-asn1-97/unspecified.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";

/**
 * @summary callIntrusionWOBRequest
 * @description
 *
 * Leaves the intrusion and waits until the called user is free
 * (ECMA-203 §6.6.1.4, §6.6.2.4). Optional. The Originating PINX
 * sends the invoke in FACILITY from CI-Orig-Invoked or
 * CI-Orig-Isolated and starts timer T4 (at least 30 s, §6.10.4).
 * Local code 47. The Terminating PINX disconnects the calling user
 * and reconnects the unwanted user to the called user, returns a
 * result, sends `endOfIntrusion` to the unwanted user, and enters
 * CI-Dest-WOB. The established call is no longer tied to the
 * waiting call. If wait on busy is not possible it returns an error
 * and stays in the current state. §6.6.2.4 does not say which error
 * from the ERRORS set is used (§6.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callIntrusionWOBRequest OPERATION ::= {
 *     ARGUMENT DummyArg
 *     RESULT DummyRes
 *     ERRORS {
 *         notAvailable
 *         | unspecified
 *         | supplementaryServiceInteractionNotAllowed
 *     }
 *     CODE local: 47
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DummyArg, DummyRes>}
 * @implements {OPERATION<DummyArg, DummyRes>}
 */
export
const callIntrusionWOBRequest: OPERATION<DummyArg, DummyRes> = {
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
    "&operationCode": { local: 47 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
