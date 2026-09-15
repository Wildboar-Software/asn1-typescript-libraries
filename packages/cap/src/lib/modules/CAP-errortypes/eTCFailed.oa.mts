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
import { errcode_eTCFailed } from "../CAP-errorcodes/errcode-eTCFailed.va.mjs";
// export { errcode_eTCFailed } from "../CAP-errorcodes/errcode-eTCFailed.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary eTCFailed
 * @description
 *
 * gsmSSF returns this toward gsmSCF when EstablishTemporaryConnection to an
 * assisting gsmSSF or gsmSRF failed (e.g. ISUP backwards release after IAM).
 * gsmSSF stays in Waiting_for_Instructions. Local error code 3.
 * (3GPP TS 29.078 V19.0.0 clauses 5.2 and 10.1.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * eTCFailed ERROR ::= {
 *     CODE    errcode-eTCFailed
 *     }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const eTCFailed: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": errcode_eTCFailed /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
