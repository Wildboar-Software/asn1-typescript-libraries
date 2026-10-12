/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
import { id_labeling_values } from "../LabelingObjectIdentifiers/id-labeling-values.va.mjs";


/**
 * @summary id_tag_names
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-tag-names ID ::= {id-labeling-values 0}
 * ```
 * 
 * @constant
 */
export
const id_tag_names: ID = _OID.fromParts([
    0,
], id_labeling_values);

/* eslint-enable */
