/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { certicom_curve } from "../AlgorithmObjectIdentifiers/certicom-curve.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary sect409r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect409r1       ID ::= { certicom-curve 37 }
 * ```
 *
 * @constant
 */
export const sect409r1: ID = _OID.fromParts([37], certicom_curve);

/* eslint-enable */
