/* eslint-disable */
import { roamingNotAllowed } from "../MAP-Errors/roamingNotAllowed.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { UpdateGprsLocationArg, _decode_UpdateGprsLocationArg, _encode_UpdateGprsLocationArg } from "../MAP-MS-DataTypes/UpdateGprsLocationArg.ta.mjs";
import { UpdateGprsLocationRes, _decode_UpdateGprsLocationRes, _encode_UpdateGprsLocationRes } from "../MAP-MS-DataTypes/UpdateGprsLocationRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary updateGprsLocation
 * @description
 *
 * MAP_UPDATE_GPRS_LOCATION: the SGSN updates GPRS location information stored
 * in the HLR. In EPS, used IWF↔IWF and IWF↔HSS. Confirmed. Typical path:
 * SGSN→HLR. Local opcode 23. Timer class `m` (15 s to 30 s). Distinctive error:
 * `roamingNotAllowed`. (3GPP TS 29.002 V19.1.0 clauses 8.1.7.1, 17.1.2,
 * 17.3.2.32 and 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * updateGprsLocation  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     UpdateGprsLocationArg
 *     RESULT
 *     UpdateGprsLocationRes
 *     ERRORS {
 *     systemFailure |
 *     unexpectedDataValue |
 *     unknownSubscriber |
 *     roamingNotAllowed}
 *     CODE    local:23 }
 * ```
 * 
 * @constant
 * @type {OPERATION<UpdateGprsLocationArg, UpdateGprsLocationRes>}
 * @implements {OPERATION<UpdateGprsLocationArg, UpdateGprsLocationRes>}
 */
export
const updateGprsLocation: OPERATION<UpdateGprsLocationArg, UpdateGprsLocationRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_UpdateGprsLocationArg,
        "&ResultType": _decode_UpdateGprsLocationRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_UpdateGprsLocationArg,
        "&ResultType": _encode_UpdateGprsLocationRes,
    },
    "&Errors": [ systemFailure, unexpectedDataValue, unknownSubscriber, roamingNotAllowed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 23 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
