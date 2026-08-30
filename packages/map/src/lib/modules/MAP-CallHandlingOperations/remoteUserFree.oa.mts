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
import { RemoteUserFreeArg, _decode_RemoteUserFreeArg, _encode_RemoteUserFreeArg } from "../MAP-CH-DataTypes/RemoteUserFreeArg.ta.mjs";
import { RemoteUserFreeRes, _decode_RemoteUserFreeRes, _encode_RemoteUserFreeRes } from "../MAP-CH-DataTypes/RemoteUserFreeRes.ta.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { incompatibleTerminal } from "../MAP-Errors/incompatibleTerminal.oa.mjs";
import { absentSubscriber } from "../MAP-Errors/absentSubscriber.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { busySubscriber } from "../MAP-Errors/busySubscriber.oa.mjs";


/**
 * @summary remoteUserFree
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * remoteUserFree  OPERATION ::= {    --Timer ml
 *     ARGUMENT
 *     RemoteUserFreeArg
 *     RESULT
 *     RemoteUserFreeRes
 *     ERRORS {
 *     unexpectedDataValue |
 *     dataMissing |
 *     incompatibleTerminal |
 *     absentSubscriber |
 *     systemFailure |
 *     busySubscriber}
 *     CODE    local:75 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RemoteUserFreeArg, RemoteUserFreeRes>}
 * @implements {OPERATION<RemoteUserFreeArg, RemoteUserFreeRes>}
 */
export
const remoteUserFree: OPERATION<RemoteUserFreeArg, RemoteUserFreeRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RemoteUserFreeArg,
        "&ResultType": _decode_RemoteUserFreeRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_RemoteUserFreeArg,
        "&ResultType": _encode_RemoteUserFreeRes,
    },
    "&Errors": [ unexpectedDataValue, dataMissing, incompatibleTerminal, absentSubscriber, systemFailure, busySubscriber, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 75 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
