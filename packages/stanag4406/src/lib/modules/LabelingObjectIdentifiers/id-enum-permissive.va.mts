/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
import { id_enumerated } from "../LabelingObjectIdentifiers/id-enumerated.va.mjs";


/**
 * @summary id_enum_permissive
 * @description
 * 
 * Arc for enumerated permissive tags, `{id-enumerated 0}`. Non-NATO
 * releasability is the permissive category. STANAG 4406 (Ed. 2), Annex H.3.4
 * and H.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-enum-permissive ID ::= {id-enumerated 0}
 * ```
 * 
 * @constant
 */
export
const id_enum_permissive: ID = _OID.fromParts([
    0,
], id_enumerated);

/* eslint-enable */
