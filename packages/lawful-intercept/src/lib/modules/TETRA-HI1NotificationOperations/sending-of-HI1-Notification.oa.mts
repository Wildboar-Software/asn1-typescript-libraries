/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { tETRADomainId } from "../TETRA-HI1NotificationOperations/tETRADomainId.va.mjs";
import { HI1_Operation, _decode_HI1_Operation, _encode_HI1_Operation } from "../TETRA-HI1NotificationOperations/HI1-Operation.ta.mjs";
import { ErrorHI1Notifications } from "../TETRA-HI1NotificationOperations/ErrorHI1Notifications.osa.mjs";

/**
 * @summary sending_of_HI1_Notification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sending-of-HI1-Notification OPERATION ::=
 * {
 *     ARGUMENT    HI1-Operation
 *     ERRORS      {ErrorHI1Notifications}
 *     CODE        global:{tETRADomainId version1(1)}
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<HI1_Operation>}
 * @implements {OPERATION<HI1_Operation>}
 */
export
const sending_of_HI1_Notification: OPERATION<HI1_Operation> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_HI1_Operation,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_HI1_Operation,
        "&ResultType": undefined,
    },
    "&Errors": ErrorHI1Notifications /* OBJECT_FIELD_SETTING */,
    "&operationCode": {
        global: _OID.fromParts([
            /* version1 */ 1,
        ], tETRADomainId),
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
