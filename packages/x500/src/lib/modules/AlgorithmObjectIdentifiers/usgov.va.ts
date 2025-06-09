/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.js";
import { us_joint } from "../AlgorithmObjectIdentifiers/us-joint.va.js";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.js";
export { us_joint } from "../AlgorithmObjectIdentifiers/us-joint.va.js";

/* START_OF_SYMBOL_DEFINITION usgov */
/**
 * @summary usgov
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * usgov                   ID ::= { us-joint organization(1) gov(101) }
 * ```
 *
 * @constant
 */
export const usgov: ID = new _OID(
    [/* organization */ 1, /* gov */ 101],
    us_joint
);
/* END_OF_SYMBOL_DEFINITION usgov */

/* eslint-enable */
