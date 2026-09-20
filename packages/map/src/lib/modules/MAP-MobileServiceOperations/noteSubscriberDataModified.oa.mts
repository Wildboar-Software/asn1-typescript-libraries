/* eslint-disable */
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { NoteSubscriberDataModifiedArg, _decode_NoteSubscriberDataModifiedArg, _encode_NoteSubscriberDataModifiedArg } from "../MAP-MS-DataTypes/NoteSubscriberDataModifiedArg.ta.mjs";
import { NoteSubscriberDataModifiedRes, _decode_NoteSubscriberDataModifiedRes, _encode_NoteSubscriberDataModifiedRes } from "../MAP-MS-DataTypes/NoteSubscriberDataModifiedRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary noteSubscriberDataModified
 * @description
 *
 * MAP_NOTE_SUBSCRIBER_DATA_MODIFIED: HLR informs the gsmSCF that subscriber
 * data have been modified (IM-SSF may take the gsmSCF role in an IM CN). Also
 * used to inform a service-related entity (e.g. IP-SM-GW) that the UE has
 * become reachable. Typical path: HLR→gsmSCF. Local opcode 5. Timer class `m`
 * (15 s to 30 s). (3GPP TS 29.002 V19.1.0 clauses 8.11.5.1, 17.1.2, 17.3.2.48
 * and 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * noteSubscriberDataModified  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     NoteSubscriberDataModifiedArg
 *     RESULT
 *     NoteSubscriberDataModifiedRes
 *     -- optional
 *     ERRORS {
 *     dataMissing |
 *     unexpectedDataValue |
 *     unknownSubscriber}
 *     CODE    local:5 }
 * ```
 * 
 * @constant
 * @type {OPERATION<NoteSubscriberDataModifiedArg, NoteSubscriberDataModifiedRes>}
 * @implements {OPERATION<NoteSubscriberDataModifiedArg, NoteSubscriberDataModifiedRes>}
 */
export
const noteSubscriberDataModified: OPERATION<NoteSubscriberDataModifiedArg, NoteSubscriberDataModifiedRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_NoteSubscriberDataModifiedArg,
        "&ResultType": _decode_NoteSubscriberDataModifiedRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_NoteSubscriberDataModifiedArg,
        "&ResultType": _encode_NoteSubscriberDataModifiedRes,
    },
    "&Errors": [ dataMissing, unexpectedDataValue, unknownSubscriber, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 5 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
