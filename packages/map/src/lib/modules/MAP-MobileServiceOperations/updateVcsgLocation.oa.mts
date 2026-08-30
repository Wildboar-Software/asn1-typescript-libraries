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
import { UpdateVcsgLocationArg, _decode_UpdateVcsgLocationArg, _encode_UpdateVcsgLocationArg } from "../MAP-MS-DataTypes/UpdateVcsgLocationArg.ta.mjs";
// export { UpdateVcsgLocationArg, _decode_UpdateVcsgLocationArg, _encode_UpdateVcsgLocationArg } from "../MAP-MS-DataTypes/UpdateVcsgLocationArg.ta.mjs";
import { UpdateVcsgLocationRes, _decode_UpdateVcsgLocationRes, _encode_UpdateVcsgLocationRes } from "../MAP-MS-DataTypes/UpdateVcsgLocationRes.ta.mjs";
// export { UpdateVcsgLocationRes, _decode_UpdateVcsgLocationRes, _encode_UpdateVcsgLocationRes } from "../MAP-MS-DataTypes/UpdateVcsgLocationRes.ta.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
// export { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
// export { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";


/**
 * @summary updateVcsgLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * updateVcsgLocation  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     UpdateVcsgLocationArg
 *     RESULT
 *     UpdateVcsgLocationRes
 *     ERRORS {
 *     systemFailure |
 *     unexpectedDataValue |
 *     unknownSubscriber}
 *     CODE    local:53 }
 * ```
 * 
 * @constant
 * @type {OPERATION<UpdateVcsgLocationArg, UpdateVcsgLocationRes>}
 * @implements {OPERATION<UpdateVcsgLocationArg, UpdateVcsgLocationRes>}
 */
export
const updateVcsgLocation: OPERATION<UpdateVcsgLocationArg, UpdateVcsgLocationRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_UpdateVcsgLocationArg,
        "&ResultType": _decode_UpdateVcsgLocationRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_UpdateVcsgLocationArg,
        "&ResultType": _encode_UpdateVcsgLocationRes,
    },
    "&Errors": [ systemFailure, unexpectedDataValue, unknownSubscriber, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 53 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
