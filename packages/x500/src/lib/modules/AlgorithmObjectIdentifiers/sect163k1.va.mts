/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { certicom_curve } from "../AlgorithmObjectIdentifiers/certicom-curve.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary sect163k1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect163k1       ID ::= { certicom-curve 1 }
 * ```
 *
 * @constant
 */
export const sect163k1: ID = _OID.fromParts([1], certicom_curve);

/* eslint-enable */
