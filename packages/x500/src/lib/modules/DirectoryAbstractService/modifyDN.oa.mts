/* eslint-disable */
import { id_opcode_modifyDN } from "../CommonProtocolSpecification/id-opcode-modifyDN.va.mjs";
import { type OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import {
    ModifyDNArgument,
    _decode_ModifyDNArgument,
    _encode_ModifyDNArgument,
} from "../DirectoryAbstractService/ModifyDNArgument.ta.mjs";
import {
    ModifyDNResult,
    _decode_ModifyDNResult,
    _encode_ModifyDNResult,
} from "../DirectoryAbstractService/ModifyDNResult.ta.mjs";
import { nameError } from "../DirectoryAbstractService/nameError.oa.mjs";
import { referral } from "../DirectoryAbstractService/referral.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa.mjs";
import { updateError } from "../DirectoryAbstractService/updateError.oa.mjs";
/**
 * @summary modifyDN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * modifyDN OPERATION ::= {
 *   ARGUMENT  ModifyDNArgument
 *   RESULT    ModifyDNResult
 *   ERRORS    {nameError |
 *              serviceError |
 *              referral |
 *              securityError |
 *              updateError}
 *   CODE      id-opcode-modifyDN }
 * ```
 *
 * @constant
 * @type {OPERATION<ModifyDNArgument, ModifyDNResult>}
 * @implements {OPERATION<ModifyDNArgument, ModifyDNResult>}
 */
export const modifyDN: OPERATION<ModifyDNArgument, ModifyDNResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ModifyDNArgument,
        "&ResultType": _decode_ModifyDNResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ModifyDNArgument,
        "&ResultType": _encode_ModifyDNResult,
    },
    "&Errors": [
        nameError,
        serviceError,
        referral,
        securityError,
        updateError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_modifyDN /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
