/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { Content_Report, _decode_Content_Report, _encode_Content_Report } from "../HI3CircuitDataOperations/Content-Report.ta.mjs";
import { OperationErrors } from "../HI2Operations/OperationErrors.osa.mjs";
import { hi3CircuitLIId } from "../HI3CircuitDataOperations/hi3CircuitLIId.va.mjs";

/**
 * @summary circuit_Call_related_Services
 * @description
 *
 * Class 2 operation. The timer shall be set to a value between 3 s and 240 s. The timer default value is 60 s.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * circuit-Call-related-Services OPERATION ::=
 * {
 *     ARGUMENT    Content-Report
 *     ERRORS      {OperationErrors}
 *     CODE        global:{hi3CircuitLIId circuit-Call-Serv(1) version1(1)}
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<Content_Report>}
 * @implements {OPERATION<Content_Report>}
 */
export
const circuit_Call_related_Services: OPERATION<Content_Report> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_Content_Report,
    },
    encoderFor: {
        "&ArgumentType": _encode_Content_Report,
    },
    "&Errors": OperationErrors /* OBJECT_FIELD_SETTING */,
    "&operationCode": {
        global: _OID.fromParts([ /* circuit-Call-Serv */ 1, /* version1 */ 1 ], hi3CircuitLIId),
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
