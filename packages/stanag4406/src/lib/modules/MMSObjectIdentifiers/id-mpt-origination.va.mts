/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mpt } from "../MMSObjectIdentifiers/id-mpt.va.mjs";


/**
 * @summary id_mpt_origination
 * @description
 * 
 * Origination port. The consumer invokes originate-probe, originate-MM, and
 * originate-MRN. Probes are not permitted across national boundaries. STANAG
 * 4406 (Ed. 2), Annex A, Annex G.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mpt-origination ID ::= {id-mpt  0}
 * ```
 * 
 * @constant
 */
export
const id_mpt_origination: ID = _OID.fromParts([
    0,
], id_mpt);

/* eslint-enable */
