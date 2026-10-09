/* eslint-disable */
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { NoteMsPresentForGprsArg, _decode_NoteMsPresentForGprsArg, _encode_NoteMsPresentForGprsArg } from "../MAP-MS-DataTypes/NoteMsPresentForGprsArg.ta.mjs";
import { NoteMsPresentForGprsRes, _decode_NoteMsPresentForGprsRes, _encode_NoteMsPresentForGprsRes } from "../MAP-MS-DataTypes/NoteMsPresentForGprsRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary noteMsPresentForGprs
 * @description
 *
 * MAP_NOTE_MS_PRESENT_FOR_GPRS: HLR informs the GGSN that the MS is present for
 * GPRS again. Typical path: HLR→GGSN. Local opcode 26. Timer class `m` (15 s to
 * 30 s). (3GPP TS 29.002 V19.1.0 clauses 13.3.1, 17.1.2, 17.3.2.35 and 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * noteMsPresentForGprs  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     NoteMsPresentForGprsArg
 *     RESULT
 *     NoteMsPresentForGprsRes
 *     -- optional
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     unknownSubscriber}
 *     CODE    local:26 }
 * ```
 * 
 * @constant
 * @type {OPERATION<NoteMsPresentForGprsArg, NoteMsPresentForGprsRes>}
 * @implements {OPERATION<NoteMsPresentForGprsArg, NoteMsPresentForGprsRes>}
 */
export
const noteMsPresentForGprs: OPERATION<NoteMsPresentForGprsArg, NoteMsPresentForGprsRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_NoteMsPresentForGprsArg,
        "&ResultType": _decode_NoteMsPresentForGprsRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_NoteMsPresentForGprsArg,
        "&ResultType": _encode_NoteMsPresentForGprsRes,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, unknownSubscriber, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 26 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
