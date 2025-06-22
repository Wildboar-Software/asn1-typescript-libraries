/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
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
export const certicom: ID = _OID.fromParts([/* certicom */ 132], iso_organization);

/* eslint-enable */
