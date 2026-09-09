/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { ChangeSysStatFilterArg, _decode_ChangeSysStatFilterArg, _encode_ChangeSysStatFilterArg } from "../CSTA-change-system-status-filter/ChangeSysStatFilterArg.ta.mjs";

import { ChangeSysStatFilterRes, _decode_ChangeSysStatFilterRes, _encode_ChangeSysStatFilterRes } from "../CSTA-change-system-status-filter/ChangeSysStatFilterRes.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary changeSysStatFilter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * changeSysStatFilter OPERATION ::= {     ARGUMENT         ChangeSysStatFilterArg
 *     RESULT             ChangeSysStatFilterRes
 *     ERRORS             {universalFailure }
 *     CODE             local: 206 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ChangeSysStatFilterArg, ChangeSysStatFilterRes>}
 * @implements {OPERATION<ChangeSysStatFilterArg, ChangeSysStatFilterRes>}
 */
export
const changeSysStatFilter: OPERATION<ChangeSysStatFilterArg, ChangeSysStatFilterRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ChangeSysStatFilterArg,
        "&ResultType": _decode_ChangeSysStatFilterRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_ChangeSysStatFilterArg,
        "&ResultType": _encode_ChangeSysStatFilterRes,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 206 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
