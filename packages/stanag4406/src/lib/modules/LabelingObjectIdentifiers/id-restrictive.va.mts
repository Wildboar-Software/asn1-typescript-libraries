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
