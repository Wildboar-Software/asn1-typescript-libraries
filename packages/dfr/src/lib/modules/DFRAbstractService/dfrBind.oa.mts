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
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { DfrBindArgument, _decode_DfrBindArgument, _encode_DfrBindArgument } from "../DFRAbstractService/DfrBindArgument.ta.mjs";
// export { DfrBindArgument, _decode_DfrBindArgument, _encode_DfrBindArgument } from "../DFRAbstractService/DfrBindArgument.ta.mjs";
import { DfrBindResult, _decode_DfrBindResult, _encode_DfrBindResult } from "../DFRAbstractService/DfrBindResult.ta.mjs";
// export { DfrBindResult, _decode_DfrBindResult, _encode_DfrBindResult } from "../DFRAbstractService/DfrBindResult.ta.mjs";
import { dfrBindError } from "../DFRAbstractService/dfrBindError.oa.mjs";
// export { dfrBindError } from "../DFRAbstractService/dfrBindError.oa.mjs";


/**
 * @summary dfrBind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfrBind OPERATION ::= {
 *     ARGUMENT    DfrBindArgument
 *     RESULT      DfrBindResult
 *     ERRORS      {dfrBindError}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DfrBindArgument, DfrBindResult>}
 * @implements {OPERATION<DfrBindArgument, DfrBindResult>}
 */
export
const dfrBind: OPERATION<DfrBindArgument, DfrBindResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DfrBindArgument,
        "&ResultType": _decode_DfrBindResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_DfrBindArgument,
        "&ResultType": _encode_DfrBindResult,
    },
    "&Errors": [ dfrBindError, ] /* OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
