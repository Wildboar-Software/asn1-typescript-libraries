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
import { CancelTelephonyTonesArgument, _decode_CancelTelephonyTonesArgument, _encode_CancelTelephonyTonesArgument } from "../CSTA-cancel-telephony-tones/CancelTelephonyTonesArgument.ta.mjs";
// export { CancelTelephonyTonesArgument, _decode_CancelTelephonyTonesArgument, _encode_CancelTelephonyTonesArgument } from "../CSTA-cancel-telephony-tones/CancelTelephonyTonesArgument.ta.mjs";
import { CancelTelephonyTonesResult, _decode_CancelTelephonyTonesResult, _encode_CancelTelephonyTonesResult } from "../CSTA-cancel-telephony-tones/CancelTelephonyTonesResult.ta.mjs";
// export { CancelTelephonyTonesResult, _decode_CancelTelephonyTonesResult, _encode_CancelTelephonyTonesResult } from "../CSTA-cancel-telephony-tones/CancelTelephonyTonesResult.ta.mjs";
import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";
// export { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";


/**
 * @summary cancelTelephonyTones
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelTelephonyTones OPERATION ::= {    ARGUMENT        CancelTelephonyTonesArgument
 *     RESULT            CancelTelephonyTonesResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 231 }
 * ```
 * 
 * @constant
 * @type {OPERATION<CancelTelephonyTonesArgument, CancelTelephonyTonesResult>}
 * @implements {OPERATION<CancelTelephonyTonesArgument, CancelTelephonyTonesResult>}
 */
export
const cancelTelephonyTones: OPERATION<CancelTelephonyTonesArgument, CancelTelephonyTonesResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CancelTelephonyTonesArgument,
        "&ResultType": _decode_CancelTelephonyTonesResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_CancelTelephonyTonesArgument,
        "&ResultType": _encode_CancelTelephonyTonesResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 231 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
