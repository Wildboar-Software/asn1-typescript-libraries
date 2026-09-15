/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
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
 * Cannot reserve or unreserve as requested. No read right ⇒ nameError instead
 * of cannot-reserve. ISO/IEC 10166-1:1991 §8.3.7. Local error 7 (ISO/IEC
 * 10166-2:1991 §6).
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
