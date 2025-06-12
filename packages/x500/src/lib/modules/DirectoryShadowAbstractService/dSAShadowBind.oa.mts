/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import { dSABind } from "../DistributedOperations/dSABind.oa.mjs";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.mjs";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.mjs";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
export { dSABind } from "../DistributedOperations/dSABind.oa.mjs";

/* START_OF_SYMBOL_DEFINITION dSAShadowBind */
/**
 * @summary dSAShadowBind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dSAShadowBind OPERATION ::= dSABind
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const dSAShadowBind: OPERATION = dSABind;
/* END_OF_SYMBOL_DEFINITION dSAShadowBind */

/* eslint-enable */
