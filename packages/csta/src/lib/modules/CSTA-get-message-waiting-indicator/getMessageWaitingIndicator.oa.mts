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
import { GetMessageWaitingIndicatorArgument, _decode_GetMessageWaitingIndicatorArgument, _encode_GetMessageWaitingIndicatorArgument } from "../CSTA-get-message-waiting-indicator/GetMessageWaitingIndicatorArgument.ta.mjs";
// export { GetMessageWaitingIndicatorArgument, _decode_GetMessageWaitingIndicatorArgument, _encode_GetMessageWaitingIndicatorArgument } from "../CSTA-get-message-waiting-indicator/GetMessageWaitingIndicatorArgument.ta.mjs";
import { GetMessageWaitingIndicatorResult, _decode_GetMessageWaitingIndicatorResult, _encode_GetMessageWaitingIndicatorResult } from "../CSTA-get-message-waiting-indicator/GetMessageWaitingIndicatorResult.ta.mjs";
// export { GetMessageWaitingIndicatorResult, _decode_GetMessageWaitingIndicatorResult, _encode_GetMessageWaitingIndicatorResult } from "../CSTA-get-message-waiting-indicator/GetMessageWaitingIndicatorResult.ta.mjs";
import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";
// export { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";


/**
 * @summary getMessageWaitingIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getMessageWaitingIndicator OPERATION ::= {    ARGUMENT         GetMessageWaitingIndicatorArgument
 *     RESULT            GetMessageWaitingIndicatorResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 267 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetMessageWaitingIndicatorArgument, GetMessageWaitingIndicatorResult>}
 * @implements {OPERATION<GetMessageWaitingIndicatorArgument, GetMessageWaitingIndicatorResult>}
 */
export
const getMessageWaitingIndicator: OPERATION<GetMessageWaitingIndicatorArgument, GetMessageWaitingIndicatorResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetMessageWaitingIndicatorArgument,
        "&ResultType": _decode_GetMessageWaitingIndicatorResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetMessageWaitingIndicatorArgument,
        "&ResultType": _encode_GetMessageWaitingIndicatorResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 267 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
