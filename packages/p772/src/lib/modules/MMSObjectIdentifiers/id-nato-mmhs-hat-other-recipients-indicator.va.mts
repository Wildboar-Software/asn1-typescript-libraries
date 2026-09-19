/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";
// export { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";


/**
 * @summary id_nato_mmhs_hat_other_recipients_indicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-hat-other-recipients-indicator ID ::= {id-hat  11}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_hat_other_recipients_indicator: ID = _OID.fromParts([
    11,
], id_hat);

/* eslint-enable */
