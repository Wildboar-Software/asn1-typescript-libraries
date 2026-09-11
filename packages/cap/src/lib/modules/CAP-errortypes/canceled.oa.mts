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
import { errcode_canceled } from "../CAP-errorcodes/errcode-canceled.va.mjs";
// export { errcode_canceled } from "../CAP-errorcodes/errcode-canceled.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary canceled
 * @description
 *
 * gsmSRF returns this toward gsmSCF when Cancel of PlayAnnouncement or
 * PromptAndCollectUserInformation succeeded. Those are the only operations
 * that may be cancelled. SRSM stays in User Interaction; the cancelled
 * operation is aborted and the next buffered PA/PACUI (if any) runs. If
 * the indicated operation had already executed, `cancelFailed` is returned
 * instead. Local error code 0.
 * (3GPP TS 29.078 V19.0.0 clauses 5.2 and 10.1.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * canceled ERROR ::= {
 *     CODE    errcode-canceled
 *     }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const canceled: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": errcode_canceled /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
