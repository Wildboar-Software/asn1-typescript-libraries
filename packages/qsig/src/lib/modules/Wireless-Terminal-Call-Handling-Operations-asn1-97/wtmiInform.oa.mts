/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { InformArg, _decode_InformArg, _encode_InformArg } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/InformArg.ta.mjs";

/**
 * @summary wtmiInform
 * @description
 *
 * Unconfirmed ANF-WTMI invoke from the Rerouteing PINX to the Visitor PINX, in
 * the SETUP of the new call (ECMA-304 §6.5.1.1, §6.5.4). Local code 56. There
 * is no return result. The Visitor PINX looks up `wtmIdentity` in the VDB for
 * the basic service of the call. When the user is accessible it attempts the
 * call to the PISN access in that entry. When the user is absent from the VDB
 * it clears with cause 41; when the user is not accessible, with cause 18
 * (§6.5.4). Authentication of the WTMI user can be performed on this incoming
 * call (§6.5.4.1 note).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-304/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * wtmiInform OPERATION ::= {
 *     -- Sent from the Rerouteing PINX to the Visitor PINX.
 *     ARGUMENT InformArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 56
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<InformArg>}
 * @implements {OPERATION<InformArg>}
 */
export
const wtmiInform: OPERATION<InformArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_InformArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_InformArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 56 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
