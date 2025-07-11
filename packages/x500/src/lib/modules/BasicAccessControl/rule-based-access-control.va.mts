/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_acScheme } from "../UsefulDefinitions/id-acScheme.va.mjs";
/**
 * @summary rule_based_access_control
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rule-based-access-control      OBJECT IDENTIFIER ::= {id-acScheme 3}
 * ```
 *
 * @constant
 */
export const rule_based_access_control: OBJECT_IDENTIFIER = _OID.fromParts(
    [3],
    id_acScheme
);

/* eslint-enable */
