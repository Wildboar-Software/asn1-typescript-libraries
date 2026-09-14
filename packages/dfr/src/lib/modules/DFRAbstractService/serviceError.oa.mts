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
import { serviceError_ParameterType, _decode_serviceError_ParameterType, _encode_serviceError_ParameterType } from "../DFRAbstractService/serviceError-ParameterType.ta.mjs";
// export { serviceError_ParameterType, _decode_serviceError_ParameterType, _encode_serviceError_ParameterType } from "../DFRAbstractService/serviceError-ParameterType.ta.mjs";
import { id_errcode_service_error } from "../DFRAbstractService/id-errcode-service-error.va.mjs";
// export { id_errcode_service_error } from "../DFRAbstractService/id-errcode-service-error.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary serviceError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceError ERROR ::= {
 *     PARAMETER SEQUENCE {
 *         problem [0] ServiceProblem
 *     }
 *     CODE        id-errcode-service-error
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<serviceError_ParameterType>}
 * @implements {ERROR<serviceError_ParameterType>}
 */
export
const serviceError: ERROR<serviceError_ParameterType> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_serviceError_ParameterType,
    },
    encoderFor: {
        "&ParameterType": _encode_serviceError_ParameterType,
    },
    "&errorCode": id_errcode_service_error /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
