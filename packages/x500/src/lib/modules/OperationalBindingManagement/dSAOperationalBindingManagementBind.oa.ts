/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
import { dSABind } from "../DistributedOperations/dSABind.oa.js";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.js";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export { dSABind } from "../DistributedOperations/dSABind.oa.js";

/* START_OF_SYMBOL_DEFINITION dSAOperationalBindingManagementBind */
/**
 * @summary dSAOperationalBindingManagementBind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dSAOperationalBindingManagementBind OPERATION ::= dSABind
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const dSAOperationalBindingManagementBind: OPERATION = dSABind;
/* END_OF_SYMBOL_DEFINITION dSAOperationalBindingManagementBind */

/* eslint-enable */
