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
import { attributeError_ParameterType, _decode_attributeError_ParameterType, _encode_attributeError_ParameterType } from "../DFRAbstractService/attributeError-ParameterType.ta.mjs";
// export { attributeError_ParameterType, _decode_attributeError_ParameterType, _encode_attributeError_ParameterType } from "../DFRAbstractService/attributeError-ParameterType.ta.mjs";
import { id_errcode_attribute_error } from "../DFRAbstractService/id-errcode-attribute-error.va.mjs";
// export { id_errcode_attribute_error } from "../DFRAbstractService/id-errcode-attribute-error.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary attributeError
 * @description
 *
 * Problems reading or modifying attributes, including search and
 * membership-criteria Filters. `entry` is omitted on Create when the
 * `attributes` component is at fault, and on Search when `search-criteria` is
 * at fault. ISO/IEC 10166-1:1991 §8.3.1. Local error 1 (ISO/IEC 10166-2:1991
 * §6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * attributeError ERROR ::= {
 *     PARAMETER SEQUENCE {
 *         entry       [0] DfrEntryName OPTIONAL,
 *         problems    [1] SEQUENCE OF SEQUENCE {
 *             problem     [0] AttributeProblem,
 *             type        [1] AttributeType,
 *             value       [2] AttributeValue OPTIONAL
 *         }
 *     }
 *     CODE        id-errcode-attribute-error
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<attributeError_ParameterType>}
 * @implements {ERROR<attributeError_ParameterType>}
 */
export
const attributeError: ERROR<attributeError_ParameterType> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_attributeError_ParameterType,
    },
    encoderFor: {
        "&ParameterType": _encode_attributeError_ParameterType,
    },
    "&errorCode": id_errcode_attribute_error /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
