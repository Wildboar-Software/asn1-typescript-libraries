/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";


/**
 * @summary id_nato_mmhs_hat_acp127_notification_request
 * @description
 * 
 * Message-store attribute identifier for the per-recipient ACP 127 notification
 * request. Single-valued, equality match. STANAG 4406 (Ed. 2), Annex A, C.2.5
 * and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-hat-acp127-notification-request ID ::= {id-hat  15}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_hat_acp127_notification_request: ID = _OID.fromParts([
    15,
], id_hat);

/* eslint-enable */
