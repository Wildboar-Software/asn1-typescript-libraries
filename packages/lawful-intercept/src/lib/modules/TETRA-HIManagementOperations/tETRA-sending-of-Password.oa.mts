/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { himDomainId } from "../TETRA-HIManagementOperations/himDomainId.va.mjs";
import { TETRA_Password_Name, _decode_TETRA_Password_Name, _encode_TETRA_Password_Name } from "../TETRA-HIManagementOperations/TETRA-Password-Name.ta.mjs";
import { ErrorsHim } from "../TETRA-HIManagementOperations/ErrorsHim.osa.mjs";

/**
 * @summary tETRA_sending_of_Password
 * @description
 *
 * TETRA HI-management password operation. Clause D.10.1 applies only to ROSE.
 * Class 2. The ASN.1 comment says the timer must be set to a value between 3s
 * and 240s. The default is 60s.
 *
 * Clause C.1.2.3.1 describes the exchange for the operation it names
 * `sending-of-Password`: origin password, then destination password, then data;
 * an erroneous password releases the link and a password-error indication is
 * sent to the operator. This module's operation is `tETRA-sending-of-Password`.
 * The argument `TETRA-Password-Name` has no `domainID`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.1, clause C.1.2.3.1.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tETRA-sending-of-Password OPERATION ::=
 * {
 *     ARGUMENT    TETRA-Password-Name
 *     ERRORS      {ErrorsHim}
 *     CODE        global:{himDomainId sending-of-Password(1) version1(1)}
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<TETRA_Password_Name>}
 * @implements {OPERATION<TETRA_Password_Name>}
 */
export
const tETRA_sending_of_Password: OPERATION<TETRA_Password_Name> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_TETRA_Password_Name,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_TETRA_Password_Name,
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
