/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_avc } from "../UsefulDefinitions/id-avc.va.mjs";
/**
 * @summary id_avc_ldapAttributeOption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-avc-ldapAttributeOption                OBJECT IDENTIFIER ::= {id-avc 5}
 * ```
 *
 * @constant
 */
export const id_avc_ldapAttributeOption: OBJECT_IDENTIFIER = _OID.fromParts(
    [5],
    id_avc
);

/* eslint-enable */
