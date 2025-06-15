/* eslint-disable */
import { id_opcode_removeEntry } from "../CommonProtocolSpecification/id-opcode-removeEntry.va.mjs";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
import { referral } from "../DirectoryAbstractService/referral.oa.mjs";
import {
    RemoveEntryArgument,
    _decode_RemoveEntryArgument,
    _encode_RemoveEntryArgument,
} from "../DirectoryAbstractService/RemoveEntryArgument.ta.mjs";
import {
    RemoveEntryResult,
    _decode_RemoveEntryResult,
    _encode_RemoveEntryResult,
} from "../DirectoryAbstractService/RemoveEntryResult.ta.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
import { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";
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

/* eslint-enable */
