/* eslint-disable */
import { SetReportingStateArg, _decode_SetReportingStateArg, _encode_SetReportingStateArg } from "../MAP-CH-DataTypes/SetReportingStateArg.ta.mjs";
import { SetReportingStateRes, _decode_SetReportingStateRes, _encode_SetReportingStateRes } from "../MAP-CH-DataTypes/SetReportingStateRes.ta.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";
import { resourceLimitation } from "../MAP-Errors/resourceLimitation.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unidentifiedSubscriber } from "../MAP-Errors/unidentifiedSubscriber.oa.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary setReportingState
 * @description
 *
 * MAP_SET_REPORTING_STATE: HLR sets the reporting state in the VLR for a
 * requested service. Confirmed. Typical path: HLR→VLR. Local opcode 73. Timer
 * class `m` (15 s to 30 s). (3GPP TS 29.002 V19.1.0 clauses 10.10.1, 17.1.2,
 * 17.3.2.37 and 17.6.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setReportingState  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     SetReportingStateArg
 *     RESULT
 *     SetReportingStateRes
 *     -- optional
 *     ERRORS {
 *     systemFailure |
 *     unidentifiedSubscriber |
 *     unexpectedDataValue |
 *     dataMissing |
 *     resourceLimitation |
 *     facilityNotSupported}
 *     CODE    local:73 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetReportingStateArg, SetReportingStateRes>}
 * @implements {OPERATION<SetReportingStateArg, SetReportingStateRes>}
 */
export
const setReportingState: OPERATION<SetReportingStateArg, SetReportingStateRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetReportingStateArg,
        "&ResultType": _decode_SetReportingStateRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetReportingStateArg,
        "&ResultType": _encode_SetReportingStateRes,
    },
    "&Errors": [ systemFailure, unidentifiedSubscriber, unexpectedDataValue, dataMissing, resourceLimitation, facilityNotSupported, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 73 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
