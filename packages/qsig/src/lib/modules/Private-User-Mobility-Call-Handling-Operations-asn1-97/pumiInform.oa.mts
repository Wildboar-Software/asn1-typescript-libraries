/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { InformArg, _decode_InformArg, _encode_InformArg } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/InformArg.ta.mjs";

/**
 * @summary pumiInform
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pumiInform OPERATION ::= {
 *     -- Sent from the Rerouteing PINX to the Visitor PINX.
 *     ARGUMENT InformArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 95
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<InformArg>}
 * @implements {OPERATION<InformArg>}
 */
export
const pumiInform: OPERATION<InformArg> = {
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
    "&operationCode": { local: 95 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
