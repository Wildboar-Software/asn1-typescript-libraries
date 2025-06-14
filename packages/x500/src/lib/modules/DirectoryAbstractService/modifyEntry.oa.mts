/* eslint-disable */
import { id_opcode_modifyEntry } from "../CommonProtocolSpecification/id-opcode-modifyEntry.va.mjs";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa.mjs";
import {
    ModifyEntryArgument,
    _decode_ModifyEntryArgument,
    _encode_ModifyEntryArgument,
} from "../DirectoryAbstractService/ModifyEntryArgument.ta.mjs";
import {
    ModifyEntryResult,
    _decode_ModifyEntryResult,
    _encode_ModifyEntryResult,
} from "../DirectoryAbstractService/ModifyEntryResult.ta.mjs";
import { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
import { referral } from "../DirectoryAbstractService/referral.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
import { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";
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
