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
import { SendRoutingInfoArg, _decode_SendRoutingInfoArg, _encode_SendRoutingInfoArg } from "../MAP-CH-DataTypes/SendRoutingInfoArg.ta.mjs";
import { SendRoutingInfoRes, _decode_SendRoutingInfoRes, _encode_SendRoutingInfoRes } from "../MAP-CH-DataTypes/SendRoutingInfoRes.ta.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";
import { or_NotAllowed } from "../MAP-Errors/or-NotAllowed.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { numberChanged } from "../MAP-Errors/numberChanged.oa.mjs";
import { bearerServiceNotProvisioned } from "../MAP-Errors/bearerServiceNotProvisioned.oa.mjs";
import { teleserviceNotProvisioned } from "../MAP-Errors/teleserviceNotProvisioned.oa.mjs";
import { absentSubscriber } from "../MAP-Errors/absentSubscriber.oa.mjs";
import { busySubscriber } from "../MAP-Errors/busySubscriber.oa.mjs";
import { noSubscriberReply } from "../MAP-Errors/noSubscriberReply.oa.mjs";
import { callBarred } from "../MAP-Errors/callBarred.oa.mjs";
import { cug_Reject } from "../MAP-Errors/cug-Reject.oa.mjs";
import { forwardingViolation } from "../MAP-Errors/forwardingViolation.oa.mjs";


/**
 * @summary sendRoutingInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sendRoutingInfo  OPERATION ::= {    --Timer m
 * -- The timer is set to the upper limit of the range if the GMSC supports pre-paging.
 *     ARGUMENT
 *     SendRoutingInfoArg
 *     RESULT
 *     SendRoutingInfoRes
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     facilityNotSupported |
 *     or-NotAllowed |
 *     unknownSubscriber |
 *     numberChanged |
 *     bearerServiceNotProvisioned |
 *     teleserviceNotProvisioned |
 *     absentSubscriber |
 *     busySubscriber |
 *     noSubscriberReply |
 *     callBarred |
 *     cug-Reject |
 *     forwardingViolation}
 *     CODE    local:22 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SendRoutingInfoArg, SendRoutingInfoRes>}
 * @implements {OPERATION<SendRoutingInfoArg, SendRoutingInfoRes>}
 */
export
const sendRoutingInfo: OPERATION<SendRoutingInfoArg, SendRoutingInfoRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SendRoutingInfoArg,
        "&ResultType": _decode_SendRoutingInfoRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_SendRoutingInfoArg,
        "&ResultType": _encode_SendRoutingInfoRes,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, facilityNotSupported, or_NotAllowed, unknownSubscriber, numberChanged, bearerServiceNotProvisioned, teleserviceNotProvisioned, absentSubscriber, busySubscriber, noSubscriberReply, callBarred, cug_Reject, forwardingViolation, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 22 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
