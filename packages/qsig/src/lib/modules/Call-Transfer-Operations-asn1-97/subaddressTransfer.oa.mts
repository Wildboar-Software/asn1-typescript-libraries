/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { SubaddressTransferArg, _decode_SubaddressTransferArg, _encode_SubaddressTransferArg } from "../Call-Transfer-Operations-asn1-97/SubaddressTransferArg.ta.mjs";
// export { SubaddressTransferArg, _decode_SubaddressTransferArg, _encode_SubaddressTransferArg } from "../Call-Transfer-Operations-asn1-97/SubaddressTransferArg.ta.mjs";


/**
 * @summary subaddressTransfer
 * @description
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
