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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { IST_CommandArg, _decode_IST_CommandArg, _encode_IST_CommandArg } from "../MAP-CH-DataTypes/IST-CommandArg.ta.mjs";
// export { IST_CommandArg, _decode_IST_CommandArg, _encode_IST_CommandArg } from "../MAP-CH-DataTypes/IST-CommandArg.ta.mjs";
import { IST_CommandRes, _decode_IST_CommandRes, _encode_IST_CommandRes } from "../MAP-CH-DataTypes/IST-CommandRes.ta.mjs";
// export { IST_CommandRes, _decode_IST_CommandRes, _encode_IST_CommandRes } from "../MAP-CH-DataTypes/IST-CommandRes.ta.mjs";
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
 * @summary ist_Command
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ist-Command  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     IST-CommandArg
 *     RESULT
 *     IST-CommandRes
 *     -- optional
 *     ERRORS {
 *     unexpectedDataValue |
 *     resourceLimitation |
 *     unknownSubscriber |
 *     systemFailure |
 *     facilityNotSupported}
 *     CODE    local:88 }
 * ```
 * 
 * @constant
 * @type {OPERATION<IST_CommandArg, IST_CommandRes>}
 * @implements {OPERATION<IST_CommandArg, IST_CommandRes>}
 */
export
const ist_Command: OPERATION<IST_CommandArg, IST_CommandRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_IST_CommandArg,
        "&ResultType": _decode_IST_CommandRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_IST_CommandArg,
        "&ResultType": _encode_IST_CommandRes,
    },
    "&Errors": [ unexpectedDataValue, resourceLimitation, unknownSubscriber, systemFailure, facilityNotSupported, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 88 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
