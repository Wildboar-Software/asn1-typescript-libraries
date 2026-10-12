/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mmhs } from "../MMSObjectIdentifiers/id-mmhs.va.mjs";


/**
 * @summary id_mmts
 * @description
 * 
 * Arc for MTS object identifiers, `{id-mmhs 8}`. The priority-level qualifier
 * is `{id-mmts 0}` in the X.411 annex; this module defines the arc only. STANAG
 * 4406 (Ed. 2), Annex A, Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mmts ID ::= {id-mmhs  8}
 * ```
 * 
 * @constant
 */
export
const id_mmts: ID = _OID.fromParts([
    8,
], id_mmhs);

/* eslint-enable */
