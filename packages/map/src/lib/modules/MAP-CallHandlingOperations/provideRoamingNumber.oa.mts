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
import { ProvideRoamingNumberArg, _decode_ProvideRoamingNumberArg, _encode_ProvideRoamingNumberArg } from "../MAP-CH-DataTypes/ProvideRoamingNumberArg.ta.mjs";
// export { ProvideRoamingNumberArg, _decode_ProvideRoamingNumberArg, _encode_ProvideRoamingNumberArg } from "../MAP-CH-DataTypes/ProvideRoamingNumberArg.ta.mjs";
import { ProvideRoamingNumberRes, _decode_ProvideRoamingNumberRes, _encode_ProvideRoamingNumberRes } from "../MAP-CH-DataTypes/ProvideRoamingNumberRes.ta.mjs";
// export { ProvideRoamingNumberRes, _decode_ProvideRoamingNumberRes, _encode_ProvideRoamingNumberRes } from "../MAP-CH-DataTypes/ProvideRoamingNumberRes.ta.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
// export { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
// export { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";
// export { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";
import { or_NotAllowed } from "../MAP-Errors/or-NotAllowed.oa.mjs";
// export { or_NotAllowed } from "../MAP-Errors/or-NotAllowed.oa.mjs";
import { absentSubscriber } from "../MAP-Errors/absentSubscriber.oa.mjs";
// export { absentSubscriber } from "../MAP-Errors/absentSubscriber.oa.mjs";
import { noRoamingNumberAvailable } from "../MAP-Errors/noRoamingNumberAvailable.oa.mjs";
// export { noRoamingNumberAvailable } from "../MAP-Errors/noRoamingNumberAvailable.oa.mjs";


/**
 * @summary provideRoamingNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * provideRoamingNumber  OPERATION ::= {    --Timer m
 * -- The timer is set to the upper limit of the range if the HLR supports pre-paging.
 *     ARGUMENT
 *     ProvideRoamingNumberArg
 *     RESULT
 *     ProvideRoamingNumberRes
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     facilityNotSupported |
 *     or-NotAllowed |
 *     absentSubscriber |
 *     noRoamingNumberAvailable}
 *     CODE    local:4 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ProvideRoamingNumberArg, ProvideRoamingNumberRes>}
 * @implements {OPERATION<ProvideRoamingNumberArg, ProvideRoamingNumberRes>}
 */
export
const provideRoamingNumber: OPERATION<ProvideRoamingNumberArg, ProvideRoamingNumberRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ProvideRoamingNumberArg,
        "&ResultType": _decode_ProvideRoamingNumberRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_ProvideRoamingNumberArg,
        "&ResultType": _encode_ProvideRoamingNumberRes,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, facilityNotSupported, or_NotAllowed, absentSubscriber, noRoamingNumberAvailable, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 4 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
