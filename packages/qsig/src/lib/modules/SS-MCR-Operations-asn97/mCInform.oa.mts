/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { MCInformArg, _decode_MCInformArg, _encode_MCInformArg } from "../SS-MCR-Operations-asn97/MCInformArg.ta.mjs";

/**
 * @summary mCInform
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mCInform OPERATION ::= {
 *     ARGUMENT MCInformArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     ERRORS {
 *         userNotSubscribed
 *         | basicServiceNotProvided
 *         | supplementaryServiceInteractionNotAllowed
 *         | invalidDestinationNumber
 *         | mCExecutionNotAllowed
 *         | mCDestUserBusy
 *         | unspecified
 *     }
 *     CODE local: 113
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MCInformArg>}
 * @implements {OPERATION<MCInformArg>}
 */
export
const mCInform: OPERATION<MCInformArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MCInformArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_MCInformArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
