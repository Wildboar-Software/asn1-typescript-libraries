/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_informationlabel } from "../MMSObjectIdentifiers/id-informationlabel.va.mjs";


/**
 * @summary id_nato_mmhs_informationlabel_exclusive
 * @description
 * 
 * Deprecated information-label category identifier. Edition 2 marks the value
 * deprecated. Current NATO security categories are the Annex H tag sets in the
 * ESS security label. STANAG 4406 (Ed. 2), Annex A, Annex D, and Annex H.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-informationlabel-exclusive ID ::= {id-informationlabel  6}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_informationlabel_exclusive: ID = _OID.fromParts([
    6,
], id_informationlabel);

/* eslint-enable */
