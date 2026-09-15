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
import { SendGroupCallEndSignalArg, _decode_SendGroupCallEndSignalArg, _encode_SendGroupCallEndSignalArg } from "../MAP-GR-DataTypes/SendGroupCallEndSignalArg.ta.mjs";
import { SendGroupCallEndSignalRes, _decode_SendGroupCallEndSignalRes, _encode_SendGroupCallEndSignalRes } from "../MAP-GR-DataTypes/SendGroupCallEndSignalRes.ta.mjs";


/**
 * @summary sendGroupCallEndSignal
 * @description
 *
 * MAP_SEND_GROUP_CALL_END_SIGNAL: Relay MSC indicates that a VGCS/VBS downlink
 * is established (originating cell if the calling service subscriber is in the
 * Relay MSC area; otherwise any cell in the Relay MSC VGCS/VBS area). The
 * result tells the Relay MSC that call resources may be released because the
 * call has been released in the Anchor MSC. Confirmed. Typical path: Relay
 * MSC→Anchor MSC. Local opcode 40. Timer class `l` (28 h to 38 h). No user
 * errors in the ASN.1. (3GPP TS 29.002 V19.1.0 clauses 10.7.1, 17.1.2,
 * 17.3.2.30 and 17.6.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sendGroupCallEndSignal  OPERATION ::= {    --Timer l
 *     ARGUMENT
 *     SendGroupCallEndSignalArg
 *     RESULT
 *     SendGroupCallEndSignalRes
 *     CODE    local:40 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SendGroupCallEndSignalArg, SendGroupCallEndSignalRes>}
 * @implements {OPERATION<SendGroupCallEndSignalArg, SendGroupCallEndSignalRes>}
 */
export
const sendGroupCallEndSignal: OPERATION<SendGroupCallEndSignalArg, SendGroupCallEndSignalRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SendGroupCallEndSignalArg,
        "&ResultType": _decode_SendGroupCallEndSignalRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_SendGroupCallEndSignalArg,
        "&ResultType": _encode_SendGroupCallEndSignalRes,
    },
    "&operationCode": { local: 40 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
