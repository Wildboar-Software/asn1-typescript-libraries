/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mmhs } from "../MMSObjectIdentifiers/id-mmhs.va.mjs";


/**
 * @summary id_informationlabel
 * @description
 * 
 * Arc for the deprecated information-label category identifiers, `{id-mmhs
 * 13}`. STANAG 4406 (Ed. 2), Annex A, Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-informationlabel ID ::= {id-mmhs  13}
 * ```
 * 
 * @constant
 */
export
const id_informationlabel: ID = _OID.fromParts([
    13,
], id_mmhs);

/* eslint-enable */
