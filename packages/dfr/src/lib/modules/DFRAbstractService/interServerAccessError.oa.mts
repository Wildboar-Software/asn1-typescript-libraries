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
import { interServerAccessError_ParameterType, _decode_interServerAccessError_ParameterType, _encode_interServerAccessError_ParameterType } from "../DFRAbstractService/interServerAccessError-ParameterType.ta.mjs";
// export { interServerAccessError_ParameterType, _decode_interServerAccessError_ParameterType, _encode_interServerAccessError_ParameterType } from "../DFRAbstractService/interServerAccessError-ParameterType.ta.mjs";
import { id_errcode_inter_server_access_error } from "../DFRAbstractService/id-errcode-inter-server-access-error.va.mjs";
// export { id_errcode_inter_server_access_error } from "../DFRAbstractService/id-errcode-inter-server-access-error.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary interServerAccessError
 * @description
 *
 * Accessor DFR-Server failed to reach an external referent's store. Not
 * specific to the ROA protocol. ISO/IEC 10166-1:1991 §8.3.6. Local error 6
 * (ISO/IEC 10166-2:1991 §6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * interServerAccessError ERROR ::= {
 *     PARAMETER SEQUENCE {
 *         entry   [0] DfrEntryName, -- of the reference
 *         problem [1] InterServerAccessProblem
 *     }
 *     CODE        id-errcode-inter-server-access-error
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<interServerAccessError_ParameterType>}
 * @implements {ERROR<interServerAccessError_ParameterType>}
 */
export
const interServerAccessError: ERROR<interServerAccessError_ParameterType> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_interServerAccessError_ParameterType,
    },
    encoderFor: {
        "&ParameterType": _encode_interServerAccessError_ParameterType,
    },
    "&errorCode": id_errcode_inter_server_access_error /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
