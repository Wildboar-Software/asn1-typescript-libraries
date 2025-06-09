/* eslint-disable */
import { id_op_modifyOperationalBinding } from "../CommonProtocolSpecification/id-op-modifyOperationalBinding.va.js";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
import { securityError } from "../DirectoryAbstractService/securityError.oa.js";
import {
    ModifyOperationalBindingArgument,
    _decode_ModifyOperationalBindingArgument,
    _encode_ModifyOperationalBindingArgument,
} from "../OperationalBindingManagement/ModifyOperationalBindingArgument.ta.js";
import {
    ModifyOperationalBindingResult,
    _decode_ModifyOperationalBindingResult,
    _encode_ModifyOperationalBindingResult,
} from "../OperationalBindingManagement/ModifyOperationalBindingResult.ta.js";
import { operationalBindingError } from "../OperationalBindingManagement/operationalBindingError.oa.js";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.js";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
export { id_op_modifyOperationalBinding } from "../CommonProtocolSpecification/id-op-modifyOperationalBinding.va.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export { securityError } from "../DirectoryAbstractService/securityError.oa.js";
export {
    ModifyOperationalBindingArgument,
    _decode_ModifyOperationalBindingArgument,
    _encode_ModifyOperationalBindingArgument,
} from "../OperationalBindingManagement/ModifyOperationalBindingArgument.ta.js";
export {
    ModifyOperationalBindingResult,
    _decode_ModifyOperationalBindingResult,
    _encode_ModifyOperationalBindingResult,
} from "../OperationalBindingManagement/ModifyOperationalBindingResult.ta.js";
export { operationalBindingError } from "../OperationalBindingManagement/operationalBindingError.oa.js";

/* START_OF_SYMBOL_DEFINITION modifyOperationalBinding */
/**
 * @summary modifyOperationalBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * modifyOperationalBinding OPERATION ::= {
 *   ARGUMENT  ModifyOperationalBindingArgument
 *   RESULT    ModifyOperationalBindingResult
 *   ERRORS    {operationalBindingError | securityError}
 *   CODE      id-op-modifyOperationalBinding }
 * ```
 *
 * @constant
 * @type {OPERATION<ModifyOperationalBindingArgument, ModifyOperationalBindingResult>}
 * @implements {OPERATION<ModifyOperationalBindingArgument, ModifyOperationalBindingResult>}
 */
export const modifyOperationalBinding: OPERATION<
    ModifyOperationalBindingArgument,
    ModifyOperationalBindingResult
> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ModifyOperationalBindingArgument,
        "&ResultType": _decode_ModifyOperationalBindingResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ModifyOperationalBindingArgument,
        "&ResultType": _encode_ModifyOperationalBindingResult,
    },
    "&Errors": [
        operationalBindingError,
        securityError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_op_modifyOperationalBinding /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION modifyOperationalBinding */

/* eslint-enable */
