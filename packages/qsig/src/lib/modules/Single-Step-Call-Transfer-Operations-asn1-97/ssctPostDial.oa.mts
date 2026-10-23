/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { DummyArg, _decode_DummyArg, _encode_DummyArg } from "../Single-Step-Call-Transfer-Operations-asn1-97/DummyArg.ta.mjs";

/**
 * @summary ssctPostDial
 * @description
 *
 * Unconfirmed. Rerouting PINX to Transferred PINX when
 * `rerouteingNumber` in `ssctInitiate` is not a complete number.
 * Asks User B for the remaining digits, which come back in
 * `ssctDigitInfo`. ROSE local 101. Interpretation APDU is
 * `rejectAnyUnrecognisedInvokePdu` or omitted. NFE `destinationEntity`
 * is `endPINX`. Sending this invoke starts timer T3 (14 s to 16 s)
 * and state SSCT-Await-Info. The argument carries no standardized
 * elements. ECMA-300 §6.3.1, §6.3.2.1, §6.5.2.1, §6.9.3.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-300/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ssctPostDial OPERATION ::= {
 *     -- sent from the Rerouting PINX to the Transferred PINX
 *     ARGUMENT DummyArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 101
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DummyArg>}
 * @implements {OPERATION<DummyArg>}
 */
export
const ssctPostDial: OPERATION<DummyArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DummyArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_DummyArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 101 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
