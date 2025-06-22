/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { iso_organization } from "../AlgorithmObjectIdentifiers/iso-organization.va.mjs";
/**
 * @summary teletrust
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletrust               ID ::= { iso-organization teletrust(36) }
 * ```
 *
 * @constant
 */
export const teletrust: ID = _OID.fromParts([/* teletrust */ 36], iso_organization);

/* eslint-enable */
