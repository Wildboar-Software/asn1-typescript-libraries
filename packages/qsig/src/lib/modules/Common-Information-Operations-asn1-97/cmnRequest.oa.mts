/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { type DummyArg, _decode_DummyArg, _encode_DummyArg } from "../Common-Information-Operations-asn1-97/DummyArg.ta.mjs";
import { CmnArg, _decode_CmnArg, _encode_CmnArg } from "../Common-Information-Operations-asn1-97/CmnArg.ta.mjs";

/**
 * @summary cmnRequest
 * @description
 *
 * Solicited ANF-CMN (ECMA-251 §6.6.1.1, §6.6.2.1). The argument carries no
 * common information; the result is CmnArg. ALWAYS RESPONDS FALSE. During
 * call establishment it may be sent in SETUP (forward) or in ALERTING,
 * CONNECT, or PROGRESS (backward), or in FACILITY after the first end-to-end
 * basic-call message. During the active phase it is sent in FACILITY.
 * Timer T1 (not less than 30 s, §6.10) runs unless the invoke was
 * sent in SETUP. A forward SETUP invoke relies on basic-call timers
 * (§6.6.1.1). The sender waits in CMN-Wait-Answer. ROSE local CODE 84.
 * NFE `destinationEntity` is `endPINX`. The Interpretation APDU is
 * omitted or is `rejectAnyUnrecognisedInvokePdu` (§6.3.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cmnRequest OPERATION ::= {
 *     ARGUMENT DummyArg
 *     RESULT CmnArg
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 84
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DummyArg, CmnArg>}
 * @implements {OPERATION<DummyArg, CmnArg>}
 */
export
const cmnRequest: OPERATION<DummyArg, CmnArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DummyArg,
        "&ResultType": _decode_CmnArg,
    },
    encoderFor: {
        "&ArgumentType": _encode_DummyArg,
        "&ResultType": _encode_CmnArg,
    },
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 84 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
