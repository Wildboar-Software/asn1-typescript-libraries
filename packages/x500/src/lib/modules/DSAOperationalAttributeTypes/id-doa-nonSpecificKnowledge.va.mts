/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_doa } from "../UsefulDefinitions/id-doa.va.mjs";
/**
 * @summary id_doa_nonSpecificKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doa-nonSpecificKnowledge     OBJECT IDENTIFIER ::= {id-doa 4}
 * ```
 *
 * @constant
 */
export const id_doa_nonSpecificKnowledge: OBJECT_IDENTIFIER = _OID.fromParts(
    [4],
    id_doa
);

/* eslint-enable */
