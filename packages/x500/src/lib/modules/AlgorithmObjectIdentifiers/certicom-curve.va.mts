/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { certicom } from "../AlgorithmObjectIdentifiers/certicom.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
export { certicom } from "../AlgorithmObjectIdentifiers/certicom.va.mjs";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.mjs";

/* START_OF_SYMBOL_DEFINITION certicom_curve */
/**
 * @summary certicom_curve
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certicom-curve          ID ::= { certicom curve(0) }
 * ```
 *
 * @constant
 */
export const certicom_curve: ID = new _OID([/* curve */ 0], certicom);
/* END_OF_SYMBOL_DEFINITION certicom_curve */

/* eslint-enable */
