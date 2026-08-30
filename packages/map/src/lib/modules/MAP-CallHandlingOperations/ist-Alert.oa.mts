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
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { IST_AlertArg, _decode_IST_AlertArg, _encode_IST_AlertArg } from "../MAP-CH-DataTypes/IST-AlertArg.ta.mjs";
// export { IST_AlertArg, _decode_IST_AlertArg, _encode_IST_AlertArg } from "../MAP-CH-DataTypes/IST-AlertArg.ta.mjs";
import { IST_AlertRes, _decode_IST_AlertRes, _encode_IST_AlertRes } from "../MAP-CH-DataTypes/IST-AlertRes.ta.mjs";
// export { IST_AlertRes, _decode_IST_AlertRes, _encode_IST_AlertRes } from "../MAP-CH-DataTypes/IST-AlertRes.ta.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { resourceLimitation } from "../MAP-Errors/resourceLimitation.oa.mjs";
// export { resourceLimitation } from "../MAP-Errors/resourceLimitation.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
// export { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
// export { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";
// export { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";


/**
 * @summary ist_Alert
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ist-Alert  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     IST-AlertArg
 *     RESULT
 *     IST-AlertRes
 *     -- optional
 *     ERRORS {
 *     unexpectedDataValue |
 *     resourceLimitation |
 *     unknownSubscriber |
 *     systemFailure |
 *     facilityNotSupported}
 *     CODE    local:87 }
 * ```
 * 
 * @constant
 * @type {OPERATION<IST_AlertArg, IST_AlertRes>}
 * @implements {OPERATION<IST_AlertArg, IST_AlertRes>}
 */
export
const ist_Alert: OPERATION<IST_AlertArg, IST_AlertRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_IST_AlertArg,
        "&ResultType": _decode_IST_AlertRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_IST_AlertArg,
        "&ResultType": _encode_IST_AlertRes,
    },
    "&Errors": [ unexpectedDataValue, resourceLimitation, unknownSubscriber, systemFailure, facilityNotSupported, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 87 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
