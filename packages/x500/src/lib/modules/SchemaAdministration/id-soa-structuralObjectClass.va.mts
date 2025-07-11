/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_soa } from "../UsefulDefinitions/id-soa.va.mjs";
/**
 * @summary id_soa_structuralObjectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soa-structuralObjectClass  OBJECT IDENTIFIER ::= {id-soa 9}
 * ```
 *
 * @constant
 */
export const id_soa_structuralObjectClass: OBJECT_IDENTIFIER = _OID.fromParts(
    [9],
    id_soa
);

/* eslint-enable */
