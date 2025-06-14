/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { certicom_curve } from "../AlgorithmObjectIdentifiers/certicom-curve.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary sect233r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect233r1       ID ::= { certicom-curve 27 }
 * ```
 *
 * @constant
 */
export const sect233r1: ID = new _OID([27], certicom_curve);

/* eslint-enable */
