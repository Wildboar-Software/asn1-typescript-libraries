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
import { DeleteSubscriberDataArg, _decode_DeleteSubscriberDataArg, _encode_DeleteSubscriberDataArg } from "../MAP-MS-DataTypes/DeleteSubscriberDataArg.ta.mjs";
import { DeleteSubscriberDataRes, _decode_DeleteSubscriberDataRes, _encode_DeleteSubscriberDataRes } from "../MAP-MS-DataTypes/DeleteSubscriberDataRes.ta.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unidentifiedSubscriber } from "../MAP-Errors/unidentifiedSubscriber.oa.mjs";


/**
 * @summary deleteSubscriberData
 * @description
 *
 * MAP_DELETE_SUBSCRIBER_DATA: HLR removes subscriber data from a VLR or SGSN
 * when a supplementary or basic service is withdrawn (not for erasure or
 * deactivation of SS). Also used to remove GPRS data from an SGSN, EPS data
 * from an MME via IWF, and CSG data from MME via IWF or VLR/SGSN (CSS).
 * Confirmed. Typical path: HLR→VLR or HLR→SGSN. Local opcode 8. Timer class `m`
 * (15 s to 30 s). (3GPP TS 29.002 V19.1.0 clauses 8.8.2.1, 17.1.2, 17.3.2.17
 * and 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * deleteSubscriberData  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     DeleteSubscriberDataArg
 *     RESULT
 *     DeleteSubscriberDataRes
 *     -- optional
 *     ERRORS {
 *     dataMissing |
 *     unexpectedDataValue |
 *     unidentifiedSubscriber}
 *     CODE    local:8 }
 * ```
 * 
 * @constant
 * @type {OPERATION<DeleteSubscriberDataArg, DeleteSubscriberDataRes>}
 * @implements {OPERATION<DeleteSubscriberDataArg, DeleteSubscriberDataRes>}
 */
export
const deleteSubscriberData: OPERATION<DeleteSubscriberDataArg, DeleteSubscriberDataRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DeleteSubscriberDataArg,
        "&ResultType": _decode_DeleteSubscriberDataRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_DeleteSubscriberDataArg,
        "&ResultType": _encode_DeleteSubscriberDataRes,
    },
    "&Errors": [ dataMissing, unexpectedDataValue, unidentifiedSubscriber, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 8 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
