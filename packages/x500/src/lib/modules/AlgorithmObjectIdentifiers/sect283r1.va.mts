/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { certicom_curve } from "../AlgorithmObjectIdentifiers/certicom-curve.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary sect283r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect283r1       ID ::= { certicom-curve 17 }
 * ```
 *
 * @constant
 */
export const sect283r1: ID = _OID.fromParts([17], certicom_curve);

/* eslint-enable */
