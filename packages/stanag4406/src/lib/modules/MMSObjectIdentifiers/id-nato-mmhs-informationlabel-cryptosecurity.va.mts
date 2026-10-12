/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_informationlabel } from "../MMSObjectIdentifiers/id-informationlabel.va.mjs";


/**
 * @summary id_nato_mmhs_informationlabel_cryptosecurity
 * @description
 * 
 * Deprecated information-label category identifier. Edition 2 marks the value
 * deprecated. Current NATO security categories are the Annex H tag sets in the
 * ESS security label. STANAG 4406 (Ed. 2), Annex A, Annex D, and Annex H.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-informationlabel-cryptosecurity ID ::= {id-informationlabel  2}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_informationlabel_cryptosecurity: ID = _OID.fromParts([
    2,
], id_informationlabel);

/* eslint-enable */
