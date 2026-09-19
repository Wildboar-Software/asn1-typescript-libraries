/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";
// export { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";


/**
 * @summary id_nato_mmhs_hat_pilot_forwarding_info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-hat-pilot-forwarding-info ID ::= {id-hat  12}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_hat_pilot_forwarding_info: ID = _OID.fromParts([
    12,
], id_hat);

/* eslint-enable */
