/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CTCompleteArg, _decode_CTCompleteArg, _encode_CTCompleteArg } from "../Call-Transfer-Operations-asn1-97/CTCompleteArg.ta.mjs";

/**
 * @summary callTransferComplete
 * @description
 *
 * Unconfirmed. Transferring PINX to both the Primary PINX and the
 * Secondary PINX, each on its own call reference, to join the two
 * B-channels. A Gateway PINX also sends it when a public ISDN or
 * non-ISDN performs the transfer and indicates that fact. ROSE
 * local 12. Interpretation APDU:
 * `discardAnyUnrecognisedInvokePdu`. NFE `destinationEntity` is
 * `endPINX`.
 * `endDesignation` names the receiving end. When the secondary call
 * was not Active, the invoke toward the Primary PINX carries
 * `callStatus` `alerting` and the Transferring PINX enters
 * CT-Await-Answer-From-User-C. A restricted number or name is withheld
 * from the transferred user. ECMA-178 §6.3.1, §6.3.2.1, §6.5.1.1,
 * §6.5.2.1, §6.5.3.1, §6.6.1.2, §6.7.1.2; ECMA-177 §7.2.1.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callTransferComplete OPERATION ::= {
 *     ARGUMENT CTCompleteArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 12
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CTCompleteArg>}
 * @implements {OPERATION<CTCompleteArg>}
 */
export
const callTransferComplete: OPERATION<CTCompleteArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CTCompleteArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CTCompleteArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 12 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
