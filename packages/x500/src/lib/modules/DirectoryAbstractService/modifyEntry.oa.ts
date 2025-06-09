/* eslint-disable */
import { id_opcode_modifyEntry } from "../CommonProtocolSpecification/id-opcode-modifyEntry.va.js";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa.js";
import {
    ModifyEntryArgument,
    _decode_ModifyEntryArgument,
    _encode_ModifyEntryArgument,
} from "../DirectoryAbstractService/ModifyEntryArgument.ta.js";
import {
    ModifyEntryResult,
    _decode_ModifyEntryResult,
    _encode_ModifyEntryResult,
} from "../DirectoryAbstractService/ModifyEntryResult.ta.js";
import { nameError } from "../DirectoryAbstractService/nameError.oa.js";
import { referral } from "../DirectoryAbstractService/referral.oa.js";
import { securityError } from "../DirectoryAbstractService/securityError.oa.js";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.js";
import { updateError } from "../DirectoryAbstractService/updateError.oa.js";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.js";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
export { id_opcode_modifyEntry } from "../CommonProtocolSpecification/id-opcode-modifyEntry.va.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export { attributeError } from "../DirectoryAbstractService/attributeError.oa.js";
export {
    ModifyEntryArgument,
    _decode_ModifyEntryArgument,
    _encode_ModifyEntryArgument,
} from "../DirectoryAbstractService/ModifyEntryArgument.ta.js";
export {
    ModifyEntryResult,
    _decode_ModifyEntryResult,
    _encode_ModifyEntryResult,
} from "../DirectoryAbstractService/ModifyEntryResult.ta.js";
export { nameError } from "../DirectoryAbstractService/nameError.oa.js";
export { referral } from "../DirectoryAbstractService/referral.oa.js";
export { securityError } from "../DirectoryAbstractService/securityError.oa.js";
export { serviceError } from "../DirectoryAbstractService/serviceError.oa.js";
export { updateError } from "../DirectoryAbstractService/updateError.oa.js";

/* START_OF_SYMBOL_DEFINITION modifyEntry */
/**
 * @summary modifyEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * modifyEntry OPERATION ::= {
 *   ARGUMENT  ModifyEntryArgument
 *   RESULT    ModifyEntryResult
 *   ERRORS    {attributeError |
 *              nameError |
 *              serviceError |
 *              referral |
 *              securityError |
 *              updateError}
 *   CODE      id-opcode-modifyEntry }
 * ```
 *
 * @constant
 * @type {OPERATION<ModifyEntryArgument, ModifyEntryResult>}
 * @implements {OPERATION<ModifyEntryArgument, ModifyEntryResult>}
 */
export const modifyEntry: OPERATION<ModifyEntryArgument, ModifyEntryResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ModifyEntryArgument,
        "&ResultType": _decode_ModifyEntryResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ModifyEntryArgument,
        "&ResultType": _encode_ModifyEntryResult,
    },
    "&Errors": [
        attributeError,
        nameError,
        serviceError,
        referral,
        securityError,
        updateError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_modifyEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION modifyEntry */

/* eslint-enable */
