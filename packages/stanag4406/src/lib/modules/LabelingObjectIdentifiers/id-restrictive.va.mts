/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
import { id_tag_names } from "../LabelingObjectIdentifiers/id-tag-names.va.mjs";


/**
 * @summary id_restrictive
 * @description
 * 
 * Arc for restrictive tag names, `{id-tag-names 0}`. Sensitivity is the
 * restrictive category. STANAG 4406 (Ed. 2), Annex H.3.4 and H.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-restrictive ID ::= {id-tag-names 0}
 * ```
 * 
 * @constant
 */
export
const id_restrictive: ID = _OID.fromParts([
    0,
], id_tag_names);

/* eslint-enable */
