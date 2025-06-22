/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_at } from "../UsefulDefinitions/id-at.va.mjs";
/**
 * @summary id_at_family_information
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-family-information OBJECT IDENTIFIER ::= {id-at 64}
 * ```
 *
 * @constant
 */
export const id_at_family_information: OBJECT_IDENTIFIER = _OID.fromParts(
    [64],
    id_at
);

/* eslint-enable */
