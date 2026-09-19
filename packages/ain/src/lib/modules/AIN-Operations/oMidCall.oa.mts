/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { OMidCallArg, _decode_OMidCallArg, _encode_OMidCallArg } from "../AIN-Operations/OMidCallArg.ta.mjs";
// export { OMidCallArg, _decode_OMidCallArg, _encode_OMidCallArg } from "../AIN-Operations/OMidCallArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary oMidCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oMidCall OPERATION ::= {
 *         ARGUMENT
 *         OMidCallArg
 *         ERRORS{ applicationError,
 *         failureReport
 *         }
 *         --LINKED{
 *             --analyzeRoute,
 *             --collectInformation,
 *             --connectToResource,
 *             --disconnect,
 *             --disconnectLeg,
 *             --mergeCall,
 *             --moveLeg,
 *             --originateCall,
 *             --splitLeg
 *             -- }
 *         CODE private: 25615
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<OMidCallArg>}
 * @implements {OPERATION<OMidCallArg>}
 */
export
const oMidCall: OPERATION<OMidCallArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_OMidCallArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_OMidCallArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25615 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
