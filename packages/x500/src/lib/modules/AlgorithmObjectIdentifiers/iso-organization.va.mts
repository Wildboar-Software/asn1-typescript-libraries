/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary iso_organization
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * iso-organization        ID ::= { iso(1) identified-organization(3) }
 * ```
 *
 * @constant
 */
export const iso_organization: ID = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
]);

/* eslint-enable */
