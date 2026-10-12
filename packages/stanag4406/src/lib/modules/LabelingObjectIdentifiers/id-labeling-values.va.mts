/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";


/**
 * @summary id_labeling_values
 * @description
 * 
 * Module identifier for these label values, `{id-mmhs module(0)
 * labeling-values(13)}`. STANAG 4406 (Ed. 2), Annex H.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-labeling-values ID ::= {
 *     iso(1)
 *     identified-organization(3)
 *     nato(26)
 *     stanags(0)
 *     mmhs(4406)
 *     object-identifiers(0)
 *     module(0)
 *     labeling-values(13)
 * }
 * ```
 * 
 * @constant
 */
export
const id_labeling_values: ID = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* nato */ 26,
    /* stanags */ 0,
    /* mmhs */ 4406,
    /* object-identifiers */ 0,
    /* module */ 0,
    /* labeling-values */ 13,
]);

/* eslint-enable */
