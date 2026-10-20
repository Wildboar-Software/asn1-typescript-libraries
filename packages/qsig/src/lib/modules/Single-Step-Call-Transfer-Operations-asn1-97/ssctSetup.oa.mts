/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { SSCTSetupArg, _decode_SSCTSetupArg, _encode_SSCTSetupArg } from "../Single-Step-Call-Transfer-Operations-asn1-97/SSCTSetupArg.ta.mjs";
// export { SSCTSetupArg, _decode_SSCTSetupArg, _encode_SSCTSetupArg } from "../Single-Step-Call-Transfer-Operations-asn1-97/SSCTSetupArg.ta.mjs";


/**
 * @summary ssctSetup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ssctSetup OPERATION ::= {
 *     -- sent from the Rerouting PINX to the Transferred-To PINX
 *     ARGUMENT SSCTSetupArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 100
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<SSCTSetupArg>}
 * @implements {OPERATION<SSCTSetupArg>}
 */
export
const ssctSetup: OPERATION<SSCTSetupArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SSCTSetupArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_SSCTSetupArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 100 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
