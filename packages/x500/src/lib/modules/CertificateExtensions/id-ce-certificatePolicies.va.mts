/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_ce } from "../UsefulDefinitions/id-ce.va.mjs";
/**
 * @summary id_ce_certificatePolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-certificatePolicies                OBJECT IDENTIFIER ::= {id-ce 32}
 * ```
 *
 * @constant
 */
export const id_ce_certificatePolicies: OBJECT_IDENTIFIER = _OID.fromParts(
    [32],
    id_ce
);

/* eslint-enable */
