/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { hi2DomainId } from "../HI2Operations/hi2DomainId.va.mjs";
import { IRIsContent, _decode_IRIsContent, _encode_IRIsContent } from "../HI2Operations/IRIsContent.ta.mjs";
import { OperationErrors } from "../HI2Operations/OperationErrors.osa.mjs";

/**
 * @summary sending_of_IRI
 * @description
 *
 * Class 2 ROSE operation that carries IRI from the mediation function to the
 * LEMF, including SMS. The argument is `IRIsContent`: one `IRIContent` or an
 * optional `IRISequence`. The errors are `OperationErrors`. The operation code
 * is `{hi2DomainId sending-of-IRI(1) version1(1)}`.
 *
 * The timer is 3 s to 240 s. The default is 60 s. It starts when the operation
 * is sent and stops on `RO_Result`, `RO_Error`, or `RO_Reject`. On timeout the
 * ASE_HI tells the LI application that no answer arrived. The LI application
 * may send the data again or inform the administrator. On `RO_Error` it is told
 * that the peer did not receive the data, with the error cause, and it decides
 * whether to raise an alarm.
 *
 * The module says the same note as for the HI management operation applies.
 * Clause D.3 gives those operations the same class-2 bounds and 60 s default,
 * and prints no further note.
 *
 * Clause D.0: some data are ROSE-specific and have no meaning when FTP is used.
 * FTP is the other HI2 method. The MF is the FTP client and the LEMF is the
 * server. Every file contains only complete IRI records; one record is not
 * split across files.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause 8.1, clause C.1, clause C.2, clause
 * D.0, clause D.3, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sending-of-IRI OPERATION ::=
 * {
 *     ARGUMENT    IRIsContent
 *     ERRORS      {OperationErrors}
 *     CODE        global:{hi2DomainId sending-of-IRI(1) version1(1)}
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<IRIsContent>}
 * @implements {OPERATION<IRIsContent>}
 */
export
const sending_of_IRI: OPERATION<IRIsContent> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_IRIsContent,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_IRIsContent,
        "&ResultType": undefined,
    },
    "&Errors": OperationErrors /* OBJECT_FIELD_SETTING */,
    "&operationCode": {
        global: _OID.fromParts([
            /* sending-of-IRI */ 1,
            /* version1 */ 1,
        ], hi2DomainId),
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
