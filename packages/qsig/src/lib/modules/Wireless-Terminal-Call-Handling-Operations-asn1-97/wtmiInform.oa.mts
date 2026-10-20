/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { InformArg, _decode_InformArg, _encode_InformArg } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/InformArg.ta.mjs";
// export { InformArg, _decode_InformArg, _encode_InformArg } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/InformArg.ta.mjs";


/**
 * @summary wtmiInform
 * @description
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
