/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { certicom_curve } from "../AlgorithmObjectIdentifiers/certicom-curve.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
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
export const secp224r1: ID = _OID.fromParts([33], certicom_curve);

/* eslint-enable */
