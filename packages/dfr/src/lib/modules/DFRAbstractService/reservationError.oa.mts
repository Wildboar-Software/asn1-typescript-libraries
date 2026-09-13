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
import { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { reservationError_ParameterType, _decode_reservationError_ParameterType, _encode_reservationError_ParameterType } from "../DFRAbstractService/reservationError-ParameterType.ta.mjs";
// export { reservationError_ParameterType, _decode_reservationError_ParameterType, _encode_reservationError_ParameterType } from "../DFRAbstractService/reservationError-ParameterType.ta.mjs";
import { id_errcode_reservation_error } from "../DFRAbstractService/id-errcode-reservation-error.va.mjs";
// export { id_errcode_reservation_error } from "../DFRAbstractService/id-errcode-reservation-error.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary reservationError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * reservationError ERROR ::= {
 *     PARAMETER SEQUENCE {
 *         entry   [0] DfrEntryName,
 *         problem [1] ReservationProblem
 *     }
 *     CODE        id-errcode-reservation-error
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<reservationError_ParameterType>}
 * @implements {ERROR<reservationError_ParameterType>}
 */
export
const reservationError: ERROR<reservationError_ParameterType> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_reservationError_ParameterType,
    },
    encoderFor: {
        "&ParameterType": _encode_reservationError_ParameterType,
    },
    "&errorCode": id_errcode_reservation_error /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
