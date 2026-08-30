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
import { RegisterCC_EntryArg, _decode_RegisterCC_EntryArg, _encode_RegisterCC_EntryArg } from "../MAP-SS-DataTypes/RegisterCC-EntryArg.ta.mjs";
import { RegisterCC_EntryRes, _decode_RegisterCC_EntryRes, _encode_RegisterCC_EntryRes } from "../MAP-SS-DataTypes/RegisterCC-EntryRes.ta.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { callBarred } from "../MAP-Errors/callBarred.oa.mjs";
import { illegalSS_Operation } from "../MAP-Errors/illegalSS-Operation.oa.mjs";
import { ss_ErrorStatus } from "../MAP-Errors/ss-ErrorStatus.oa.mjs";
import { ss_Incompatibility } from "../MAP-Errors/ss-Incompatibility.oa.mjs";
import { shortTermDenial } from "../MAP-Errors/shortTermDenial.oa.mjs";
import { longTermDenial } from "../MAP-Errors/longTermDenial.oa.mjs";
import { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";


/**
 * @summary registerCC_Entry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * registerCC-Entry  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     RegisterCC-EntryArg
 *     RESULT
 *     RegisterCC-EntryRes
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     callBarred |
 *     illegalSS-Operation |
 *     ss-ErrorStatus |
 *     ss-Incompatibility |
 *     shortTermDenial |
 *     longTermDenial |
 *     facilityNotSupported}
 *     CODE    local:76 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RegisterCC_EntryArg, RegisterCC_EntryRes>}
 * @implements {OPERATION<RegisterCC_EntryArg, RegisterCC_EntryRes>}
 */
export
const registerCC_Entry: OPERATION<RegisterCC_EntryArg, RegisterCC_EntryRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RegisterCC_EntryArg,
        "&ResultType": _decode_RegisterCC_EntryRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_RegisterCC_EntryArg,
        "&ResultType": _encode_RegisterCC_EntryRes,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, callBarred, illegalSS_Operation, ss_ErrorStatus, ss_Incompatibility, shortTermDenial, longTermDenial, facilityNotSupported, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 76 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
