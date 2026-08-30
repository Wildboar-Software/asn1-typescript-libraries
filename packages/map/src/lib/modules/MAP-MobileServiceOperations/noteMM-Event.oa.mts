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
import { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { NoteMM_EventArg, _decode_NoteMM_EventArg, _encode_NoteMM_EventArg } from "../MAP-MS-DataTypes/NoteMM-EventArg.ta.mjs";
import { NoteMM_EventRes, _decode_NoteMM_EventRes, _encode_NoteMM_EventRes } from "../MAP-MS-DataTypes/NoteMM-EventRes.ta.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { mm_EventNotSupported } from "../MAP-Errors/mm-EventNotSupported.oa.mjs";


/**
 * @summary noteMM_Event
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * noteMM-Event  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     NoteMM-EventArg
 *     RESULT
 *     NoteMM-EventRes
 *     ERRORS {
 *     dataMissing |
 *     unexpectedDataValue |
 *     unknownSubscriber |
 *     mm-EventNotSupported}
 *     CODE    local:89 }
 * ```
 * 
 * @constant
 * @type {OPERATION<NoteMM_EventArg, NoteMM_EventRes>}
 * @implements {OPERATION<NoteMM_EventArg, NoteMM_EventRes>}
 */
export
const noteMM_Event: OPERATION<NoteMM_EventArg, NoteMM_EventRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_NoteMM_EventArg,
        "&ResultType": _decode_NoteMM_EventRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_NoteMM_EventArg,
        "&ResultType": _encode_NoteMM_EventRes,
    },
    "&Errors": [ dataMissing, unexpectedDataValue, unknownSubscriber, mm_EventNotSupported, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 89 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
