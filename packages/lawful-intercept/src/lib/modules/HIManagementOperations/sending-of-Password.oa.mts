/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { himDomainId } from "../HIManagementOperations/himDomainId.va.mjs";
import { Password_Name, _decode_Password_Name, _encode_Password_Name } from "../HIManagementOperations/Password-Name.ta.mjs";
import { ErrorsHim } from "../HIManagementOperations/ErrorsHim.osa.mjs";

/**
 * @summary sending_of_Password
 * @description
 *
 * Class 2 ROSE operation. Clause D.3 applies only to the ROSE delivery
 * mechanism. The ASN.1 comment says the timer must be set to a value between 3s
 * and 240s. The default is 60s.
 *
 * At data-link establishment the origin sends the origin password. After
 * acceptance the peer returns RO_Result and sends the destination password.
 * After acceptance of that password, each side may send data. An erroneous
 * password releases the data link immediately, and a password-error indication
 * is sent toward the operator.
 *
 * Errors are `ErrorsHim`. The argument is `Password-Name`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.3, clause C.1.2.3.1.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sending-of-Password OPERATION ::=
 * {
 *     ARGUMENT    Password-Name
 *     ERRORS      {ErrorsHim}
 *     CODE        global:{himDomainId sending-of-Password(1) version1(1)}
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<Password_Name>}
 * @implements {OPERATION<Password_Name>}
 */
export
const sending_of_Password: OPERATION<Password_Name> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_Password_Name,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_Password_Name,
        "&ResultType": undefined,
    },
    "&Errors": ErrorsHim /* OBJECT_FIELD_SETTING */,
    "&operationCode": {
        global: _OID.fromParts([
            /* sending-of-Password */ 1,
            /* version1 */ 1,
        ], himDomainId),
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
