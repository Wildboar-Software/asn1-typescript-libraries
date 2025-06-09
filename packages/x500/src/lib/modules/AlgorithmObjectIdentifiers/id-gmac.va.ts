/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.js";
import { iso9797 } from "../AlgorithmObjectIdentifiers/iso9797.va.js";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.js";
export { iso9797 } from "../AlgorithmObjectIdentifiers/iso9797.va.js";

/* START_OF_SYMBOL_DEFINITION id_gmac */
/**
 * @summary id_gmac
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-gmac                 ID ::= { iso9797 part3(3) gmac(4) }
 * ```
 *
 * @constant
 */
export const id_gmac: ID = new _OID([/* part3 */ 3, /* gmac */ 4], iso9797);
/* END_OF_SYMBOL_DEFINITION id_gmac */

/* eslint-enable */
