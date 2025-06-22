/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_soa } from "../UsefulDefinitions/id-soa.va.mjs";
/**
 * @summary id_soa_governingStructureRule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soa-governingStructureRule OBJECT IDENTIFIER ::= {id-soa 10}
 * ```
 *
 * @constant
 */
export const id_soa_governingStructureRule: OBJECT_IDENTIFIER = _OID.fromParts(
    [10],
    id_soa
);

/* eslint-enable */
