/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { iso_organization } from "../AlgorithmObjectIdentifiers/iso-organization.va.mjs";
/**
 * @summary certicom
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certicom                ID ::= { iso-organization certicom(132) }
 * ```
 *
 * @constant
 */
export const certicom: ID = new _OID([/* certicom */ 132], iso_organization);

/* eslint-enable */
