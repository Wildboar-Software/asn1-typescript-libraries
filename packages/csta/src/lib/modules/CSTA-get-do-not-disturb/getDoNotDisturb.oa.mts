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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { GetDoNotDisturbArgument, _decode_GetDoNotDisturbArgument, _encode_GetDoNotDisturbArgument } from "../CSTA-get-do-not-disturb/GetDoNotDisturbArgument.ta.mjs";
// export { GetDoNotDisturbArgument, _decode_GetDoNotDisturbArgument, _encode_GetDoNotDisturbArgument } from "../CSTA-get-do-not-disturb/GetDoNotDisturbArgument.ta.mjs";
import { GetDoNotDisturbResult, _decode_GetDoNotDisturbResult, _encode_GetDoNotDisturbResult } from "../CSTA-get-do-not-disturb/GetDoNotDisturbResult.ta.mjs";
// export { GetDoNotDisturbResult, _decode_GetDoNotDisturbResult, _encode_GetDoNotDisturbResult } from "../CSTA-get-do-not-disturb/GetDoNotDisturbResult.ta.mjs";
import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";
// export { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";


/**
 * @summary getDoNotDisturb
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getDoNotDisturb OPERATION ::= {    ARGUMENT         GetDoNotDisturbArgument
 *     RESULT             GetDoNotDisturbResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 308 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetDoNotDisturbArgument, GetDoNotDisturbResult>}
 * @implements {OPERATION<GetDoNotDisturbArgument, GetDoNotDisturbResult>}
 */
export
const getDoNotDisturb: OPERATION<GetDoNotDisturbArgument, GetDoNotDisturbResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetDoNotDisturbArgument,
        "&ResultType": _decode_GetDoNotDisturbResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetDoNotDisturbArgument,
        "&ResultType": _encode_GetDoNotDisturbResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 308 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
