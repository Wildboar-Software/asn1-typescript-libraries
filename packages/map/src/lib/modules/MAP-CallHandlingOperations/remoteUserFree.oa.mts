/* eslint-disable */
import { RemoteUserFreeArg, _decode_RemoteUserFreeArg, _encode_RemoteUserFreeArg } from "../MAP-CH-DataTypes/RemoteUserFreeArg.ta.mjs";
import { RemoteUserFreeRes, _decode_RemoteUserFreeRes, _encode_RemoteUserFreeRes } from "../MAP-CH-DataTypes/RemoteUserFreeRes.ta.mjs";
import { absentSubscriber } from "../MAP-Errors/absentSubscriber.oa.mjs";
import { busySubscriber } from "../MAP-Errors/busySubscriber.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { incompatibleTerminal } from "../MAP-Errors/incompatibleTerminal.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary remoteUserFree
 * @description
 *
 * MAP_REMOTE_USER_FREE: HLR reports to the VLR that the B subscriber is now
 * idle and that the A subscriber can be notified. Confirmed. Typical path:
 * HLR→VLR. Local opcode 75. Timer class `ml` (1 min to 10 min). Distinctive
 * errors: `incompatibleTerminal`, `busySubscriber`. (3GPP TS 29.002 V19.1.0
 * clauses 10.12.1, 17.1.2, 17.3.2.37 and 17.6.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * remoteUserFree  OPERATION ::= {    --Timer ml
 *     ARGUMENT
 *     RemoteUserFreeArg
 *     RESULT
 *     RemoteUserFreeRes
 *     ERRORS {
 *     unexpectedDataValue |
 *     dataMissing |
 *     incompatibleTerminal |
 *     absentSubscriber |
 *     systemFailure |
 *     busySubscriber}
 *     CODE    local:75 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RemoteUserFreeArg, RemoteUserFreeRes>}
 * @implements {OPERATION<RemoteUserFreeArg, RemoteUserFreeRes>}
 */
export
const remoteUserFree: OPERATION<RemoteUserFreeArg, RemoteUserFreeRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RemoteUserFreeArg,
        "&ResultType": _decode_RemoteUserFreeRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_RemoteUserFreeArg,
        "&ResultType": _encode_RemoteUserFreeRes,
    },
    "&Errors": [ unexpectedDataValue, dataMissing, incompatibleTerminal, absentSubscriber, systemFailure, busySubscriber, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 75 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
