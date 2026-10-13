/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_ref } from "../MMSObjectIdentifiers/id-ref.va.mjs";


/**
 * @summary id_ref_primary
 * @description
 * 
 * Primary refinement of `mmme` into the MMS and the MMS user. STANAG 4406 (Ed.
 * 2), Annex A, Annex F.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ref-primary ID ::= {id-ref  0}
 * ```
 * 
 * @constant
 */
export
const id_ref_primary: ID = _OID.fromParts([
    0,
], id_ref);

/* eslint-enable */
