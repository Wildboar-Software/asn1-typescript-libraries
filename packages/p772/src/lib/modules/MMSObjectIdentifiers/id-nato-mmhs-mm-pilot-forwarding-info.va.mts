/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mm } from "../MMSObjectIdentifiers/id-mm.va.mjs";
// export { id_mm } from "../MMSObjectIdentifiers/id-mm.va.mjs";


/**
 * @summary id_nato_mmhs_mm_pilot_forwarding_info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-mm-pilot-forwarding-info ID ::= {id-mm  12}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_mm_pilot_forwarding_info: ID = _OID.fromParts([
    12,
], id_mm);

/* eslint-enable */
