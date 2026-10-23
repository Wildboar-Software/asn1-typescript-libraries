/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { MCMailboxFullArg, _decode_MCMailboxFullArg, _encode_MCMailboxFullArg } from "../SS-MCM-Operations-asn1-97/MCMailboxFullArg.ta.mjs";

/**
 * @summary mCMailboxFull
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mCMailboxFull OPERATION ::= {
 *     ARGUMENT MCMailboxFullArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 118
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MCMailboxFullArg>}
 * @implements {OPERATION<MCMailboxFullArg>}
 */
export
const mCMailboxFull: OPERATION<MCMailboxFullArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MCMailboxFullArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_MCMailboxFullArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 118 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
