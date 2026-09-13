/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ReadArgument, _decode_ReadArgument, _encode_ReadArgument } from "../DFRAbstractService/ReadArgument.ta.mjs";
// export { ReadArgument, _decode_ReadArgument, _encode_ReadArgument } from "../DFRAbstractService/ReadArgument.ta.mjs";
import { ReadResult, _decode_ReadResult, _encode_ReadResult } from "../DFRAbstractService/ReadResult.ta.mjs";
// export { ReadResult, _decode_ReadResult, _encode_ReadResult } from "../DFRAbstractService/ReadResult.ta.mjs";
import { abandoned } from "../DFRAbstractService/abandoned.oa.mjs";
// export { abandoned } from "../DFRAbstractService/abandoned.oa.mjs";
import { accessError } from "../DFRAbstractService/accessError.oa.mjs";
// export { accessError } from "../DFRAbstractService/accessError.oa.mjs";
import { interServerAccessError } from "../DFRAbstractService/interServerAccessError.oa.mjs";
// export { interServerAccessError } from "../DFRAbstractService/interServerAccessError.oa.mjs";
import { nameError } from "../DFRAbstractService/nameError.oa.mjs";
// export { nameError } from "../DFRAbstractService/nameError.oa.mjs";
import { referentAccessError } from "../DFRAbstractService/referentAccessError.oa.mjs";
// export { referentAccessError } from "../DFRAbstractService/referentAccessError.oa.mjs";
import { reservationError } from "../DFRAbstractService/reservationError.oa.mjs";
// export { reservationError } from "../DFRAbstractService/reservationError.oa.mjs";
import { securityError } from "../DFRAbstractService/securityError.oa.mjs";
// export { securityError } from "../DFRAbstractService/securityError.oa.mjs";
import { serviceError } from "../DFRAbstractService/serviceError.oa.mjs";
// export { serviceError } from "../DFRAbstractService/serviceError.oa.mjs";
import { id_opcode_read } from "../DFRAbstractService/id-opcode-read.va.mjs";
// export { id_opcode_read } from "../DFRAbstractService/id-opcode-read.va.mjs";


/**
 * @summary read
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * read OPERATION ::= {
 *     ARGUMENT    ReadArgument
 *     RESULT      ReadResult
 *     ERRORS {
 *         abandoned
 *         | accessError
 *         | interServerAccessError
 *         | nameError
 *         | referentAccessError
 *         | reservationError
 *         | securityError
 *         | serviceError
 *     }
 *     CODE        id-opcode-read
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ReadArgument, ReadResult>}
 * @implements {OPERATION<ReadArgument, ReadResult>}
 */
export
const read: OPERATION<ReadArgument, ReadResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReadArgument,
        "&ResultType": _decode_ReadResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReadArgument,
        "&ResultType": _encode_ReadResult,
    },
    "&Errors": [ abandoned, accessError, interServerAccessError, nameError, referentAccessError, reservationError, securityError, serviceError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_read /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
