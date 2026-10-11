/* eslint-disable */
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { RestoreDataArg, _decode_RestoreDataArg, _encode_RestoreDataArg } from "../MAP-MS-DataTypes/RestoreDataArg.ta.mjs";
import { RestoreDataRes, _decode_RestoreDataRes, _encode_RestoreDataRes } from "../MAP-MS-DataTypes/RestoreDataRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary restoreData
 * @description
 *
 * MAP_RESTORE_DATA: VLR, on MAP_PROVIDE_ROAMING_NUMBER or
 * MAP-MT-FORWARD-SHORT-MESSAGE for an unknown IMSI (or known IMSI with
 * "Subscriber Data Confirmed by HLR" not confirmed), updates LMSI in the HLR if
 * provided and requests all IMSI-record data. HLR returns `systemFailure` if
 * the subscriber is not registered on the VLR. Confirmed. Typical path:
 * VLR→HLR. Local opcode 57. Timer class `m` (15 s to 30 s). (3GPP TS 29.002
 * V19.1.0 clauses 8.10.3.1, 17.1.2, 17.3.2.2 and 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * restoreData  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     RestoreDataArg
 *     RESULT
 *     RestoreDataRes
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     unknownSubscriber}
 *     CODE    local:57 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RestoreDataArg, RestoreDataRes>}
 * @implements {OPERATION<RestoreDataArg, RestoreDataRes>}
 */
export
const restoreData: OPERATION<RestoreDataArg, RestoreDataRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RestoreDataArg,
        "&ResultType": _decode_RestoreDataRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_RestoreDataArg,
        "&ResultType": _encode_RestoreDataRes,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, unknownSubscriber, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 57 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
