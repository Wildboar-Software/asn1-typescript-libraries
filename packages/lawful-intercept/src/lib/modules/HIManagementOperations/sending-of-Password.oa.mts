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
