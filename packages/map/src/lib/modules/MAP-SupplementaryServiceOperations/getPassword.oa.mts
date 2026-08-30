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
import { GuidanceInfo, _enum_for_GuidanceInfo, GuidanceInfo_enterPW /* IMPORTED_LONG_ENUMERATION_ITEM */, enterPW /* IMPORTED_SHORT_ENUMERATION_ITEM */, GuidanceInfo_enterNewPW /* IMPORTED_LONG_ENUMERATION_ITEM */, enterNewPW /* IMPORTED_SHORT_ENUMERATION_ITEM */, GuidanceInfo_enterNewPW_Again /* IMPORTED_LONG_ENUMERATION_ITEM */, enterNewPW_Again /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_GuidanceInfo, _encode_GuidanceInfo } from "../MAP-SS-DataTypes/GuidanceInfo.ta.mjs";
// export { GuidanceInfo, _enum_for_GuidanceInfo, GuidanceInfo_enterPW /* IMPORTED_LONG_ENUMERATION_ITEM */, enterPW /* IMPORTED_SHORT_ENUMERATION_ITEM */, GuidanceInfo_enterNewPW /* IMPORTED_LONG_ENUMERATION_ITEM */, enterNewPW /* IMPORTED_SHORT_ENUMERATION_ITEM */, GuidanceInfo_enterNewPW_Again /* IMPORTED_LONG_ENUMERATION_ITEM */, enterNewPW_Again /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_GuidanceInfo, _encode_GuidanceInfo } from "../MAP-SS-DataTypes/GuidanceInfo.ta.mjs";
import { Password, _decode_Password, _encode_Password } from "../MAP-SS-DataTypes/Password.ta.mjs";
// export { Password, _decode_Password, _encode_Password } from "../MAP-SS-DataTypes/Password.ta.mjs";


/**
 * @summary getPassword
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getPassword  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     GuidanceInfo
 *     RESULT
 *     Password
 *     CODE    local:18 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GuidanceInfo, Password>}
 * @implements {OPERATION<GuidanceInfo, Password>}
 */
export
const getPassword: OPERATION<GuidanceInfo, Password> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GuidanceInfo,
        "&ResultType": _decode_Password,
    },
    encoderFor: {
        "&ArgumentType": _encode_GuidanceInfo,
        "&ResultType": _encode_Password,
    },
    "&operationCode": { local: 18 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
