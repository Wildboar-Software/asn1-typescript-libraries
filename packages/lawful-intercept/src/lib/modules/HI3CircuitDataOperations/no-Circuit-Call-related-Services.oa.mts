/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { hi3CircuitLIId } from "../HI3CircuitDataOperations/hi3CircuitLIId.va.mjs";
import { Content_Report, _decode_Content_Report, _encode_Content_Report } from "../HI3CircuitDataOperations/Content-Report.ta.mjs";
import { OperationErrors } from "../HI2Operations/OperationErrors.osa.mjs";

/**
 * @summary no_Circuit_Call_related_Services
 * @description
 *
 * ROSE operation for user data not associated with a circuit call. Clause
 * C.1.2.1 gives SMS as the example. The operation applies only to ROSE. With
 * FTP, `Content-Report` is sent directly. Exceptionally, GSM SMS may be passed
 * via HI2.
 *
 * Class 2. The timer must be set to a value between 10s and 120s. The default
 * is 60s. The ASN.1 comment does not attach the HI-management note that is
 * attached to `circuit-Call-related-Services`. Errors are `OperationErrors`,
 * imported from HI2Operations.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.6, clause D.0, clause C.1.2.1,
 * clause A.4.2.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * no-Circuit-Call-related-Services OPERATION ::=
 * {
 *     ARGUMENT    Content-Report
 *     ERRORS      {OperationErrors}
 *     CODE        global:{hi3CircuitLIId no-Circuit-Call-Serv(2) version1(1)}
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<Content_Report>}
 * @implements {OPERATION<Content_Report>}
 */
export
const no_Circuit_Call_related_Services: OPERATION<Content_Report> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_Content_Report,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_Content_Report,
        "&ResultType": undefined,
    },
    "&Errors": OperationErrors /* OBJECT_FIELD_SETTING */,
    "&operationCode": {
        global: _OID.fromParts([
            /* no-Circuit-Call-Serv */ 2,
            /* version1 */ 1,
        ], hi3CircuitLIId),
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
