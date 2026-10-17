/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { himDomainId } from "../TETRA-HIManagementOperations/himDomainId.va.mjs";
import { other_failure_causes } from "../TETRA-HIManagementOperations/other-failure-causes.oa.mjs";

/**
 * @summary tETRA_data_Link_Test
 * @description
 *
 * TETRA data-link test. Clause D.10.1 applies only to ROSE. Class 2. The ASN.1
 * comment says the timer must be set to a value between 3s and 240s. The
 * default is 60s. The only listed error is `other-failure-causes`.
 *
 * Clause C.1.2.3.1 describes this procedure for the operation it names
 * `data-Link-Test`. This module's operation is `tETRA-data-Link-Test`.
 *
 * Optional. When no data have been exchanged toward an address for a
 * network-dependent period, which may vary from 1 minute to 30 minutes, the LI
 * application sends this operation. The peer returns RO_Result, and the test is
 * then valid. If no result is received, or a reject or error is received, the
 * application releases the data link and sends an error toward the operator.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.1, clause C.1.2.3.1.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tETRA-data-Link-Test OPERATION ::=
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
const tETRA_data_Link_Test: OPERATION = {
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
        global: _OID.fromParts([
            /* data-link-test */ 2,
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
