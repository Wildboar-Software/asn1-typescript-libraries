/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { certicom_curve } from "../AlgorithmObjectIdentifiers/certicom-curve.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary sect233k1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect233k1       ID ::= { certicom-curve 26 }
 * ```
 *
 * @constant
 */
export const sect233k1: ID = _OID.fromParts([26], certicom_curve);

/* eslint-enable */
