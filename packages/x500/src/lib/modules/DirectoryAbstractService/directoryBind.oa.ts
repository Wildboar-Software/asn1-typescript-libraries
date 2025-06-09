/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
import {
    DirectoryBindArgument,
    _decode_DirectoryBindArgument,
    _encode_DirectoryBindArgument,
} from "../DirectoryAbstractService/DirectoryBindArgument.ta.js";
import { directoryBindError } from "../DirectoryAbstractService/directoryBindError.oa.js";
import {
    DirectoryBindResult,
    _decode_DirectoryBindResult,
    _encode_DirectoryBindResult,
} from "../DirectoryAbstractService/DirectoryBindResult.ta.js";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.js";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export {
    DirectoryBindArgument,
    _decode_DirectoryBindArgument,
    _encode_DirectoryBindArgument,
} from "../DirectoryAbstractService/DirectoryBindArgument.ta.js";
export { directoryBindError } from "../DirectoryAbstractService/directoryBindError.oa.js";
export {
    DirectoryBindResult,
    _decode_DirectoryBindResult,
    _encode_DirectoryBindResult,
} from "../DirectoryAbstractService/DirectoryBindResult.ta.js";

/* START_OF_SYMBOL_DEFINITION directoryBind */
/**
 * @summary directoryBind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryBind OPERATION ::= {
 *   ARGUMENT  DirectoryBindArgument
 *   RESULT    DirectoryBindResult
 *   ERRORS    {directoryBindError} }
 * ```
 *
 * @constant
 * @type {OPERATION<DirectoryBindArgument, DirectoryBindResult>}
 * @implements {OPERATION<DirectoryBindArgument, DirectoryBindResult>}
 */
export const directoryBind: OPERATION<
    DirectoryBindArgument,
    DirectoryBindResult
> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DirectoryBindArgument,
        "&ResultType": _decode_DirectoryBindResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_DirectoryBindArgument,
        "&ResultType": _encode_DirectoryBindResult,
    },
    "&Errors": [directoryBindError] /* OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION directoryBind */

/* eslint-enable */
