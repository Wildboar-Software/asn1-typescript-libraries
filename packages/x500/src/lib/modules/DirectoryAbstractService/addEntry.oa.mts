/* eslint-disable */
import { id_opcode_addEntry } from "../CommonProtocolSpecification/id-opcode-addEntry.va.mjs";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import {
    AddEntryArgument,
    _decode_AddEntryArgument,
    _encode_AddEntryArgument,
} from "../DirectoryAbstractService/AddEntryArgument.ta.mjs";
import {
    AddEntryResult,
    _decode_AddEntryResult,
    _encode_AddEntryResult,
} from "../DirectoryAbstractService/AddEntryResult.ta.mjs";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
import { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
import { referral } from "../DirectoryAbstractService/referral.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
import { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.mjs";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.mjs";
export { id_opcode_addEntry } from "../CommonProtocolSpecification/id-opcode-addEntry.va.mjs";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
export {
    AddEntryArgument,
    _decode_AddEntryArgument,
    _encode_AddEntryArgument,
} from "../DirectoryAbstractService/AddEntryArgument.ta.mjs";
export {
    AddEntryResult,
    _decode_AddEntryResult,
    _encode_AddEntryResult,
} from "../DirectoryAbstractService/AddEntryResult.ta.mjs";
export { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
export { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
export { referral } from "../DirectoryAbstractService/referral.oa.mjs";
export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
export { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
export { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";

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
