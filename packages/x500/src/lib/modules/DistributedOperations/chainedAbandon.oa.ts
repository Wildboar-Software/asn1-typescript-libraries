/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
import { abandon } from "../DirectoryAbstractService/abandon.oa.js";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.js";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export { abandon } from "../DirectoryAbstractService/abandon.oa.js";

/* START_OF_SYMBOL_DEFINITION chainedAbandon */
/**
 * @summary chainedAbandon
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedAbandon            OPERATION ::= abandon
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedAbandon: OPERATION = abandon;
/* END_OF_SYMBOL_DEFINITION chainedAbandon */

/* eslint-enable */
