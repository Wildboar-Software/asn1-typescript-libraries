/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CTUpdateArg, _decode_CTUpdateArg, _encode_CTUpdateArg } from "../Call-Transfer-Operations-asn1-97/CTUpdateArg.ta.mjs";

/**
 * @summary callTransferUpdate
 * @description
 *
 * Unconfirmed. Either transferred PINX may send the other user's
 * number, name, and progress indicators. Sent on the call reference of
 * `callTransferComplete`, or inside the SETUP, CONNECT, or ALERTING of
 * rerouteing. While the Transferring PINX remains in
 * CT-Await-Answer-From-User-C it relays the invoke with the same
 * argument. Later information replaces an earlier
 * `callTransferComplete`. A restricted number or name is withheld from
 * the local user. ROSE local 13. Interpretation APDU:
 * `discardAnyUnrecognisedInvokePdu`. NFE `destinationEntity` is
 * `endPINX`. ECMA-178 §6.3.1, §6.3.2.1, §6.5.1.1, §6.5.2.1, §6.5.2.3,
 * §6.5.3.1, §6.5.3.3, §6.5.5; ECMA-177 §7.2.1.6.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callTransferUpdate OPERATION ::= {
 *     ARGUMENT CTUpdateArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 13
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CTUpdateArg>}
 * @implements {OPERATION<CTUpdateArg>}
 */
export
const callTransferUpdate: OPERATION<CTUpdateArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CTUpdateArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CTUpdateArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 13 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
