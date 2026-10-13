/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mpt } from "../MMSObjectIdentifiers/id-mpt.va.mjs";


/**
 * @summary id_mpt_management
 * @description
 * 
 * Management port. The consumer invokes change-auto-discard,
 * change-auto-acknowledgement, and change-auto-forwarding. STANAG 4406 (Ed. 2),
 * Annex A, Annex G.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mpt-management ID ::= {id-mpt  2}
 * ```
 * 
 * @constant
 */
export
const id_mpt_management: ID = _OID.fromParts([
    2,
], id_mpt);

/* eslint-enable */
