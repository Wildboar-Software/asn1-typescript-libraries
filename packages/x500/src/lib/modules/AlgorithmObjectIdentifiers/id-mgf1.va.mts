/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { pkcs_1 } from "../AlgorithmObjectIdentifiers/pkcs-1.va.mjs";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
export { pkcs_1 } from "../AlgorithmObjectIdentifiers/pkcs-1.va.mjs";

/* START_OF_SYMBOL_DEFINITION id_mgf1 */
/**
 * @summary id_mgf1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mgf1                 ID ::= { pkcs-1 8 }
 * ```
 *
 * @constant
 */
export const id_mgf1: ID = new _OID([8], pkcs_1);
/* END_OF_SYMBOL_DEFINITION id_mgf1 */

/* eslint-enable */
