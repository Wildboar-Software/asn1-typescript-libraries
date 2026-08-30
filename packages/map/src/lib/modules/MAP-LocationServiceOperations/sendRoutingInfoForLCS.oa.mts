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
import { RoutingInfoForLCS_Arg, _decode_RoutingInfoForLCS_Arg, _encode_RoutingInfoForLCS_Arg } from "../MAP-LCS-DataTypes/RoutingInfoForLCS-Arg.ta.mjs";
// export { RoutingInfoForLCS_Arg, _decode_RoutingInfoForLCS_Arg, _encode_RoutingInfoForLCS_Arg } from "../MAP-LCS-DataTypes/RoutingInfoForLCS-Arg.ta.mjs";
import { RoutingInfoForLCS_Res, _decode_RoutingInfoForLCS_Res, _encode_RoutingInfoForLCS_Res } from "../MAP-LCS-DataTypes/RoutingInfoForLCS-Res.ta.mjs";
// export { RoutingInfoForLCS_Res, _decode_RoutingInfoForLCS_Res, _encode_RoutingInfoForLCS_Res } from "../MAP-LCS-DataTypes/RoutingInfoForLCS-Res.ta.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
// export { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
// export { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";
// export { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
// export { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { absentSubscriber } from "../MAP-Errors/absentSubscriber.oa.mjs";
// export { absentSubscriber } from "../MAP-Errors/absentSubscriber.oa.mjs";
import { unauthorizedRequestingNetwork } from "../MAP-Errors/unauthorizedRequestingNetwork.oa.mjs";
// export { unauthorizedRequestingNetwork } from "../MAP-Errors/unauthorizedRequestingNetwork.oa.mjs";


/**
 * @summary sendRoutingInfoForLCS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sendRoutingInfoForLCS  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     RoutingInfoForLCS-Arg
 *     RESULT
 *     RoutingInfoForLCS-Res
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     facilityNotSupported |
 *     unknownSubscriber |
 *     absentSubscriber |
 *     unauthorizedRequestingNetwork }
 *     CODE    local:85 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RoutingInfoForLCS_Arg, RoutingInfoForLCS_Res>}
 * @implements {OPERATION<RoutingInfoForLCS_Arg, RoutingInfoForLCS_Res>}
 */
export
const sendRoutingInfoForLCS: OPERATION<RoutingInfoForLCS_Arg, RoutingInfoForLCS_Res> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RoutingInfoForLCS_Arg,
        "&ResultType": _decode_RoutingInfoForLCS_Res,
    },
    encoderFor: {
        "&ArgumentType": _encode_RoutingInfoForLCS_Arg,
        "&ResultType": _encode_RoutingInfoForLCS_Res,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, facilityNotSupported, unknownSubscriber, absentSubscriber, unauthorizedRequestingNetwork, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 85 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
