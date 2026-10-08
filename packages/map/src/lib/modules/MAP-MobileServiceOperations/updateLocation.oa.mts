/* eslint-disable */
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { roamingNotAllowed } from "../MAP-Errors/roamingNotAllowed.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { UpdateLocationArg, _decode_UpdateLocationArg, _encode_UpdateLocationArg } from "../MAP-MS-DataTypes/UpdateLocationArg.ta.mjs";
import { UpdateLocationRes, _decode_UpdateLocationRes, _encode_UpdateLocationRes } from "../MAP-MS-DataTypes/UpdateLocationRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary updateLocation
 * @description
 *
 * MAP_UPDATE_LOCATION: the VLR updates location information stored in the HLR.
 * Also used by an IWF that registers an MME as MSC for MT-SMS. Confirmed.
 * Typical path: VLR→HLR. Local opcode 2. Timer class `m` (15 s to 30 s).
 * Distinctive error: `roamingNotAllowed`. (3GPP TS 29.002 V19.1.0 clauses
 * 8.1.2.1, 17.1.2, 17.3.2.2 and 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * updateLocation  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     UpdateLocationArg
 *     RESULT
 *     UpdateLocationRes
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     unknownSubscriber |
 *     roamingNotAllowed}
 *     CODE    local:2 }
 * ```
 * 
 * @constant
 * @type {OPERATION<UpdateLocationArg, UpdateLocationRes>}
 * @implements {OPERATION<UpdateLocationArg, UpdateLocationRes>}
 */
export
const updateLocation: OPERATION<UpdateLocationArg, UpdateLocationRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_UpdateLocationArg,
        "&ResultType": _decode_UpdateLocationRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_UpdateLocationArg,
        "&ResultType": _encode_UpdateLocationRes,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, unknownSubscriber, roamingNotAllowed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 2 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
