/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_sc } from "../UsefulDefinitions/id-sc.va.mjs";
/**
 * @summary id_sc_accessControlSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sc-accessControlSubentry            OBJECT IDENTIFIER ::= {id-sc 1}
 * ```
 *
 * @constant
 */
export const id_sc_accessControlSubentry: OBJECT_IDENTIFIER = _OID.fromParts(
    [1],
    id_sc
);

/* eslint-enable */
