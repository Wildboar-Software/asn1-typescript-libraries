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
import { MT_ForwardSM_Arg, _decode_MT_ForwardSM_Arg, _encode_MT_ForwardSM_Arg } from "../MAP-SM-DataTypes/MT-ForwardSM-Arg.ta.mjs";
// export { MT_ForwardSM_Arg, _decode_MT_ForwardSM_Arg, _encode_MT_ForwardSM_Arg } from "../MAP-SM-DataTypes/MT-ForwardSM-Arg.ta.mjs";
import { MT_ForwardSM_Res, _decode_MT_ForwardSM_Res, _encode_MT_ForwardSM_Res } from "../MAP-SM-DataTypes/MT-ForwardSM-Res.ta.mjs";
// export { MT_ForwardSM_Res, _decode_MT_ForwardSM_Res, _encode_MT_ForwardSM_Res } from "../MAP-SM-DataTypes/MT-ForwardSM-Res.ta.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
// export { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
// export { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";
// export { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";
import { unidentifiedSubscriber } from "../MAP-Errors/unidentifiedSubscriber.oa.mjs";
// export { unidentifiedSubscriber } from "../MAP-Errors/unidentifiedSubscriber.oa.mjs";
import { illegalSubscriber } from "../MAP-Errors/illegalSubscriber.oa.mjs";
// export { illegalSubscriber } from "../MAP-Errors/illegalSubscriber.oa.mjs";
import { illegalEquipment } from "../MAP-Errors/illegalEquipment.oa.mjs";
// export { illegalEquipment } from "../MAP-Errors/illegalEquipment.oa.mjs";
import { subscriberBusyForMT_SMS } from "../MAP-Errors/subscriberBusyForMT-SMS.oa.mjs";
// export { subscriberBusyForMT_SMS } from "../MAP-Errors/subscriberBusyForMT-SMS.oa.mjs";
import { sm_DeliveryFailure } from "../MAP-Errors/sm-DeliveryFailure.oa.mjs";
// export { sm_DeliveryFailure } from "../MAP-Errors/sm-DeliveryFailure.oa.mjs";
import { absentSubscriberSM } from "../MAP-Errors/absentSubscriberSM.oa.mjs";
// export { absentSubscriberSM } from "../MAP-Errors/absentSubscriberSM.oa.mjs";


/**
 * @summary mt_ForwardSM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mt-ForwardSM  OPERATION ::= {    --Timer ml
 *     -- the timer value may be subject to negotiation between GMSC and IP-SM-GW
 *     ARGUMENT
 *     MT-ForwardSM-Arg
 *     RESULT
 *     MT-ForwardSM-Res
 *     -- optional
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     facilityNotSupported |
 *     unidentifiedSubscriber |
 *     illegalSubscriber |
 *     illegalEquipment |
 *     subscriberBusyForMT-SMS |
 *     sm-DeliveryFailure |
 *     absentSubscriberSM}
 *     CODE    local:44 }
 * ```
 * 
 * @constant
 * @type {OPERATION<MT_ForwardSM_Arg, MT_ForwardSM_Res>}
 * @implements {OPERATION<MT_ForwardSM_Arg, MT_ForwardSM_Res>}
 */
export
const mt_ForwardSM: OPERATION<MT_ForwardSM_Arg, MT_ForwardSM_Res> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MT_ForwardSM_Arg,
        "&ResultType": _decode_MT_ForwardSM_Res,
    },
    encoderFor: {
        "&ArgumentType": _encode_MT_ForwardSM_Arg,
        "&ResultType": _encode_MT_ForwardSM_Res,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, facilityNotSupported, unidentifiedSubscriber, illegalSubscriber, illegalEquipment, subscriberBusyForMT_SMS, sm_DeliveryFailure, absentSubscriberSM, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 44 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
