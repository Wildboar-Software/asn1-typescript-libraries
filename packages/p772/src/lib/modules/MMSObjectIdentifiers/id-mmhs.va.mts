/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";


/**
 * @summary id_mmhs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mmhs ID ::= {iso(1) identified-organization(3) nato(26) stanags(0) mmhs(4406)
 *    object-identifiers(0)}
 * ```
 * 
 * @constant
 */
export
const id_mmhs: ID = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* nato */ 26,
    /* stanags */ 0,
    /* mmhs */ 4406,
    /* object-identifiers */ 0,
]);

/* eslint-enable */
