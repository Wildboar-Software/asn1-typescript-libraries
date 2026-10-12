/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
import { id_informative } from "../LabelingObjectIdentifiers/id-informative.va.mjs";


/**
 * @summary id_discretionary_handling
 * @description
 * 
 * Tag name for the informative discretionary-handling bit string,
 * `{id-informative 0}`. The bits are `DiscretionaryHandling`. STANAG 4406 (Ed.
 * 2), Annex H.3.4 and H.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-discretionary-handling ID ::= {id-informative 0}
 * ```
 * 
 * @constant
 */
export
const id_discretionary_handling: ID = _OID.fromParts([
    0,
], id_informative);

/* eslint-enable */
