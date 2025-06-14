/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
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
export const id_doa_nonSpecificKnowledge: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_doa
);

/* eslint-enable */
