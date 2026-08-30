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
import { AnyTimeSubscriptionInterrogationArg, _decode_AnyTimeSubscriptionInterrogationArg, _encode_AnyTimeSubscriptionInterrogationArg } from "../MAP-MS-DataTypes/AnyTimeSubscriptionInterrogationArg.ta.mjs";
import { AnyTimeSubscriptionInterrogationRes, _decode_AnyTimeSubscriptionInterrogationRes, _encode_AnyTimeSubscriptionInterrogationRes } from "../MAP-MS-DataTypes/AnyTimeSubscriptionInterrogationRes.ta.mjs";
import { atsi_NotAllowed } from "../MAP-Errors/atsi-NotAllowed.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { bearerServiceNotProvisioned } from "../MAP-Errors/bearerServiceNotProvisioned.oa.mjs";
import { teleserviceNotProvisioned } from "../MAP-Errors/teleserviceNotProvisioned.oa.mjs";
import { callBarred } from "../MAP-Errors/callBarred.oa.mjs";
import { illegalSS_Operation } from "../MAP-Errors/illegalSS-Operation.oa.mjs";
import { ss_NotAvailable } from "../MAP-Errors/ss-NotAvailable.oa.mjs";
import { informationNotAvailable } from "../MAP-Errors/informationNotAvailable.oa.mjs";


/**
 * @summary anyTimeSubscriptionInterrogation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * anyTimeSubscriptionInterrogation  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     AnyTimeSubscriptionInterrogationArg
 *     RESULT
 *     AnyTimeSubscriptionInterrogationRes
 *     ERRORS {
 *     atsi-NotAllowed |
 *     dataMissing |
 *     unexpectedDataValue |
 *     unknownSubscriber |
 *     bearerServiceNotProvisioned |
 *     teleserviceNotProvisioned |
 *     callBarred |
 *     illegalSS-Operation |
 *     ss-NotAvailable |
 *     informationNotAvailable}
 *     CODE    local:62 }
 * ```
 * 
 * @constant
 * @type {OPERATION<AnyTimeSubscriptionInterrogationArg, AnyTimeSubscriptionInterrogationRes>}
 * @implements {OPERATION<AnyTimeSubscriptionInterrogationArg, AnyTimeSubscriptionInterrogationRes>}
 */
export
const anyTimeSubscriptionInterrogation: OPERATION<AnyTimeSubscriptionInterrogationArg, AnyTimeSubscriptionInterrogationRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AnyTimeSubscriptionInterrogationArg,
        "&ResultType": _decode_AnyTimeSubscriptionInterrogationRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_AnyTimeSubscriptionInterrogationArg,
        "&ResultType": _encode_AnyTimeSubscriptionInterrogationRes,
    },
    "&Errors": [ atsi_NotAllowed, dataMissing, unexpectedDataValue, unknownSubscriber, bearerServiceNotProvisioned, teleserviceNotProvisioned, callBarred, illegalSS_Operation, ss_NotAvailable, informationNotAvailable, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 62 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
