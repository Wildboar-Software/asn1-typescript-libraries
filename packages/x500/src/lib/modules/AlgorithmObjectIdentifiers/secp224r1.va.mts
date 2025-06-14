/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { certicom_curve } from "../AlgorithmObjectIdentifiers/certicom-curve.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/* START_OF_SYMBOL_DEFINITION secp224r1 */
/**
 * @summary secp224r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secp224r1       ID ::= { certicom-curve 33 }
 * ```
 *
 * @constant
 */
export const secp224r1: ID = new _OID([33], certicom_curve);
/* END_OF_SYMBOL_DEFINITION secp224r1 */

/* eslint-enable */
