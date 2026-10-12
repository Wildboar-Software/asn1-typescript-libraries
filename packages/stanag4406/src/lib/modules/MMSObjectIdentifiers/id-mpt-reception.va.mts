/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mpt } from "../MMSObjectIdentifiers/id-mpt.va.mjs";


/**
 * @summary id_mpt_reception
 * @description
 * 
 * Reception port. The consumer invokes receive-report, receive-MM, receive-MRN,
 * receive-MNRN, and receive-MON. STANAG 4406 (Ed. 2), Annex A, Annex G.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mpt-reception ID ::= {id-mpt  1}
 * ```
 * 
 * @constant
 */
export
const id_mpt_reception: ID = _OID.fromParts([
    1,
], id_mpt);

/* eslint-enable */
