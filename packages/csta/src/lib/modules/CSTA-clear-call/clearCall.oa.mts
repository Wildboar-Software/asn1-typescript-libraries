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
import { ClearCallArgument, _decode_ClearCallArgument, _encode_ClearCallArgument } from "../CSTA-clear-call/ClearCallArgument.ta.mjs";
// export { ClearCallArgument, _decode_ClearCallArgument, _encode_ClearCallArgument } from "../CSTA-clear-call/ClearCallArgument.ta.mjs";
import { ClearCallResult, _decode_ClearCallResult, _encode_ClearCallResult } from "../CSTA-clear-call/ClearCallResult.ta.mjs";
// export { ClearCallResult, _decode_ClearCallResult, _encode_ClearCallResult } from "../CSTA-clear-call/ClearCallResult.ta.mjs";
import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";
// export { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";


/**
 * @summary clearCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * clearCall OPERATION ::= {     ARGUMENT         ClearCallArgument
 *     RESULT             ClearCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 4 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ClearCallArgument, ClearCallResult>}
 * @implements {OPERATION<ClearCallArgument, ClearCallResult>}
 */
export
const clearCall: OPERATION<ClearCallArgument, ClearCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ClearCallArgument,
        "&ResultType": _decode_ClearCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ClearCallArgument,
        "&ResultType": _encode_ClearCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 4 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
