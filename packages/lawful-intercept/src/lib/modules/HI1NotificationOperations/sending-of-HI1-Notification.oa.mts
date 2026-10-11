/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { HI1_Operation, _decode_HI1_Operation, _encode_HI1_Operation } from "../HI1NotificationOperations/HI1-Operation.ta.mjs";
import { ErrorHI1Notifications } from "../HI1NotificationOperations/ErrorHI1Notifications.osa.mjs";
import { hi1NotificationOperationsId } from "../HI1NotificationOperations/hi1NotificationOperationsId.va.mjs";

/**
 * @summary sending_of_HI1_Notification
 * @description
 *
 * Class 2 operation. The timer shall be set to a value between 3 s and 240 s. The timer default value is 60 s.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sending-of-HI1-Notification OPERATION ::=
 * {
 *     ARGUMENT    HI1-Operation
 *     ERRORS      {ErrorHI1Notifications}
 *     CODE        global:{hi1NotificationOperationsId version1(1)}
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
    },
    encoderFor: {
        "&ArgumentType": _encode_HI1_Operation,
    },
    "&Errors": ErrorHI1Notifications /* OBJECT_FIELD_SETTING */,
    "&operationCode": {
        global: _OID.fromParts([ /* version1 */ 1 ], hi1NotificationOperationsId),
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
