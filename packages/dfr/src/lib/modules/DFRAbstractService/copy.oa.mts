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
import { _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CopyArgument, _decode_CopyArgument, _encode_CopyArgument } from "../DFRAbstractService/CopyArgument.ta.mjs";
import { CopyResult, _decode_CopyResult, _encode_CopyResult } from "../DFRAbstractService/CopyResult.ta.mjs";
import { abandoned } from "../DFRAbstractService/abandoned.oa.mjs";
import { accessError } from "../DFRAbstractService/accessError.oa.mjs";
import { attributeError } from "../DFRAbstractService/attributeError.oa.mjs";
import { interServerAccessError } from "../DFRAbstractService/interServerAccessError.oa.mjs";
import { nameError } from "../DFRAbstractService/nameError.oa.mjs";
import { referentAccessError } from "../DFRAbstractService/referentAccessError.oa.mjs";
import { securityError } from "../DFRAbstractService/securityError.oa.mjs";
import { serviceError } from "../DFRAbstractService/serviceError.oa.mjs";
import { updateError } from "../DFRAbstractService/updateError.oa.mjs";
import { versionManagementError } from "../DFRAbstractService/versionManagementError.oa.mjs";
import { id_opcode_copy } from "../DFRAbstractService/id-opcode-copy.va.mjs";


/**
 * @summary copy
 * @description
 *
 * Copy an object into a destination group (new UPI). Existing references keep
 * pointing at the original. Cannot copy a group from another store. Copied
 * access-list is not taken from the original: user-supplied or defaulted to
 * requestor as owner, then applied to the copy and all copied descendants.
 * ISO/IEC 10166-1:1991 §8.2.3. Local opcode 3 (ISO/IEC 10166-2:1991 §6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * copy OPERATION ::= {
 *     ARGUMENT    CopyArgument
 *     RESULT      CopyResult
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
 *     CODE        id-opcode-copy
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CopyArgument, CopyResult>}
 * @implements {OPERATION<CopyArgument, CopyResult>}
 */
export
const copy: OPERATION<CopyArgument, CopyResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CopyArgument,
        "&ResultType": _decode_CopyResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_CopyArgument,
        "&ResultType": _encode_CopyResult,
    },
    "&Errors": [ abandoned, accessError, attributeError, interServerAccessError, nameError, referentAccessError, securityError, serviceError, updateError, versionManagementError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_copy /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
