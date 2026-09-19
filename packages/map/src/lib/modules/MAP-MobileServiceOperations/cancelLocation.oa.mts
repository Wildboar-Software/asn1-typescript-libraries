/* eslint-disable */
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { CancelLocationArg, _decode_CancelLocationArg, _encode_CancelLocationArg } from "../MAP-MS-DataTypes/CancelLocationArg.ta.mjs";
import { CancelLocationRes, _decode_CancelLocationRes, _encode_CancelLocationRes } from "../MAP-MS-DataTypes/CancelLocationRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary cancelLocation
 * @description
 *
 * MAP_CANCEL_LOCATION: HLR asks the VLR (or SGSN) to delete a subscriber
 * record, typically when the MS moves VLR/SGSN area or on operator enforcement.
 * In EPS, used HSS↔IWF and IWF↔IWF to delete the MME/SGSN record or to release
 * bearers without deleting it; may also request an immediate re-attach.
 * Confirmed. Typical path: HLR→VLR or HLR→SGSN. Local opcode 3. Timer class `m`
 * (15 s to 30 s). (3GPP TS 29.002 V19.1.0 clauses 8.1.3.1, 17.1.2, 17.3.2.3 and
 * 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelLocation  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     CancelLocationArg
 *     RESULT
 *     CancelLocationRes
 *     -- optional
 *     ERRORS {
 *     dataMissing |
 *     unexpectedDataValue}
 *     CODE    local:3 }
 * ```
 * 
 * @constant
 * @type {OPERATION<CancelLocationArg, CancelLocationRes>}
 * @implements {OPERATION<CancelLocationArg, CancelLocationRes>}
 */
export
const cancelLocation: OPERATION<CancelLocationArg, CancelLocationRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CancelLocationArg,
        "&ResultType": _decode_CancelLocationRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_CancelLocationArg,
        "&ResultType": _encode_CancelLocationRes,
    },
    "&Errors": [ dataMissing, unexpectedDataValue, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 3 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
