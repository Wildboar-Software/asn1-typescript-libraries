/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
import { id_tag_names } from "../LabelingObjectIdentifiers/id-tag-names.va.mjs";


/**
 * @summary id_informative
 * @description
 * 
 * Arc for informative tag names, `{id-tag-names 2}`. Discretionary handling is
 * the informative category. STANAG 4406 (Ed. 2), Annex H.3.4 and H.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-informative ID ::= {id-tag-names 2}
 * ```
 * 
 * @constant
 */
export
const id_informative: ID = _OID.fromParts([
    2,
], id_tag_names);

/* eslint-enable */
