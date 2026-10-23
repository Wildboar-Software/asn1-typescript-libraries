/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { DummyArg, _decode_DummyArg, _encode_DummyArg } from "../Call-Transfer-Operations-asn1-97/DummyArg.ta.mjs";

/**
 * @summary callTransferAbandon
 * @description
 *
 * Transferring PINX to Secondary PINX, on the secondary call, to abort
 * transfer by rerouteing. Sent when timer T1 expires, when
 * `callTransferInitiate` is rejected or returns an error, or when
 * timer T3 expires while the secondary call is still up. No result.
 * ROSE local 8. Interpretation APDU:
 * `discardAnyUnrecognisedInvokePdu`. NFE `destinationEntity` is
 * `endPINX`. The Secondary PINX stops timer T2 and returns to CT-Idle.
 * ECMA-178 §6.3.1, §6.3.2.1, §6.5.1.4, §6.5.3.4; ECMA-177 §8.2.1.3.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callTransferAbandon OPERATION ::= {
 *     ARGUMENT DummyArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 8
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DummyArg>}
 * @implements {OPERATION<DummyArg>}
 */
export
const callTransferAbandon: OPERATION<DummyArg> = {
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
    "&operationCode": { local: 8 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
