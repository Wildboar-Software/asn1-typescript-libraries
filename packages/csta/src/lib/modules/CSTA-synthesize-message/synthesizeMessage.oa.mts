/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SynthesizeMessageArgument, _decode_SynthesizeMessageArgument, _encode_SynthesizeMessageArgument } from "../CSTA-synthesize-message/SynthesizeMessageArgument.ta.mjs";

import { SynthesizeMessageResult, _decode_SynthesizeMessageResult, _encode_SynthesizeMessageResult } from "../CSTA-synthesize-message/SynthesizeMessageResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary synthesizeMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * synthesizeMessage OPERATION ::= {    ARGUMENT        SynthesizeMessageArgument
 *     RESULT            SynthesizeMessageResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 510 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SynthesizeMessageArgument, SynthesizeMessageResult>}
 * @implements {OPERATION<SynthesizeMessageArgument, SynthesizeMessageResult>}
 */
export
const synthesizeMessage: OPERATION<SynthesizeMessageArgument, SynthesizeMessageResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SynthesizeMessageArgument,
        "&ResultType": _decode_SynthesizeMessageResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SynthesizeMessageArgument,
        "&ResultType": _encode_SynthesizeMessageResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 510 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
