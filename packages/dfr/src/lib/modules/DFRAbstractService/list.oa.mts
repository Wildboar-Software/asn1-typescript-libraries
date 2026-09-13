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
import { ListArgument, _decode_ListArgument, _encode_ListArgument } from "../DFRAbstractService/ListArgument.ta.mjs";
// export { ListArgument, _decode_ListArgument, _encode_ListArgument } from "../DFRAbstractService/ListArgument.ta.mjs";
import { ListResult, _decode_ListResult, _encode_ListResult } from "../DFRAbstractService/ListResult.ta.mjs";
// export { ListResult, _decode_ListResult, _encode_ListResult } from "../DFRAbstractService/ListResult.ta.mjs";
import { abandoned } from "../DFRAbstractService/abandoned.oa.mjs";
// export { abandoned } from "../DFRAbstractService/abandoned.oa.mjs";
import { accessError } from "../DFRAbstractService/accessError.oa.mjs";
// export { accessError } from "../DFRAbstractService/accessError.oa.mjs";
import { attributeError } from "../DFRAbstractService/attributeError.oa.mjs";
// export { attributeError } from "../DFRAbstractService/attributeError.oa.mjs";
import { nameError } from "../DFRAbstractService/nameError.oa.mjs";
// export { nameError } from "../DFRAbstractService/nameError.oa.mjs";
import { reservationError } from "../DFRAbstractService/reservationError.oa.mjs";
// export { reservationError } from "../DFRAbstractService/reservationError.oa.mjs";
import { securityError } from "../DFRAbstractService/securityError.oa.mjs";
// export { securityError } from "../DFRAbstractService/securityError.oa.mjs";
import { serviceError } from "../DFRAbstractService/serviceError.oa.mjs";
// export { serviceError } from "../DFRAbstractService/serviceError.oa.mjs";
import { id_opcode_list } from "../DFRAbstractService/id-opcode-list.va.mjs";
// export { id_opcode_list } from "../DFRAbstractService/id-opcode-list.va.mjs";


/**
 * @summary list
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * list OPERATION ::= {
 *     ARGUMENT    ListArgument
 *     RESULT      ListResult
 *     ERRORS {
 *         abandoned
 *         | accessError
 *         | attributeError
 *         | nameError
 *         | reservationError
 *         | securityError
 *         | serviceError
 *     }
 *     CODE        id-opcode-list
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ListArgument, ListResult>}
 * @implements {OPERATION<ListArgument, ListResult>}
 */
export
const list: OPERATION<ListArgument, ListResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ListArgument,
        "&ResultType": _decode_ListResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ListArgument,
        "&ResultType": _encode_ListResult,
    },
    "&Errors": [ abandoned, accessError, attributeError, nameError, reservationError, securityError, serviceError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_list /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
