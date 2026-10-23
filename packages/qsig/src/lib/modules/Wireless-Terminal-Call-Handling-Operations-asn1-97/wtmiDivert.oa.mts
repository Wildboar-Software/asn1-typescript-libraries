/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { DivertArg, _decode_DivertArg, _encode_DivertArg } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/DivertArg.ta.mjs";
import { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/DummyRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { unspecified } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary wtmiDivert
 * @description
 *
 * ANF-WTMI request from the WTMI-detect PINX to the Rerouteing PINX, in a
 * FACILITY message on the incoming call, after `currLocation` is received
 * (ECMA-304 §6.5.2.1). Local code 55. If the Rerouteing PINX can proceed, it
 * establishes a new call to the Visitor PINX and releases the leg toward the
 * WTMI-detect PINX with a DISCONNECT carrying the return result (§6.5.1.1).
 * Timer T2 at the WTMI-detect PINX, in state WTMI-Divert, shall be at least 15
 * s (§6.9.2). If the Rerouteing PINX cannot proceed it returns `notAvailable`
 * (§6.5.1.2). `unspecified` is listed in §6.3.1, which does not say when it is
 * returned.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-304/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * wtmiDivert OPERATION ::= {
 *     -- Sent from the WTMI-detect PINX to the Rerouteing PINX.
 *     ARGUMENT DivertArg
 *     RESULT DummyRes
 *     ERRORS { notAvailable | unspecified }
 *     CODE local: 55
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DivertArg, DummyRes>}
 * @implements {OPERATION<DivertArg, DummyRes>}
 */
export
const wtmiDivert: OPERATION<DivertArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DivertArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_DivertArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ notAvailable, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 55 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
