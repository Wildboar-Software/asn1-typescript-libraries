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
import { errcode_unexpectedParameter } from "../CAP-errorcodes/errcode-unexpectedParameter.va.mjs";
// export { errcode_unexpectedParameter } from "../CAP-errorcodes/errcode-unexpectedParameter.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary unexpectedParameter
 * @description
 *
 * A valid but unexpected parameter was present in the operation argument;
 * its presence is inconsistent with the other parameters. The responding
 * entity cannot start the operation. Same FSM procedures as
 * `missingParameter`. Local error code 16.
 * (3GPP TS 29.078 V19.0.0 clauses 5.2 and 10.1.14).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * unexpectedParameter ERROR ::= {
 *     CODE    errcode-unexpectedParameter
 *     }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const unexpectedParameter: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": errcode_unexpectedParameter /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
