/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mm } from "../MMSObjectIdentifiers/id-mm.va.mjs";
// export { id_mm } from "../MMSObjectIdentifiers/id-mm.va.mjs";


/**
 * @summary id_nato_mmhs_mm_other_recipients_indicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-mm-other-recipients-indicator ID ::= {id-mm  11}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_mm_other_recipients_indicator: ID = _OID.fromParts([
    11,
], id_mm);

/* eslint-enable */
