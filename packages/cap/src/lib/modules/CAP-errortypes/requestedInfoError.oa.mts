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
import { requestedInfoError_ParameterType, _enum_for_requestedInfoError_ParameterType, _decode_requestedInfoError_ParameterType, _encode_requestedInfoError_ParameterType } from "../CAP-errortypes/requestedInfoError-ParameterType.ta.mjs";
// export { requestedInfoError_ParameterType, _enum_for_requestedInfoError_ParameterType, requestedInfoError_ParameterType_unknownRequestedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownRequestedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, requestedInfoError_ParameterType_requestedInfoNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, requestedInfoNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_requestedInfoError_ParameterType, _encode_requestedInfoError_ParameterType } from "../CAP-errortypes/requestedInfoError-ParameterType.ta.mjs";
import { errcode_requestedInfoError } from "../CAP-errorcodes/errcode-requestedInfoError.va.mjs";
// export { errcode_requestedInfoError } from "../CAP-errorcodes/errcode-requestedInfoError.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary requestedInfoError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * requestedInfoError ERROR ::= {
 *     PARAMETER    ENUMERATED {
 *         unknownRequestedInfo    (1),
 *         requestedInfoNotAvailable    (2)
 *         }
 *     CODE    errcode-requestedInfoError
 *     }
 * ```
 * 
 * @constant
 * @type {ERROR<requestedInfoError_ParameterType>}
 * @implements {ERROR<requestedInfoError_ParameterType>}
 */
export
const requestedInfoError: ERROR<requestedInfoError_ParameterType> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_requestedInfoError_ParameterType,
    },
    encoderFor: {
        "&ParameterType": _encode_requestedInfoError_ParameterType,
    },
    "&errorCode": errcode_requestedInfoError /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
