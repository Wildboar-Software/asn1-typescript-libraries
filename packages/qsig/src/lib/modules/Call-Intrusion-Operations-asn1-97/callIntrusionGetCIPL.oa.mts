/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { type DummyArg, _decode_DummyArg, _encode_DummyArg } from "../Call-Intrusion-Operations-asn1-97/DummyArg.ta.mjs";
import { CIGetCIPLRes, _decode_CIGetCIPLRes, _encode_CIGetCIPLRes } from "../Call-Intrusion-Operations-asn1-97/CIGetCIPLRes.ta.mjs";

/**
 * @summary callIntrusionGetCIPL
 * @description
 *
 * Asks the Unwanted User PINX for that user's CIPL (ECMA-203
 * §6.6.2.1.1, §6.6.3). The Terminating PINX sends the invoke in
 * FACILITY when intrusion is otherwise possible, including during
 * wait on busy (§6.6.2.5.1), and starts timer T5 (at least 10 s,
 * §6.10.5). Local code 44. The Unwanted User PINX returns the CIPL.
 * The operation is defined `ALWAYS RESPONDS FALSE` (§6.3.1). A
 * reject of unrecognized operation is treated as the lowest CIPL
 * (§6.6.2.1.2, §6.6.2.5.2). NFE destination is the end PINX; the
 * Interpretation APDU is omitted (§6.3.3.1). §6.6 does not say
 * which `DummyArg` alternative is sent.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callIntrusionGetCIPL OPERATION ::= {
 *     ARGUMENT DummyArg
 *     RESULT CIGetCIPLRes
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 44
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DummyArg, CIGetCIPLRes>}
 * @implements {OPERATION<DummyArg, CIGetCIPLRes>}
 */
export
const callIntrusionGetCIPL: OPERATION<DummyArg, CIGetCIPLRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DummyArg,
        "&ResultType": _decode_CIGetCIPLRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_DummyArg,
        "&ResultType": _encode_CIGetCIPLRes,
    },
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 44 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
