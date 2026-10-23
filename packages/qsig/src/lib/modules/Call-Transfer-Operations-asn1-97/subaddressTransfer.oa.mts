/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { SubaddressTransferArg, _decode_SubaddressTransferArg, _encode_SubaddressTransferArg } from "../Call-Transfer-Operations-asn1-97/SubaddressTransferArg.ta.mjs";

/**
 * @summary subaddressTransfer
 * @description
 *
 * Unconfirmed. Carries one transferred user's subaddress to the other
 * after transfer. A Primary or Secondary PINX sends it when the local
 * terminal supplies a subaddress; the receiver may deliver it to the
 * local user. In CT-Await-Answer-From-User-C the Transferring PINX
 * relays the invoke with the same argument. A Gateway PINX maps a
 * subaddress to or from a public ISDN or non-ISDN in this invoke.
 * ROSE local 14. Interpretation APDU:
 * `discardAnyUnrecognisedInvokePdu`. NFE `destinationEntity` is
 * `endPINX`. ECMA-178 §6.3.1, §6.3.2.1, §6.5.1.1, §6.5.5, §6.6.1,
 * §6.7.1; ECMA-177 §6.2.2.2, §7.2.1.5.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * subaddressTransfer OPERATION ::= {
 *     ARGUMENT SubaddressTransferArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 14
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<SubaddressTransferArg>}
 * @implements {OPERATION<SubaddressTransferArg>}
 */
export
const subaddressTransfer: OPERATION<SubaddressTransferArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SubaddressTransferArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_SubaddressTransferArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 14 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
