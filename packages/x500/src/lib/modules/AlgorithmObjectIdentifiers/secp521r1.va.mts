/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { certicom_curve } from "../AlgorithmObjectIdentifiers/certicom-curve.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary secp521r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secp521r1       ID ::= { certicom-curve 35 }
 * ```
 *
 * @constant
 */
export const secp521r1: ID = _OID.fromParts([35], certicom_curve);

/* eslint-enable */
