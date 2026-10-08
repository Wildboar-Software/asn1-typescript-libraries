/* eslint-disable */
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { tracingBufferFull } from "../MAP-Errors/tracingBufferFull.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unidentifiedSubscriber } from "../MAP-Errors/unidentifiedSubscriber.oa.mjs";
import { ActivateTraceModeArg, _decode_ActivateTraceModeArg, _encode_ActivateTraceModeArg } from "../MAP-OM-DataTypes/ActivateTraceModeArg.ta.mjs";
import { ActivateTraceModeRes, _decode_ActivateTraceModeRes, _encode_ActivateTraceModeRes } from "../MAP-OM-DataTypes/ActivateTraceModeRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary activateTraceMode
 * @description
 *
 * MAP_ACTIVATE_TRACE_MODE: HLR activates subscriber tracing in the VLR or SGSN.
 * Confirmed. Typical path: HLR→VLR or HLR→SGSN. Local opcode 50. Timer class
 * `m` (15 s to 30 s). Distinctive error: `tracingBufferFull`. (3GPP TS 29.002
 * V19.1.0 clauses 9.1.1.1, 17.1.2, 17.3.2.18 and 17.6.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * activateTraceMode  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     ActivateTraceModeArg
 *     RESULT
 *     ActivateTraceModeRes
 *     -- optional
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     facilityNotSupported |
 *     unidentifiedSubscriber |
 *     tracingBufferFull}
 *     CODE    local:50 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ActivateTraceModeArg, ActivateTraceModeRes>}
 * @implements {OPERATION<ActivateTraceModeArg, ActivateTraceModeRes>}
 */
export
const activateTraceMode: OPERATION<ActivateTraceModeArg, ActivateTraceModeRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ActivateTraceModeArg,
        "&ResultType": _decode_ActivateTraceModeRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_ActivateTraceModeArg,
        "&ResultType": _encode_ActivateTraceModeRes,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, facilityNotSupported, unidentifiedSubscriber, tracingBufferFull, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 50 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
