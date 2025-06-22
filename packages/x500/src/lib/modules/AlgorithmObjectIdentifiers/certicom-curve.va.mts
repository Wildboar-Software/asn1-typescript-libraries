/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { certicom } from "../AlgorithmObjectIdentifiers/certicom.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary certicom_curve
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certicom-curve          ID ::= { certicom curve(0) }
 * ```
 *
 * @constant
 */
export const certicom_curve: ID = _OID.fromParts([/* curve */ 0], certicom);

/* eslint-enable */
