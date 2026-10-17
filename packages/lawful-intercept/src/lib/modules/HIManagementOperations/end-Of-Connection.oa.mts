/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { himDomainId } from "../HIManagementOperations/himDomainId.va.mjs";
import { other_failure_causes } from "../HIManagementOperations/other-failure-causes.oa.mjs";

/**
 * @summary end_Of_Connection
 * @description
 *
 * Class 2 ROSE operation. Clause D.3 applies only to ROSE. The ASN.1 comment
 * says the timer must be set to a value between 3 s and 240 s. The default is
 * 60s. The only listed error is `other-failure-causes`. There is no argument.
 *
 * The LI application decides when the connection ends. Clause C.1.2.3.2 gives
 * examples: all data have been sent, in which case the link may be released
 * only after a network-dependent idle period; the link was opened for an
 * intercepted call and that call, with its data, has been released; security; a
 * change of password or of the LEMF or IIF address. The peer returns RO_Result,
 * and the application then releases the data link. If no result arrives after a
 * network-dependent period, or a reject or error arrives, the application
 * releases the link and sends an error toward the operator or administrator.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.3, clause C.1.2.3.2.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * end-Of-Connection OPERATION ::=
 * {
 *     ERRORS      {other-failure-causes}
 *     CODE        global:{himDomainId end-of-connection(3) version1(1)}
 * }
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const end_Of_Connection: OPERATION = {
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
            /* end-of-connection */ 3,
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
