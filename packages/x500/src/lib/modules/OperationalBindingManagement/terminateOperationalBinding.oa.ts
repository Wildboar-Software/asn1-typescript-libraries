/* eslint-disable */
import { id_op_terminateOperationalBinding } from "../CommonProtocolSpecification/id-op-terminateOperationalBinding.va.js";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
import { securityError } from "../DirectoryAbstractService/securityError.oa.js";
import { operationalBindingError } from "../OperationalBindingManagement/operationalBindingError.oa.js";
import {
    TerminateOperationalBindingArgument,
    _decode_TerminateOperationalBindingArgument,
    _encode_TerminateOperationalBindingArgument,
} from "../OperationalBindingManagement/TerminateOperationalBindingArgument.ta.js";
import {
    TerminateOperationalBindingResult,
    _decode_TerminateOperationalBindingResult,
    _encode_TerminateOperationalBindingResult,
} from "../OperationalBindingManagement/TerminateOperationalBindingResult.ta.js";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.js";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
export { id_op_terminateOperationalBinding } from "../CommonProtocolSpecification/id-op-terminateOperationalBinding.va.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export { securityError } from "../DirectoryAbstractService/securityError.oa.js";
export { operationalBindingError } from "../OperationalBindingManagement/operationalBindingError.oa.js";
export {
    TerminateOperationalBindingArgument,
    _decode_TerminateOperationalBindingArgument,
    _encode_TerminateOperationalBindingArgument,
} from "../OperationalBindingManagement/TerminateOperationalBindingArgument.ta.js";
export {
    TerminateOperationalBindingResult,
    _decode_TerminateOperationalBindingResult,
    _encode_TerminateOperationalBindingResult,
} from "../OperationalBindingManagement/TerminateOperationalBindingResult.ta.js";

/* START_OF_SYMBOL_DEFINITION terminateOperationalBinding */
/**
 * @summary terminateOperationalBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * terminateOperationalBinding OPERATION ::= {
 *   ARGUMENT  TerminateOperationalBindingArgument
 *   RESULT    TerminateOperationalBindingResult
 *   ERRORS    {operationalBindingError | securityError}
 *   CODE      id-op-terminateOperationalBinding }
 * ```
 *
 * @constant
 * @type {OPERATION<TerminateOperationalBindingArgument, TerminateOperationalBindingResult>}
 * @implements {OPERATION<TerminateOperationalBindingArgument, TerminateOperationalBindingResult>}
 */
export const terminateOperationalBinding: OPERATION<
    TerminateOperationalBindingArgument,
    TerminateOperationalBindingResult
> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_TerminateOperationalBindingArgument,
        "&ResultType": _decode_TerminateOperationalBindingResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_TerminateOperationalBindingArgument,
        "&ResultType": _encode_TerminateOperationalBindingResult,
    },
    "&Errors": [
        operationalBindingError,
        securityError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_op_terminateOperationalBinding /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION terminateOperationalBinding */

/* eslint-enable */
