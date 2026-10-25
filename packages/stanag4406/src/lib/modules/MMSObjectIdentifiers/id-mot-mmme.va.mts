/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mot } from "../MMSObjectIdentifiers/id-mot.va.mjs";


/**
 * @summary id_mot_mmme
 * @description
 * 
 * The root object of the military messaging environment. Its primary refinement
 * pairs the MMS with the MMS user. STANAG 4406 (Ed. 2), Annex A, Annex F.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mot-mmme ID ::= {id-mot  0}
 * ```
 * 
 * @constant
 */
export
const id_mot_mmme: ID = _OID.fromParts([
    0,
], id_mot);

/* eslint-enable */
