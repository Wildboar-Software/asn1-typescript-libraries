/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { EchoRequestArg, _decode_EchoRequestArg, _encode_EchoRequestArg } from "../AIN-Operations/EchoRequestArg.ta.mjs";
// export { EchoRequestArg, _decode_EchoRequestArg, _encode_EchoRequestArg } from "../AIN-Operations/EchoRequestArg.ta.mjs";
import { _decode_echoRequest_ResultType, _encode_echoRequest_ResultType, echoRequest_ResultType } from "../AIN-Operations/echoRequest-ResultType.ta.mjs";
// export { echoRequest_ResultType, _decode_echoRequest_ResultType, _encode_echoRequest_ResultType } from "../AIN-Operations/echoRequest-ResultType.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary echoRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * echoRequest OPERATION ::= {
 *         ARGUMENT
 *         EchoRequestArg
 *         RESULT SEQUENCE{
 *             failureCause                  FailureCause OPTIONAL,
 *             extensionParameter            [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 *         ERRORS{ applicationError
 *         }
 *         CODE private: 26882
 *         --Family Name is “Network Management”
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<EchoRequestArg, echoRequest_ResultType>}
 * @implements {OPERATION<EchoRequestArg, echoRequest_ResultType>}
 */
export
const echoRequest: OPERATION<EchoRequestArg, echoRequest_ResultType> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EchoRequestArg,
        "&ResultType": _decode_echoRequest_ResultType,
    },
    encoderFor: {
        "&ArgumentType": _encode_EchoRequestArg,
        "&ResultType": _encode_echoRequest_ResultType,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 26882 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
