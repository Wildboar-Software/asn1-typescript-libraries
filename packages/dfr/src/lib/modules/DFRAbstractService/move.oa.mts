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
import { MoveArgument, _decode_MoveArgument, _encode_MoveArgument } from "../DFRAbstractService/MoveArgument.ta.mjs";
// export { MoveArgument, _decode_MoveArgument, _encode_MoveArgument } from "../DFRAbstractService/MoveArgument.ta.mjs";
import { MoveResult, _decode_MoveResult, _encode_MoveResult } from "../DFRAbstractService/MoveResult.ta.mjs";
// export { MoveResult, _decode_MoveResult, _encode_MoveResult } from "../DFRAbstractService/MoveResult.ta.mjs";
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
import { id_opcode_move } from "../DFRAbstractService/id-opcode-move.va.mjs";
// export { id_opcode_move } from "../DFRAbstractService/id-opcode-move.va.mjs";


/**
 * @summary move
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * move OPERATION ::= {
 *     ARGUMENT    MoveArgument
 *     RESULT      MoveResult
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
 *     CODE        id-opcode-move
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MoveArgument, MoveResult>}
 * @implements {OPERATION<MoveArgument, MoveResult>}
 */
export
const move: OPERATION<MoveArgument, MoveResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MoveArgument,
        "&ResultType": _decode_MoveResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_MoveArgument,
        "&ResultType": _encode_MoveResult,
    },
    "&Errors": [ abandoned, accessError, attributeError, interServerAccessError, nameError, referentAccessError, reservationError, securityError, serviceError, updateError, versionManagementError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_move /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
