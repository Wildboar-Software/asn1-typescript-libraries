/* eslint-disable */
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unidentifiedSubscriber } from "../MAP-Errors/unidentifiedSubscriber.oa.mjs";
import { DeactivateTraceModeArg, _decode_DeactivateTraceModeArg, _encode_DeactivateTraceModeArg } from "../MAP-OM-DataTypes/DeactivateTraceModeArg.ta.mjs";
import { DeactivateTraceModeRes, _decode_DeactivateTraceModeRes, _encode_DeactivateTraceModeRes } from "../MAP-OM-DataTypes/DeactivateTraceModeRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary deactivateTraceMode
 * @description
 *
 * MAP_DEACTIVATE_TRACE_MODE: deactivates subscriber tracing in the VLR or SGSN.
 * Confirmed. Typical path: HLR→VLR or HLR→SGSN. Local opcode 51. Timer class
 * `m` (15 s to 30 s). (3GPP TS 29.002 V19.1.0 clauses 9.1.2.1, 17.1.2,
 * 17.3.2.18 and 17.6.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * deactivateTraceMode  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     DeactivateTraceModeArg
 *     RESULT
 *     DeactivateTraceModeRes
 *     -- optional
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     facilityNotSupported |
 *     unidentifiedSubscriber}
 *     CODE    local:51 }
 * ```
 * 
 * @constant
 * @type {OPERATION<DeactivateTraceModeArg, DeactivateTraceModeRes>}
 * @implements {OPERATION<DeactivateTraceModeArg, DeactivateTraceModeRes>}
 */
export
const deactivateTraceMode: OPERATION<DeactivateTraceModeArg, DeactivateTraceModeRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DeactivateTraceModeArg,
        "&ResultType": _decode_DeactivateTraceModeRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_DeactivateTraceModeArg,
        "&ResultType": _encode_DeactivateTraceModeRes,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, facilityNotSupported, unidentifiedSubscriber, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 51 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
