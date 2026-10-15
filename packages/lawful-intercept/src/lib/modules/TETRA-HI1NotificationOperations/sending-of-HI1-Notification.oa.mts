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
 * TETRA form of the HI1 notification operation. These are HI1 notifications
 * sent toward the LEMF across HI2. They are not the LEA-to-operator activation
 * request of clause 7.1. Clause 7.2 requires a notification after activation,
 * after deactivation, after modification of an active interception, and for
 * certain exceptional situations. Clause 5.1 allows some HI1 information, for
 * example fault reporting, to be delivered with the HI2 mechanism.
 *
 * The operation applies only to ROSE. With FTP, `HI1-Operation` is sent
 * directly. Table C.2.1 file type "1" may carry IRI and, as an option, HI1
 * notifications. Clause D.10.2 is the TETRA statement of the same
 * ROSE-versus-FTP rule. The argument's `Notification` includes `location`,
 * which the common notification does not.
 *
 * Class 2. The timer shall be set to a value between 3s and 240s. The default
 * is 60s. Set the timer on the equipment that waits for the returned message.
 * The NWO/AP/SvP and the LEA agree the value, depending on their equipment. On
 * timeout the ASE_HI tells the LI application that no answer was received. The
 * application sends the data again or informs the administrator.
 *
 * The operation code is `version1(1)` under `tETRADomainId`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.2, clause D.0, clause C.1.2.1,
 * clause C.2, clause 7.2, clause 7.1, clause 5.1.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
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
