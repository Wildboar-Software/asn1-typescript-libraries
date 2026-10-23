/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CTActiveArg, _decode_CTActiveArg, _encode_CTActiveArg } from "../Call-Transfer-Operations-asn1-97/CTActiveArg.ta.mjs";

/**
 * @summary callTransferActive
 * @description
 *
 * Unconfirmed. Transferring PINX to the Primary PINX when, during
 * join, CONNECT arrives on a secondary call that was still alerting
 * (state CT-Await-Answer-From-User-C). Reports that User C has
 * answered. The Transferring PINX then acts as a Transit PINX for the
 * resulting call. ROSE local 11. Interpretation APDU:
 * `discardAnyUnrecognisedInvokePdu`. NFE `destinationEntity` is
 * `endPINX`. Received information replaces anything learned from
 * `callTransferComplete`. ECMA-178 §6.3.1, §6.3.2.1, §6.5.1.1,
 * §6.5.5; ECMA-177 §7.2.1.3.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callTransferActive OPERATION ::= {
 *     ARGUMENT CTActiveArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 11
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CTActiveArg>}
 * @implements {OPERATION<CTActiveArg>}
 */
export
const callTransferActive: OPERATION<CTActiveArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CTActiveArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CTActiveArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 11 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
