/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
import {
    _decode_DSABindArgument,
    _encode_DSABindArgument,
} from "../DistributedOperations/DSABindArgument.ta.js";
import {
    _decode_DSABindResult,
    _encode_DSABindResult,
} from "../DistributedOperations/DSABindResult.ta.js";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.js";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export {
    DSABindArgument,
    _decode_DSABindArgument,
    _encode_DSABindArgument,
} from "../DistributedOperations/DSABindArgument.ta.js";
export {
    DSABindResult,
    _decode_DSABindResult,
    _encode_DSABindResult,
} from "../DistributedOperations/DSABindResult.ta.js";

/* START_OF_SYMBOL_DEFINITION dSABind */
/**
 * @summary dSABind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dSABind OPERATION ::= {
 *   ARGUMENT     DSABindArgument
 *   RESULT       DSABindResult
 *   ERRORS       { directoryBindError } }
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const dSABind: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DSABindArgument,
        "&ResultType": _decode_DSABindResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_DSABindArgument,
        "&ResultType": _encode_DSABindResult,
    },
    "&Errors": undefined,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dSABind */

/* eslint-enable */
