/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { tETRADomainId } from "../TETRA-HI2Operations/tETRADomainId.va.mjs";
import { TETRAIRIsContent, _decode_TETRAIRIsContent, _encode_TETRAIRIsContent } from "../TETRA-HI2Operations/TETRAIRIsContent.ta.mjs";
import { OperationErrors } from "../TETRA-HI2Operations/OperationErrors.osa.mjs";

/**
 * @summary tetra_sending_of_IRI
 * @description
 *
 * Class 2 ROSE operation carrying TETRA IRI to the LEMF. The argument is
 * `TETRAIRIsContent`. Failures are `OperationErrors`. The operation code is
 * `global:{tETRADomainId hi2(1) opcode(1)}`, as written: `hi2(1)` then
 * `opcode(1)` under `tETRADomainId`.
 *
 * The timer shall be set to a value between 3 s and 240 s. The default is 60 s.
 * The module comment says the same note as for the HI management operation
 * applies. Clause D.10.1 gives the TETRA HI management operations that same
 * class 2 timer and default, and no further note.
 *
 * Annex C defines class 2 delivery. The sender starts a timer, waits for
 * `RO_Result`, `RO_Error`, or `RO_Reject`, and on timeout reports that no
 * answer was received. Annex C names `sending-of-IRI` for the common HI2
 * operation. This module defines `tetra-sending-of-IRI` for TETRA HI2.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause C.1.2.1, clause D.10.1, clause
 * D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tetra-sending-of-IRI OPERATION ::=
 * {
 *     ARGUMENT    TETRAIRIsContent
 *     ERRORS      {OperationErrors}
 *     CODE        global:{tETRADomainId hi2(1) opcode(1)}
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<TETRAIRIsContent>}
 * @implements {OPERATION<TETRAIRIsContent>}
 */
export
const tetra_sending_of_IRI: OPERATION<TETRAIRIsContent> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_TETRAIRIsContent,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_TETRAIRIsContent,
        "&ResultType": undefined,
    },
    "&Errors": OperationErrors /* OBJECT_FIELD_SETTING */,
    "&operationCode": {
        global: _OID.fromParts([
            /* hi2 */ 1,
            /* opcode */ 1,
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
