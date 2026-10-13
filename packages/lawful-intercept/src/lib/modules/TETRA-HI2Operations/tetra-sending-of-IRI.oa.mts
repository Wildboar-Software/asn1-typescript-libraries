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
