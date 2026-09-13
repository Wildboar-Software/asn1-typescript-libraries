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
import { ModifyArgument, _decode_ModifyArgument, _encode_ModifyArgument } from "../DFRAbstractService/ModifyArgument.ta.mjs";
// export { ModifyArgument, _decode_ModifyArgument, _encode_ModifyArgument } from "../DFRAbstractService/ModifyArgument.ta.mjs";
import { ModifyResult, _decode_ModifyResult, _encode_ModifyResult } from "../DFRAbstractService/ModifyResult.ta.mjs";
// export { ModifyResult, _decode_ModifyResult, _encode_ModifyResult } from "../DFRAbstractService/ModifyResult.ta.mjs";
import { abandoned } from "../DFRAbstractService/abandoned.oa.mjs";
// export { abandoned } from "../DFRAbstractService/abandoned.oa.mjs";
import { accessError } from "../DFRAbstractService/accessError.oa.mjs";
// export { accessError } from "../DFRAbstractService/accessError.oa.mjs";
import { attributeError } from "../DFRAbstractService/attributeError.oa.mjs";
// export { attributeError } from "../DFRAbstractService/attributeError.oa.mjs";
import { interServerAccessError } from "../DFRAbstractService/interServerAccessError.oa.mjs";
// export { interServerAccessError } from "../DFRAbstractService/interServerAccessError.oa.mjs";
import { nameError } from "../DFRAbstractService/nameError.oa.mjs";
// export { nameError } from "../DFRAbstractService/nameError.oa.mjs";
import { referentAccessError } from "../DFRAbstractService/referentAccessError.oa.mjs";
// export { referentAccessError } from "../DFRAbstractService/referentAccessError.oa.mjs";
import { reservationError } from "../DFRAbstractService/reservationError.oa.mjs";
// export { reservationError } from "../DFRAbstractService/reservationError.oa.mjs";
import { securityError } from "../DFRAbstractService/securityError.oa.mjs";
// export { securityError } from "../DFRAbstractService/securityError.oa.mjs";
import { serviceError } from "../DFRAbstractService/serviceError.oa.mjs";
// export { serviceError } from "../DFRAbstractService/serviceError.oa.mjs";
import { updateError } from "../DFRAbstractService/updateError.oa.mjs";
// export { updateError } from "../DFRAbstractService/updateError.oa.mjs";
import { versionManagementError } from "../DFRAbstractService/versionManagementError.oa.mjs";
// export { versionManagementError } from "../DFRAbstractService/versionManagementError.oa.mjs";
import { id_opcode_modify } from "../DFRAbstractService/id-opcode-modify.va.mjs";
// export { id_opcode_modify } from "../DFRAbstractService/id-opcode-modify.va.mjs";


/**
 * @summary modify
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * modify OPERATION ::= {
 *     ARGUMENT    ModifyArgument
 *     RESULT      ModifyResult
 *     ERRORS {
 *         abandoned
 *         | accessError
 *         | attributeError
 *         | interServerAccessError
 *         | nameError
 *         | referentAccessError
 *         | reservationError
 *         | securityError
 *         | serviceError
 *         | updateError
 *         | versionManagementError
 *     }
 *     CODE        id-opcode-modify
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ModifyArgument, ModifyResult>}
 * @implements {OPERATION<ModifyArgument, ModifyResult>}
 */
export
const modify: OPERATION<ModifyArgument, ModifyResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ModifyArgument,
        "&ResultType": _decode_ModifyResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ModifyArgument,
        "&ResultType": _encode_ModifyResult,
    },
    "&Errors": [ abandoned, accessError, attributeError, interServerAccessError, nameError, referentAccessError, reservationError, securityError, serviceError, updateError, versionManagementError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_modify /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
