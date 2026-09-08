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
import { GetSpeakerVolumeArgument, _decode_GetSpeakerVolumeArgument, _encode_GetSpeakerVolumeArgument } from "../CSTA-get-speaker-volume/GetSpeakerVolumeArgument.ta.mjs";
// export { GetSpeakerVolumeArgument, _decode_GetSpeakerVolumeArgument, _encode_GetSpeakerVolumeArgument } from "../CSTA-get-speaker-volume/GetSpeakerVolumeArgument.ta.mjs";
import { GetSpeakerVolumeResult, _decode_GetSpeakerVolumeResult, _encode_GetSpeakerVolumeResult } from "../CSTA-get-speaker-volume/GetSpeakerVolumeResult.ta.mjs";
// export { GetSpeakerVolumeResult, _decode_GetSpeakerVolumeResult, _encode_GetSpeakerVolumeResult } from "../CSTA-get-speaker-volume/GetSpeakerVolumeResult.ta.mjs";
import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";
// export { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";


/**
 * @summary getSpeakerVolume
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getSpeakerVolume OPERATION ::= {    ARGUMENT         GetSpeakerVolumeArgument
 *     RESULT            GetSpeakerVolumeResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 272 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetSpeakerVolumeArgument, GetSpeakerVolumeResult>}
 * @implements {OPERATION<GetSpeakerVolumeArgument, GetSpeakerVolumeResult>}
 */
export
const getSpeakerVolume: OPERATION<GetSpeakerVolumeArgument, GetSpeakerVolumeResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetSpeakerVolumeArgument,
        "&ResultType": _decode_GetSpeakerVolumeResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetSpeakerVolumeArgument,
        "&ResultType": _encode_GetSpeakerVolumeResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 272 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
