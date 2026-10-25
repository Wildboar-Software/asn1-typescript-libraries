/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
import { id_enumerated } from "../LabelingObjectIdentifiers/id-enumerated.va.mjs";


/**
 * @summary id_enum_restrictive
 * @description
 * 
 * Arc for enumerated restrictive tags, `{id-enumerated 1}`. Annex H assigns no
 * tag under this arc. STANAG 4406 (Ed. 2), Annex H.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-enum-restrictive ID ::= {id-enumerated 1}
 * ```
 * 
 * @constant
 */
export
const id_enum_restrictive: ID = _OID.fromParts([
    1,
], id_enumerated);

/* eslint-enable */
