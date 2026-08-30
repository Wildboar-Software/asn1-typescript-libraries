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
import { PurgeMS_Arg, _decode_PurgeMS_Arg, _encode_PurgeMS_Arg } from "../MAP-MS-DataTypes/PurgeMS-Arg.ta.mjs";
import { PurgeMS_Res, _decode_PurgeMS_Res, _encode_PurgeMS_Res } from "../MAP-MS-DataTypes/PurgeMS-Res.ta.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";


/**
 * @summary purgeMS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * purgeMS  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     PurgeMS-Arg
 *     RESULT
 *     PurgeMS-Res
 *     -- optional
 *     ERRORS{
 *     dataMissing |
 *     unexpectedDataValue|
 *     unknownSubscriber}
 *     CODE    local:67 }
 * ```
 * 
 * @constant
 * @type {OPERATION<PurgeMS_Arg, PurgeMS_Res>}
 * @implements {OPERATION<PurgeMS_Arg, PurgeMS_Res>}
 */
export
const purgeMS: OPERATION<PurgeMS_Arg, PurgeMS_Res> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PurgeMS_Arg,
        "&ResultType": _decode_PurgeMS_Res,
    },
    encoderFor: {
        "&ArgumentType": _encode_PurgeMS_Arg,
        "&ResultType": _encode_PurgeMS_Res,
    },
    "&Errors": [ dataMissing, unexpectedDataValue, unknownSubscriber, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 67 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
