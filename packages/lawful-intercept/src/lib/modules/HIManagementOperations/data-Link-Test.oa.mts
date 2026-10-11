/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { other_failure_causes } from "../HIManagementOperations/other-failure-causes.oa.mjs";
import { himDomainId } from "../HIManagementOperations/himDomainId.va.mjs";

/**
 * @summary data_Link_Test
 * @description
 *
 * Class 2 operation. The timer must be set to a value between 3 s and 240 s. The timer default value is 60 s.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * data-Link-Test OPERATION ::=
 * {
 *     ERRORS      {other-failure-causes}
 *     CODE        global:{himDomainId data-link-test(2) version1(1)}
 * }
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const data_Link_Test: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": undefined,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": undefined,
        "&ResultType": undefined,
    },
    "&Errors": [ other_failure_causes ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": {
        global: _OID.fromParts([ /* data-link-test */ 2, /* version1 */ 1 ], himDomainId),
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
