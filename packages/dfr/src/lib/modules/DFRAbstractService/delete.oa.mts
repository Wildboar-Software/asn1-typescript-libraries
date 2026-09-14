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
import { DeleteArgument, _decode_DeleteArgument, _encode_DeleteArgument } from "../DFRAbstractService/DeleteArgument.ta.mjs";
// export { DeleteArgument, _decode_DeleteArgument, _encode_DeleteArgument } from "../DFRAbstractService/DeleteArgument.ta.mjs";
import { DeleteResult, _decode_DeleteResult, _encode_DeleteResult } from "../DFRAbstractService/DeleteResult.ta.mjs";
// export { DeleteResult, _decode_DeleteResult, _encode_DeleteResult } from "../DFRAbstractService/DeleteResult.ta.mjs";
import { abandoned } from "../DFRAbstractService/abandoned.oa.mjs";
// export { abandoned } from "../DFRAbstractService/abandoned.oa.mjs";
import { accessError } from "../DFRAbstractService/accessError.oa.mjs";
// export { accessError } from "../DFRAbstractService/accessError.oa.mjs";
import { nameError } from "../DFRAbstractService/nameError.oa.mjs";
// export { nameError } from "../DFRAbstractService/nameError.oa.mjs";
import { securityError } from "../DFRAbstractService/securityError.oa.mjs";
// export { securityError } from "../DFRAbstractService/securityError.oa.mjs";
import { serviceError } from "../DFRAbstractService/serviceError.oa.mjs";
// export { serviceError } from "../DFRAbstractService/serviceError.oa.mjs";
import { updateError } from "../DFRAbstractService/updateError.oa.mjs";
// export { updateError } from "../DFRAbstractService/updateError.oa.mjs";
import { id_opcode_delete } from "../DFRAbstractService/id-opcode-delete.va.mjs";
// export { id_opcode_delete } from "../DFRAbstractService/id-opcode-delete.va.mjs";


/**
 * @summary delete_
 * @description
 *
 * Remove an entry from its parent and the store. The UPI becomes invalid.
 * Deleting a group deletes descendants if the user has sufficient rights to
 * all of them. Deleting a reference does not affect the referent. Fails if the
 * object or any descendant is reserved by another user. ISO/IEC 10166-1:1991
 * §8.2.2. Local opcode 2 (ISO/IEC 10166-2:1991 §6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * delete OPERATION ::= {
 *     ARGUMENT    DeleteArgument
 *     RESULT      DeleteResult
 *     ERRORS {
 *         abandoned
 *         | accessError
 *         | nameError
 *         | securityError
 *         | serviceError
 *         | updateError
 *     }
 *     CODE        id-opcode-delete
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DeleteArgument, DeleteResult>}
 * @implements {OPERATION<DeleteArgument, DeleteResult>}
 */
export
const delete_: OPERATION<DeleteArgument, DeleteResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DeleteArgument,
        "&ResultType": _decode_DeleteResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_DeleteArgument,
        "&ResultType": _encode_DeleteResult,
    },
    "&Errors": [ abandoned, accessError, nameError, securityError, serviceError, updateError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_delete /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
