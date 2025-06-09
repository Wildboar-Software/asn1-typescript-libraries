/* eslint-disable */
import { id_op_establishOperationalBinding } from "../CommonProtocolSpecification/id-op-establishOperationalBinding.va.js";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
import { securityError } from "../DirectoryAbstractService/securityError.oa.js";
import {
    EstablishOperationalBindingArgument,
    _decode_EstablishOperationalBindingArgument,
    _encode_EstablishOperationalBindingArgument,
} from "../OperationalBindingManagement/EstablishOperationalBindingArgument.ta.js";
import {
    EstablishOperationalBindingResult,
    _decode_EstablishOperationalBindingResult,
    _encode_EstablishOperationalBindingResult,
} from "../OperationalBindingManagement/EstablishOperationalBindingResult.ta.js";
import { operationalBindingError } from "../OperationalBindingManagement/operationalBindingError.oa.js";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.js";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
export { id_op_establishOperationalBinding } from "../CommonProtocolSpecification/id-op-establishOperationalBinding.va.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export { securityError } from "../DirectoryAbstractService/securityError.oa.js";
export {
    EstablishOperationalBindingArgument,
    _decode_EstablishOperationalBindingArgument,
    _encode_EstablishOperationalBindingArgument,
} from "../OperationalBindingManagement/EstablishOperationalBindingArgument.ta.js";
export {
    EstablishOperationalBindingResult,
    _decode_EstablishOperationalBindingResult,
    _encode_EstablishOperationalBindingResult,
} from "../OperationalBindingManagement/EstablishOperationalBindingResult.ta.js";
export { operationalBindingError } from "../OperationalBindingManagement/operationalBindingError.oa.js";

/* START_OF_SYMBOL_DEFINITION establishOperationalBinding */
/**
 * @summary establishOperationalBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * establishOperationalBinding OPERATION ::= {
 *   ARGUMENT   EstablishOperationalBindingArgument
 *   RESULT     EstablishOperationalBindingResult
 *   ERRORS     {operationalBindingError | securityError}
 *   CODE       id-op-establishOperationalBinding }
 * ```
 *
 * @constant
 * @type {OPERATION<EstablishOperationalBindingArgument, EstablishOperationalBindingResult>}
 * @implements {OPERATION<EstablishOperationalBindingArgument, EstablishOperationalBindingResult>}
 */
export const establishOperationalBinding: OPERATION<
    EstablishOperationalBindingArgument,
    EstablishOperationalBindingResult
> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EstablishOperationalBindingArgument,
        "&ResultType": _decode_EstablishOperationalBindingResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_EstablishOperationalBindingArgument,
        "&ResultType": _encode_EstablishOperationalBindingResult,
    },
    "&Errors": [
        operationalBindingError,
        securityError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_op_establishOperationalBinding /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION establishOperationalBinding */

/* eslint-enable */
