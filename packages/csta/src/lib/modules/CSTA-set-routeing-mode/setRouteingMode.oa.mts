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
import { SetRouteingModeArgument, _decode_SetRouteingModeArgument, _encode_SetRouteingModeArgument } from "../CSTA-set-routeing-mode/SetRouteingModeArgument.ta.mjs";
// export { SetRouteingModeArgument, _decode_SetRouteingModeArgument, _encode_SetRouteingModeArgument } from "../CSTA-set-routeing-mode/SetRouteingModeArgument.ta.mjs";
import { SetRouteingModeResult, _decode_SetRouteingModeResult, _encode_SetRouteingModeResult } from "../CSTA-set-routeing-mode/SetRouteingModeResult.ta.mjs";
// export { SetRouteingModeResult, _decode_SetRouteingModeResult, _encode_SetRouteingModeResult } from "../CSTA-set-routeing-mode/SetRouteingModeResult.ta.mjs";
import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";
// export { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";


/**
 * @summary setRouteingMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setRouteingMode OPERATION ::= {    ARGUMENT         SetRouteingModeArgument
 *     RESULT             SetRouteingModeResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 318 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetRouteingModeArgument, SetRouteingModeResult>}
 * @implements {OPERATION<SetRouteingModeArgument, SetRouteingModeResult>}
 */
export
const setRouteingMode: OPERATION<SetRouteingModeArgument, SetRouteingModeResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetRouteingModeArgument,
        "&ResultType": _decode_SetRouteingModeResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetRouteingModeArgument,
        "&ResultType": _encode_SetRouteingModeResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 318 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
