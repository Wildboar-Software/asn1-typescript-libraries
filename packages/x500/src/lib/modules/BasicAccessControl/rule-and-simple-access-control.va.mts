/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_acScheme } from "../UsefulDefinitions/id-acScheme.va.mjs";
/**
 * @summary rule_and_simple_access_control
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rule-and-simple-access-control OBJECT IDENTIFIER ::= {id-acScheme 5}
 * ```
 *
 * @constant
 */
export const rule_and_simple_access_control: OBJECT_IDENTIFIER = _OID.fromParts(
    [5],
    id_acScheme
);

/* eslint-enable */
