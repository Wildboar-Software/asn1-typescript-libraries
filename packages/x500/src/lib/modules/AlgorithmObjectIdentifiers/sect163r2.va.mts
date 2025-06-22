/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { certicom_curve } from "../AlgorithmObjectIdentifiers/certicom-curve.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary sect163r2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect163r2       ID ::= { certicom-curve 15 }
 * ```
 *
 * @constant
 */
export const sect163r2: ID = _OID.fromParts([15], certicom_curve);

/* eslint-enable */
