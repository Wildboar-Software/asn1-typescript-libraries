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
import { RoutingInfoForSM_Arg, _decode_RoutingInfoForSM_Arg, _encode_RoutingInfoForSM_Arg } from "../MAP-SM-DataTypes/RoutingInfoForSM-Arg.ta.mjs";
// export { RoutingInfoForSM_Arg, _decode_RoutingInfoForSM_Arg, _encode_RoutingInfoForSM_Arg } from "../MAP-SM-DataTypes/RoutingInfoForSM-Arg.ta.mjs";
import { RoutingInfoForSM_Res, _decode_RoutingInfoForSM_Res, _encode_RoutingInfoForSM_Res } from "../MAP-SM-DataTypes/RoutingInfoForSM-Res.ta.mjs";
// export { RoutingInfoForSM_Res, _decode_RoutingInfoForSM_Res, _encode_RoutingInfoForSM_Res } from "../MAP-SM-DataTypes/RoutingInfoForSM-Res.ta.mjs";
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
import { teleserviceNotProvisioned } from "../MAP-Errors/teleserviceNotProvisioned.oa.mjs";
// export { teleserviceNotProvisioned } from "../MAP-Errors/teleserviceNotProvisioned.oa.mjs";
import { callBarred } from "../MAP-Errors/callBarred.oa.mjs";
// export { callBarred } from "../MAP-Errors/callBarred.oa.mjs";
import { absentSubscriberSM } from "../MAP-Errors/absentSubscriberSM.oa.mjs";
// export { absentSubscriberSM } from "../MAP-Errors/absentSubscriberSM.oa.mjs";


/**
 * @summary sendRoutingInfoForSM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sendRoutingInfoForSM  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     RoutingInfoForSM-Arg
 *     RESULT
 *     RoutingInfoForSM-Res
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     facilityNotSupported |
 *     unknownSubscriber |
 *     teleserviceNotProvisioned |
 *     callBarred |
 *     absentSubscriberSM}
 *     CODE    local:45 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RoutingInfoForSM_Arg, RoutingInfoForSM_Res>}
 * @implements {OPERATION<RoutingInfoForSM_Arg, RoutingInfoForSM_Res>}
 */
export
const sendRoutingInfoForSM: OPERATION<RoutingInfoForSM_Arg, RoutingInfoForSM_Res> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RoutingInfoForSM_Arg,
        "&ResultType": _decode_RoutingInfoForSM_Res,
    },
    encoderFor: {
        "&ArgumentType": _encode_RoutingInfoForSM_Arg,
        "&ResultType": _encode_RoutingInfoForSM_Res,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, facilityNotSupported, unknownSubscriber, teleserviceNotProvisioned, callBarred, absentSubscriberSM, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 45 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
