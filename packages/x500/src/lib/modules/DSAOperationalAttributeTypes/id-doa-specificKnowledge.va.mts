/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_doa } from "../UsefulDefinitions/id-doa.va.mjs";
/**
 * @summary id_doa_specificKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doa-specificKnowledge        OBJECT IDENTIFIER ::= {id-doa 3}
 * ```
 *
 * @constant
 */
export const id_doa_specificKnowledge: OBJECT_IDENTIFIER = _OID.fromParts(
    [3],
    id_doa
);

/* eslint-enable */
