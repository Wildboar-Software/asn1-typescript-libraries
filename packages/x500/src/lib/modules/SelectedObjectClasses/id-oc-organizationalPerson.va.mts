/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_oc } from "../UsefulDefinitions/id-oc.va.mjs";
/**
 * @summary id_oc_organizationalPerson
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-organizationalPerson     OBJECT IDENTIFIER ::= {id-oc 7}
 * ```
 *
 * @constant
 */
export const id_oc_organizationalPerson: OBJECT_IDENTIFIER = _OID.fromParts(
    [7],
    id_oc
);

/* eslint-enable */
