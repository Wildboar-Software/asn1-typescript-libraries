/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
import { id_restrictive } from "../LabelingObjectIdentifiers/id-restrictive.va.mjs";


/**
 * @summary id_sensitivity
 * @description
 * 
 * Tag name for the restrictive sensitivity bit string. The formal module
 * assigns `{id-restrictive 1}`. Table 2 of Annex H.3.4 writes the same path
 * with `sensitivity(0)`. The bits are `Sensitivity`. STANAG 4406 (Ed. 2), Annex
 * H.3.4 and H.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-sensitivity ID ::= {id-restrictive 1}
 * ```
 * 
 * @constant
 */
export
const id_sensitivity: ID = _OID.fromParts([
    1,
], id_restrictive);

/* eslint-enable */
