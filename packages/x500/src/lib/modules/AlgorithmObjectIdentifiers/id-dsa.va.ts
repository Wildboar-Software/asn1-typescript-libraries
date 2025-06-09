/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ansi_x9_57 } from "../AlgorithmObjectIdentifiers/ansi-x9-57.va.js";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.js";
export { ansi_x9_57 } from "../AlgorithmObjectIdentifiers/ansi-x9-57.va.js";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION id_dsa */
/**
 * @summary id_dsa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-dsa                  ID ::= { ansi-x9-57 x9algorithm(4) 1 }
 * ```
 *
 * @constant
 */
export const id_dsa: ID = new _OID([/* x9algorithm */ 4, 1], ansi_x9_57);
/* END_OF_SYMBOL_DEFINITION id_dsa */

/* eslint-enable */
