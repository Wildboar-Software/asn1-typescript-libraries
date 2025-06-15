/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { certicom_curve } from "../AlgorithmObjectIdentifiers/certicom-curve.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary secp384r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secp384r1       ID ::= { certicom-curve 34 }
 * ```
 *
 * @constant
 */
export const secp384r1: ID = new _OID([34], certicom_curve);

/* eslint-enable */
