/* eslint-disable */
import { id_opcode_addEntry } from "../CommonProtocolSpecification/id-opcode-addEntry.va.js";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
import {
    AddEntryArgument,
    _decode_AddEntryArgument,
    _encode_AddEntryArgument,
} from "../DirectoryAbstractService/AddEntryArgument.ta.js";
import {
    AddEntryResult,
    _decode_AddEntryResult,
    _encode_AddEntryResult,
} from "../DirectoryAbstractService/AddEntryResult.ta.js";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa.js";
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
export { id_opcode_addEntry } from "../CommonProtocolSpecification/id-opcode-addEntry.va.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export {
    AddEntryArgument,
    _decode_AddEntryArgument,
    _encode_AddEntryArgument,
} from "../DirectoryAbstractService/AddEntryArgument.ta.js";
export {
    AddEntryResult,
    _decode_AddEntryResult,
    _encode_AddEntryResult,
} from "../DirectoryAbstractService/AddEntryResult.ta.js";
export { attributeError } from "../DirectoryAbstractService/attributeError.oa.js";
export { nameError } from "../DirectoryAbstractService/nameError.oa.js";
export { referral } from "../DirectoryAbstractService/referral.oa.js";
export { securityError } from "../DirectoryAbstractService/securityError.oa.js";
export { serviceError } from "../DirectoryAbstractService/serviceError.oa.js";
export { updateError } from "../DirectoryAbstractService/updateError.oa.js";

/* START_OF_SYMBOL_DEFINITION addEntry */
/**
 * @summary addEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * addEntry OPERATION ::= {
 *   ARGUMENT  AddEntryArgument
 *   RESULT    AddEntryResult
 *   ERRORS    {attributeError |
 *              nameError |
 *              serviceError |
 *              referral |
 *              securityError |
 *              updateError}
 *   CODE      id-opcode-addEntry }
 * ```
 *
 * @constant
 * @type {OPERATION<AddEntryArgument, AddEntryResult>}
 * @implements {OPERATION<AddEntryArgument, AddEntryResult>}
 */
export const addEntry: OPERATION<AddEntryArgument, AddEntryResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AddEntryArgument,
        "&ResultType": _decode_AddEntryResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_AddEntryArgument,
        "&ResultType": _encode_AddEntryResult,
    },
    "&Errors": [
        attributeError,
        nameError,
        serviceError,
        referral,
        securityError,
        updateError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_addEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION addEntry */

/* eslint-enable */
