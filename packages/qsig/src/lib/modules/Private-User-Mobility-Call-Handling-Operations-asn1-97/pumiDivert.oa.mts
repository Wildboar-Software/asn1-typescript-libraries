/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { DivertArg, _decode_DivertArg, _encode_DivertArg } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/DivertArg.ta.mjs";
import { type DummyRes, _decode_DummyRes, _encode_DummyRes } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/DummyRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { unspecified } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary pumiDivert
 * @description
 *
 * Ask the Rerouteing PINX to extend the call to the Visitor PINX (ECMA-284
 * §6.5.1, §6.5.2). The PUMI-detect PINX sends it in a FACILITY message on the
 * incoming call. The Rerouteing PINX acts in basic-call state Outgoing Call
 * Proceeding: it opens a new call to `hostingAddr`, puts `pumiInform` in that
 * SETUP, and releases the leg toward the PUMI-detect PINX with a DISCONNECT
 * that carries the return result. ROSE local CODE 94. The result is `DummyRes`.
 * Timer T2, at least 15 s, runs at the PUMI-detect PINX in state PUMI-Divert
 * (§6.9.2). If the Rerouteing PINX cannot proceed it returns `notAvailable`
 * (§6.5.1.2). `unspecified` is also listed (§6.3.1); clause 6 is silent on when
 * to return it. On error, reject, or T2 expiry the PUMI-detect PINX either
 * releases the basic call or performs rerouteing locally (§6.5.2.2). When the
 * PUMI-detect PINX is also the Rerouteing PINX, that exchange stays inside the
 * PINX (§6.5.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-284/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pumiDivert OPERATION ::= {
 *     -- Sent from the PUMI-detect PINX to the Rerouteing PINX.
 *     ARGUMENT DivertArg
 *     RESULT DummyRes
 *     ERRORS { notAvailable | unspecified }
 *     CODE local: 94
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DivertArg, DummyRes>}
 * @implements {OPERATION<DivertArg, DummyRes>}
 */
export
const pumiDivert: OPERATION<DivertArg, DummyRes> = {
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
    "&operationCode": { local: 94 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
