/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_at } from "../UsefulDefinitions/id-at.va.mjs";
/**
 * @summary id_at_organizationIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-organizationIdentifier              OBJECT IDENTIFIER ::= {id-at 97}
 * ```
 *
 * @constant
 */
export const id_at_organizationIdentifier: OBJECT_IDENTIFIER = _OID.fromParts(
    [97],
    id_at
);

/* eslint-enable */
