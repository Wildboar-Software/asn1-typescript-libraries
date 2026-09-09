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
import { taskRefused_ParameterType, _enum_for_taskRefused_ParameterType, _decode_taskRefused_ParameterType, _encode_taskRefused_ParameterType } from "../CAP-errortypes/taskRefused-ParameterType.ta.mjs";
// export { taskRefused_ParameterType, _enum_for_taskRefused_ParameterType, taskRefused_ParameterType_generic /* IMPORTED_LONG_ENUMERATION_ITEM */, generic /* IMPORTED_SHORT_ENUMERATION_ITEM */, taskRefused_ParameterType_unobtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, unobtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, taskRefused_ParameterType_congestion /* IMPORTED_LONG_ENUMERATION_ITEM */, congestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_taskRefused_ParameterType, _encode_taskRefused_ParameterType } from "../CAP-errortypes/taskRefused-ParameterType.ta.mjs";
import { errcode_taskRefused } from "../CAP-errorcodes/errcode-taskRefused.va.mjs";
// export { errcode_taskRefused } from "../CAP-errorcodes/errcode-taskRefused.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary taskRefused
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * taskRefused ERROR ::= {
 *     PARAMETER    ENUMERATED {
 *         generic            (0),
 *         unobtainable        (1),
 *         congestion            (2)
 *         }
 *     CODE    errcode-taskRefused
 *     }
 * ```
 * 
 * @constant
 * @type {ERROR<taskRefused_ParameterType>}
 * @implements {ERROR<taskRefused_ParameterType>}
 */
export
const taskRefused: ERROR<taskRefused_ParameterType> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_taskRefused_ParameterType,
    },
    encoderFor: {
        "&ParameterType": _encode_taskRefused_ParameterType,
    },
    "&errorCode": errcode_taskRefused /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
