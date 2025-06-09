/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.js";
import { iso_organization } from "../AlgorithmObjectIdentifiers/iso-organization.va.js";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.js";
export { iso_organization } from "../AlgorithmObjectIdentifiers/iso-organization.va.js";

/* START_OF_SYMBOL_DEFINITION teletrust */
/**
 * @summary teletrust
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletrust               ID ::= { iso-organization teletrust(36) }
 * ```
 *
 * @constant
 */
export const teletrust: ID = new _OID([/* teletrust */ 36], iso_organization);
/* END_OF_SYMBOL_DEFINITION teletrust */

/* eslint-enable */
