/* eslint-disable */
import { id_opcode_list } from "../CommonProtocolSpecification/id-opcode-list.va.js";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
import { abandoned } from "../DirectoryAbstractService/abandoned.oa.js";
import {
    ListArgument,
    _decode_ListArgument,
    _encode_ListArgument,
} from "../DirectoryAbstractService/ListArgument.ta.js";
import {
    ListResult,
    _decode_ListResult,
    _encode_ListResult,
} from "../DirectoryAbstractService/ListResult.ta.js";
import { nameError } from "../DirectoryAbstractService/nameError.oa.js";
import { referral } from "../DirectoryAbstractService/referral.oa.js";
import { securityError } from "../DirectoryAbstractService/securityError.oa.js";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.js";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.js";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
export { id_opcode_list } from "../CommonProtocolSpecification/id-opcode-list.va.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export { abandoned } from "../DirectoryAbstractService/abandoned.oa.js";
export {
    ListArgument,
    _decode_ListArgument,
    _encode_ListArgument,
} from "../DirectoryAbstractService/ListArgument.ta.js";
export {
    ListResult,
    _decode_ListResult,
    _encode_ListResult,
} from "../DirectoryAbstractService/ListResult.ta.js";
export { nameError } from "../DirectoryAbstractService/nameError.oa.js";
export { referral } from "../DirectoryAbstractService/referral.oa.js";
export { securityError } from "../DirectoryAbstractService/securityError.oa.js";
export { serviceError } from "../DirectoryAbstractService/serviceError.oa.js";

/* START_OF_SYMBOL_DEFINITION list */
/**
 * @summary list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * list OPERATION ::= {
 *   ARGUMENT  ListArgument
 *   RESULT    ListResult
 *   ERRORS    {nameError |
 *              serviceError |
 *              referral |
 *              abandoned |
 *              securityError}
 *   CODE      id-opcode-list }
 * ```
 *
 * @constant
 * @type {OPERATION<ListArgument, ListResult>}
 * @implements {OPERATION<ListArgument, ListResult>}
 */
export const list: OPERATION<ListArgument, ListResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ListArgument,
        "&ResultType": _decode_ListResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ListArgument,
        "&ResultType": _encode_ListResult,
    },
    "&Errors": [
        nameError,
        serviceError,
        referral,
        abandoned,
        securityError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_list /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION list */

/* eslint-enable */
