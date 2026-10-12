/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_ref } from "../MMSObjectIdentifiers/id-ref.va.mjs";


/**
 * @summary id_ref_secondary
 * @description
 * 
 * Secondary refinement of the MMS into the MTS, the MM-UA, the MM-MS, the ACP
 * 127 access unit, and `pdau`. STANAG 4406 (Ed. 2), Annex A, Annex F.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ref-secondary ID ::= {id-ref  1}
 * ```
 * 
 * @constant
 */
export
const id_ref_secondary: ID = _OID.fromParts([
    1,
], id_ref);

/* eslint-enable */
