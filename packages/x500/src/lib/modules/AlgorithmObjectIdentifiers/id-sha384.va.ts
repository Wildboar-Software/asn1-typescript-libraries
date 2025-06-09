/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va.js";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.js";
export { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va.js";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION id_sha384 */
/**
 * @summary id_sha384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha384               ID ::= { hashAlgs 2 }
 * ```
 *
 * @constant
 */
export const id_sha384: ID = new _OID([2], hashAlgs);
/* END_OF_SYMBOL_DEFINITION id_sha384 */

/* eslint-enable */
