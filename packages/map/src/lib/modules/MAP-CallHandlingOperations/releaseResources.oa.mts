/* eslint-disable */
import { ReleaseResourcesArg, _decode_ReleaseResourcesArg, _encode_ReleaseResourcesArg } from "../MAP-CH-DataTypes/ReleaseResourcesArg.ta.mjs";
import { ReleaseResourcesRes, _decode_ReleaseResourcesRes, _encode_ReleaseResourcesRes } from "../MAP-CH-DataTypes/ReleaseResourcesRes.ta.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary releaseResources
 * @description
 *
 * MAP_RELEASE_RESOURCES: GMSC asks the terminating VMSC to release resources
 * associated with the specified MSRN. Confirmed. Typical path: GMSC→VMSC. Local
 * opcode 20. Timer class `m` (15 s to 30 s). (3GPP TS 29.002 V19.1.0 clauses
 * 10.15.1, 17.1.2, 17.3.2.50 and 17.6.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * releaseResources  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     ReleaseResourcesArg
 *     RESULT
 *     ReleaseResourcesRes
 *     -- optional
 *     ERRORS {
 *     unexpectedDataValue |
 *     systemFailure }
 *     CODE    local:20 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ReleaseResourcesArg, ReleaseResourcesRes>}
 * @implements {OPERATION<ReleaseResourcesArg, ReleaseResourcesRes>}
 */
export
const releaseResources: OPERATION<ReleaseResourcesArg, ReleaseResourcesRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReleaseResourcesArg,
        "&ResultType": _decode_ReleaseResourcesRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReleaseResourcesArg,
        "&ResultType": _encode_ReleaseResourcesRes,
    },
    "&Errors": [ unexpectedDataValue, systemFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 20 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
