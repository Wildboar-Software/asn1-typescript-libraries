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
import { DfrBindError, _decode_DfrBindError, _encode_DfrBindError } from "../DFRAbstractService/DfrBindError.ta.mjs";
// export { DfrBindError, _decode_DfrBindError, _encode_DfrBindError } from "../DFRAbstractService/DfrBindError.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary dfrBindError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfrBindError ERROR ::= {
 *     PARAMETER DfrBindError
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<DfrBindError>}
 * @implements {ERROR<DfrBindError>}
 */
export
const dfrBindError: ERROR<DfrBindError> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_DfrBindError,
    },
    encoderFor: {
        "&ParameterType": _encode_DfrBindError,
    },
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
