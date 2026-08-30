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
import { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { SS_SubscriptionViolationParam, _decode_SS_SubscriptionViolationParam, _encode_SS_SubscriptionViolationParam } from "../MAP-ER-DataTypes/SS-SubscriptionViolationParam.ta.mjs";
// export { SS_SubscriptionViolationParam, _decode_SS_SubscriptionViolationParam, _encode_SS_SubscriptionViolationParam } from "../MAP-ER-DataTypes/SS-SubscriptionViolationParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary ss_SubscriptionViolation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ss-SubscriptionViolation  ERROR ::= {
 *     PARAMETER
 *     SS-SubscriptionViolationParam
 *     -- optional
 *     -- SS-SubscriptionViolationParam must not be used in version <3
 *     CODE    local:19 }
 * ```
 * 
 * @constant
 * @type {ERROR<SS_SubscriptionViolationParam>}
 * @implements {ERROR<SS_SubscriptionViolationParam>}
 */
export
const ss_SubscriptionViolation: ERROR<SS_SubscriptionViolationParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_SS_SubscriptionViolationParam,
    },
    encoderFor: {
        "&ParameterType": _encode_SS_SubscriptionViolationParam,
    },
    "&errorCode": { local: 19 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
