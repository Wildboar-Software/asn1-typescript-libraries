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
import { _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { securityError_ParameterType, _decode_securityError_ParameterType, _encode_securityError_ParameterType } from "../DFRAbstractService/securityError-ParameterType.ta.mjs";
import { id_errcode_security_error } from "../DFRAbstractService/id-errcode-security-error.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary securityError
 * @description
 *
 * Bad security parameters at bind or on an operation that carries Privileges.
 * ISO/IEC 10166-1:1991 §8.3.9. Local error 9 (ISO/IEC 10166-2:1991 §6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * securityError ERROR ::= {
 *     PARAMETER SEQUENCE {
 *         problem [0] SecurityProblem
 *     }
 *     CODE        id-errcode-security-error
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<securityError_ParameterType>}
 * @implements {ERROR<securityError_ParameterType>}
 */
export
const securityError: ERROR<securityError_ParameterType> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_securityError_ParameterType,
    },
    encoderFor: {
        "&ParameterType": _encode_securityError_ParameterType,
    },
    "&errorCode": id_errcode_security_error /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
