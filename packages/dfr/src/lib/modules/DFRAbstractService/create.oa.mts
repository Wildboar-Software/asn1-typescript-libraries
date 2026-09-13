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
import { CreateArgument, _decode_CreateArgument, _encode_CreateArgument } from "../DFRAbstractService/CreateArgument.ta.mjs";
// export { CreateArgument, _decode_CreateArgument, _encode_CreateArgument } from "../DFRAbstractService/CreateArgument.ta.mjs";
import { CreateResult, _decode_CreateResult, _encode_CreateResult } from "../DFRAbstractService/CreateResult.ta.mjs";
// export { CreateResult, _decode_CreateResult, _encode_CreateResult } from "../DFRAbstractService/CreateResult.ta.mjs";
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
import { securityError } from "../DFRAbstractService/securityError.oa.mjs";
// export { securityError } from "../DFRAbstractService/securityError.oa.mjs";
import { serviceError } from "../DFRAbstractService/serviceError.oa.mjs";
// export { serviceError } from "../DFRAbstractService/serviceError.oa.mjs";
import { updateError } from "../DFRAbstractService/updateError.oa.mjs";
// export { updateError } from "../DFRAbstractService/updateError.oa.mjs";
import { versionManagementError } from "../DFRAbstractService/versionManagementError.oa.mjs";
// export { versionManagementError } from "../DFRAbstractService/versionManagementError.oa.mjs";
import { id_opcode_create } from "../DFRAbstractService/id-opcode-create.va.mjs";
// export { id_opcode_create } from "../DFRAbstractService/id-opcode-create.va.mjs";


/**
 * @summary create
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * create OPERATION ::= {
 *     ARGUMENT    CreateArgument
 *     RESULT      CreateResult
 *     ERRORS {
 *         abandoned
 *         | accessError
 *         | attributeError
 *         | interServerAccessError
 *         | nameError
 *         | referentAccessError
 *         | securityError
 *         | serviceError
 *         | updateError
 *         | versionManagementError
 *     }
 *     CODE        id-opcode-create
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CreateArgument, CreateResult>}
 * @implements {OPERATION<CreateArgument, CreateResult>}
 */
export
const create: OPERATION<CreateArgument, CreateResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CreateArgument,
        "&ResultType": _decode_CreateResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_CreateArgument,
        "&ResultType": _encode_CreateResult,
    },
    "&Errors": [ abandoned, accessError, attributeError, interServerAccessError, nameError, referentAccessError, securityError, serviceError, updateError, versionManagementError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_create /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
