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
import { RegisterSS_Arg, _decode_RegisterSS_Arg, _encode_RegisterSS_Arg } from "../MAP-SS-DataTypes/RegisterSS-Arg.ta.mjs";
import { SS_Info, _decode_SS_Info, _encode_SS_Info } from "../MAP-SS-DataTypes/SS-Info.ta.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { bearerServiceNotProvisioned } from "../MAP-Errors/bearerServiceNotProvisioned.oa.mjs";
import { teleserviceNotProvisioned } from "../MAP-Errors/teleserviceNotProvisioned.oa.mjs";
import { callBarred } from "../MAP-Errors/callBarred.oa.mjs";
import { illegalSS_Operation } from "../MAP-Errors/illegalSS-Operation.oa.mjs";
import { ss_ErrorStatus } from "../MAP-Errors/ss-ErrorStatus.oa.mjs";
import { ss_Incompatibility } from "../MAP-Errors/ss-Incompatibility.oa.mjs";


/**
 * @summary registerSS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * registerSS  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     RegisterSS-Arg
 *     RESULT
 *     SS-Info
 *     -- optional
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     bearerServiceNotProvisioned |
 *     teleserviceNotProvisioned |
 *     callBarred |
 *     illegalSS-Operation |
 *     ss-ErrorStatus |
 *     ss-Incompatibility}
 *     CODE    local:10 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RegisterSS_Arg, SS_Info>}
 * @implements {OPERATION<RegisterSS_Arg, SS_Info>}
 */
export
const registerSS: OPERATION<RegisterSS_Arg, SS_Info> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RegisterSS_Arg,
        "&ResultType": _decode_SS_Info,
    },
    encoderFor: {
        "&ArgumentType": _encode_RegisterSS_Arg,
        "&ResultType": _encode_SS_Info,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, bearerServiceNotProvisioned, teleserviceNotProvisioned, callBarred, illegalSS_Operation, ss_ErrorStatus, ss_Incompatibility, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 10 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
