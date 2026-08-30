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
import { SendGroupCallInfoArg, _decode_SendGroupCallInfoArg, _encode_SendGroupCallInfoArg } from "../MAP-GR-DataTypes/SendGroupCallInfoArg.ta.mjs";
import { SendGroupCallInfoRes, _decode_SendGroupCallInfoRes, _encode_SendGroupCallInfoRes } from "../MAP-GR-DataTypes/SendGroupCallInfoRes.ta.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { ongoingGroupCall } from "../MAP-Errors/ongoingGroupCall.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { teleserviceNotProvisioned } from "../MAP-Errors/teleserviceNotProvisioned.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";


/**
 * @summary sendGroupCallInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sendGroupCallInfo  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     SendGroupCallInfoArg
 *     RESULT
 *     SendGroupCallInfoRes
 *     ERRORS {
 *     systemFailure |
 *     ongoingGroupCall |
 *     unexpectedDataValue |
 *     dataMissing |
 *     teleserviceNotProvisioned |
 *     unknownSubscriber}
 *     CODE    local:84 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SendGroupCallInfoArg, SendGroupCallInfoRes>}
 * @implements {OPERATION<SendGroupCallInfoArg, SendGroupCallInfoRes>}
 */
export
const sendGroupCallInfo: OPERATION<SendGroupCallInfoArg, SendGroupCallInfoRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SendGroupCallInfoArg,
        "&ResultType": _decode_SendGroupCallInfoRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_SendGroupCallInfoArg,
        "&ResultType": _encode_SendGroupCallInfoRes,
    },
    "&Errors": [ systemFailure, ongoingGroupCall, unexpectedDataValue, dataMissing, teleserviceNotProvisioned, unknownSubscriber, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 84 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
