/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { certicom_curve } from "../AlgorithmObjectIdentifiers/certicom-curve.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary sect409k1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect409k1       ID ::= { certicom-curve 36 }
 * ```
 *
 * @constant
 */
export const sect409k1: ID = new _OID([36], certicom_curve);

/* eslint-enable */
