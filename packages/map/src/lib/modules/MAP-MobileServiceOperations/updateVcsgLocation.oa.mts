/* eslint-disable */
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { UpdateVcsgLocationArg, _decode_UpdateVcsgLocationArg, _encode_UpdateVcsgLocationArg } from "../MAP-MS-DataTypes/UpdateVcsgLocationArg.ta.mjs";
import { UpdateVcsgLocationRes, _decode_UpdateVcsgLocationRes, _encode_UpdateVcsgLocationRes } from "../MAP-MS-DataTypes/UpdateVcsgLocationRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary updateVcsgLocation
 * @description
 *
 * MAP_UPDATE_VCSG_LOCATION: VLR or SGSN registers the MS in the CSS when the
 * VPLMN supports Autonomous CSG Roaming, the HPLMN has enabled it, the MS
 * requested attach or LA/RA update to a CSG cell, and the VLR/SGSN has not yet
 * registered the MS in the CSS. Confirmed. Typical path: VLR→CSS or SGSN→CSS.
 * Local opcode 53. Timer class `m` (15 s to 30 s). (3GPP TS 29.002 V19.1.0
 * clauses 8.1.9.1, 17.1.2, 17.3.2.52 and 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * updateVcsgLocation  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     UpdateVcsgLocationArg
 *     RESULT
 *     UpdateVcsgLocationRes
 *     ERRORS {
 *     systemFailure |
 *     unexpectedDataValue |
 *     unknownSubscriber}
 *     CODE    local:53 }
 * ```
 * 
 * @constant
 * @type {OPERATION<UpdateVcsgLocationArg, UpdateVcsgLocationRes>}
 * @implements {OPERATION<UpdateVcsgLocationArg, UpdateVcsgLocationRes>}
 */
export
const updateVcsgLocation: OPERATION<UpdateVcsgLocationArg, UpdateVcsgLocationRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_UpdateVcsgLocationArg,
        "&ResultType": _decode_UpdateVcsgLocationRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_UpdateVcsgLocationArg,
        "&ResultType": _encode_UpdateVcsgLocationRes,
    },
    "&Errors": [ systemFailure, unexpectedDataValue, unknownSubscriber, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 53 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
