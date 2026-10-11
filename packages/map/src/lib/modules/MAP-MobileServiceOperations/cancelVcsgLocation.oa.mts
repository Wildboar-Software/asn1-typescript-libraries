/* eslint-disable */
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { CancelVcsgLocationArg, _decode_CancelVcsgLocationArg, _encode_CancelVcsgLocationArg } from "../MAP-MS-DataTypes/CancelVcsgLocationArg.ta.mjs";
import { CancelVcsgLocationRes, _decode_CancelVcsgLocationRes, _encode_CancelVcsgLocationRes } from "../MAP-MS-DataTypes/CancelVcsgLocationRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary cancelVcsgLocation
 * @description
 *
 * MAP_CANCEL_VCSG_LOCATION: CSS asks the VLR or SGSN to delete a roaming user
 * record (CSG subscription data and CSS number). Invoked on removal of CSG data
 * or MS registration in the CSS, including registration without CSG data.
 * Confirmed. Typical path: CSS→VLR or CSS→SGSN. Local opcode 36. Timer class
 * `m` (15 s to 30 s). (3GPP TS 29.002 V19.1.0 clauses 8.1.10.1, 17.1.2,
 * 17.3.2.53 and 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelVcsgLocation  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     CancelVcsgLocationArg
 *     RESULT
 *     CancelVcsgLocationRes
 *     -- optional
 *     ERRORS {
 *     dataMissing |
 *     unexpectedDataValue}
 *     CODE    local:36 }
 * ```
 * 
 * @constant
 * @type {OPERATION<CancelVcsgLocationArg, CancelVcsgLocationRes>}
 * @implements {OPERATION<CancelVcsgLocationArg, CancelVcsgLocationRes>}
 */
export
const cancelVcsgLocation: OPERATION<CancelVcsgLocationArg, CancelVcsgLocationRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CancelVcsgLocationArg,
        "&ResultType": _decode_CancelVcsgLocationRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_CancelVcsgLocationArg,
        "&ResultType": _encode_CancelVcsgLocationRes,
    },
    "&Errors": [ dataMissing, unexpectedDataValue, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 36 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
