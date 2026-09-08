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
import { StopLocationTrackingSessionArgument, _decode_StopLocationTrackingSessionArgument, _encode_StopLocationTrackingSessionArgument } from "../CSTA-stop-location-tracking-session/StopLocationTrackingSessionArgument.ta.mjs";
// export { StopLocationTrackingSessionArgument, _decode_StopLocationTrackingSessionArgument, _encode_StopLocationTrackingSessionArgument } from "../CSTA-stop-location-tracking-session/StopLocationTrackingSessionArgument.ta.mjs";
import { StopLocationTrackingSessionResult, _decode_StopLocationTrackingSessionResult, _encode_StopLocationTrackingSessionResult } from "../CSTA-stop-location-tracking-session/StopLocationTrackingSessionResult.ta.mjs";
// export { StopLocationTrackingSessionResult, _decode_StopLocationTrackingSessionResult, _encode_StopLocationTrackingSessionResult } from "../CSTA-stop-location-tracking-session/StopLocationTrackingSessionResult.ta.mjs";


/**
 * @summary stopLocationTrackingSession
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * stopLocationTrackingSession OPERATION ::= {     ARGUMENT        StopLocationTrackingSessionArgument
 *     RESULT            StopLocationTrackingSessionResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 537}
 * ```
 * 
 * @constant
 * @type {OPERATION<StopLocationTrackingSessionArgument, StopLocationTrackingSessionResult>}
 * @implements {OPERATION<StopLocationTrackingSessionArgument, StopLocationTrackingSessionResult>}
 */
export
const stopLocationTrackingSession: OPERATION<StopLocationTrackingSessionArgument, StopLocationTrackingSessionResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_StopLocationTrackingSessionArgument,
        "&ResultType": _decode_StopLocationTrackingSessionResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_StopLocationTrackingSessionArgument,
        "&ResultType": _encode_StopLocationTrackingSessionResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 537 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
