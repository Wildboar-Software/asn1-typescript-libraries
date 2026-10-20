/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { SSCTDigitInfoArg, _decode_SSCTDigitInfoArg, _encode_SSCTDigitInfoArg } from "../Single-Step-Call-Transfer-Operations-asn1-97/SSCTDigitInfoArg.ta.mjs";

/**
 * @summary ssctDigitInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ssctDigitInfo OPERATION ::= {
 *     -- sent from the Transferred PINX to the Rerouting PINX
 *     ARGUMENT SSCTDigitInfoArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 102
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<SSCTDigitInfoArg>}
 * @implements {OPERATION<SSCTDigitInfoArg>}
 */
export
const ssctDigitInfo: OPERATION<SSCTDigitInfoArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SSCTDigitInfoArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_SSCTDigitInfoArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 102 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
