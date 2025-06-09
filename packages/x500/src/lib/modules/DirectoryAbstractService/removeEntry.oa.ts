/* eslint-disable */
import { id_opcode_removeEntry } from "../CommonProtocolSpecification/id-opcode-removeEntry.va.js";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
import { nameError } from "../DirectoryAbstractService/nameError.oa.js";
import { referral } from "../DirectoryAbstractService/referral.oa.js";
import {
    RemoveEntryArgument,
    _decode_RemoveEntryArgument,
    _encode_RemoveEntryArgument,
} from "../DirectoryAbstractService/RemoveEntryArgument.ta.js";
import {
    RemoveEntryResult,
    _decode_RemoveEntryResult,
    _encode_RemoveEntryResult,
} from "../DirectoryAbstractService/RemoveEntryResult.ta.js";
import { securityError } from "../DirectoryAbstractService/securityError.oa.js";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.js";
import { updateError } from "../DirectoryAbstractService/updateError.oa.js";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.js";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
export { id_opcode_removeEntry } from "../CommonProtocolSpecification/id-opcode-removeEntry.va.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export { nameError } from "../DirectoryAbstractService/nameError.oa.js";
export { referral } from "../DirectoryAbstractService/referral.oa.js";
export {
    RemoveEntryArgument,
    _decode_RemoveEntryArgument,
    _encode_RemoveEntryArgument,
} from "../DirectoryAbstractService/RemoveEntryArgument.ta.js";
export {
    RemoveEntryResult,
    _decode_RemoveEntryResult,
    _encode_RemoveEntryResult,
} from "../DirectoryAbstractService/RemoveEntryResult.ta.js";
export { securityError } from "../DirectoryAbstractService/securityError.oa.js";
export { serviceError } from "../DirectoryAbstractService/serviceError.oa.js";
export { updateError } from "../DirectoryAbstractService/updateError.oa.js";

/* START_OF_SYMBOL_DEFINITION removeEntry */
/**
 * @summary removeEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * removeEntry OPERATION ::= {
 *   ARGUMENT  RemoveEntryArgument
 *   RESULT    RemoveEntryResult
 *   ERRORS    {nameError |
 *              serviceError |
 *              referral |
 *              securityError |
 *              updateError}
 *   CODE      id-opcode-removeEntry }
 * ```
 *
 * @constant
 * @type {OPERATION<RemoveEntryArgument, RemoveEntryResult>}
 * @implements {OPERATION<RemoveEntryArgument, RemoveEntryResult>}
 */
export const removeEntry: OPERATION<RemoveEntryArgument, RemoveEntryResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RemoveEntryArgument,
        "&ResultType": _decode_RemoveEntryResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_RemoveEntryArgument,
        "&ResultType": _encode_RemoveEntryResult,
    },
    "&Errors": [
        nameError,
        serviceError,
        referral,
        securityError,
        updateError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_removeEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION removeEntry */

/* eslint-enable */
