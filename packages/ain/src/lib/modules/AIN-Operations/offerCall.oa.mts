/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { OfferCallArg, _decode_OfferCallArg, _encode_OfferCallArg } from "../AIN-Operations/OfferCallArg.ta.mjs";
// export { OfferCallArg, _decode_OfferCallArg, _encode_OfferCallArg } from "../AIN-Operations/OfferCallArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary offerCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * offerCall OPERATION ::= {
 *         ARGUMENT
 *         OfferCallArg
 *         ERRORS{ applicationError
 *         }
 *         CODE private: 25860
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<OfferCallArg>}
 * @implements {OPERATION<OfferCallArg>}
 */
export
const offerCall: OPERATION<OfferCallArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_OfferCallArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_OfferCallArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25860 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
